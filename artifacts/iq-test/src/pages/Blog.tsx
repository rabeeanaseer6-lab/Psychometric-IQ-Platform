import { useState } from 'react';
import { Layout } from '@/components/Layout';
import { usePageTitle } from '@/hooks/usePageTitle';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Link } from 'wouter';
import { Search, Clock, ArrowRight } from 'lucide-react';
import { articles } from '@/data/articles';

const allTags = ['All', ...Array.from(new Set(articles.map(a => a.tag)))];

const tagColors: Record<string, string> = {
  Psychology:  'bg-purple-100 text-purple-800',
  Science:     'bg-blue-100 text-blue-800',
  Health:      'bg-green-100 text-green-800',
  Guide:       'bg-yellow-100 text-yellow-800',
  Theory:      'bg-indigo-100 text-indigo-800',
  History:     'bg-orange-100 text-orange-800',
  Research:    'bg-teal-100 text-teal-800',
  Society:     'bg-pink-100 text-pink-800',
  Lifestyle:   'bg-lime-100 text-lime-800',
  Future:      'bg-cyan-100 text-cyan-800',
};

export default function Blog() {
  usePageTitle('Cognitive Science Blog');
  const [search, setSearch] = useState('');
  const [activeTag, setActiveTag] = useState('All');

  const featured = articles[0];
  const rest = articles.slice(1);

  const filtered = rest.filter(a => {
    const matchesSearch = search === '' ||
      a.title.toLowerCase().includes(search.toLowerCase()) ||
      a.excerpt.toLowerCase().includes(search.toLowerCase());
    const matchesTag = activeTag === 'All' || a.tag === activeTag;
    return matchesSearch && matchesTag;
  });

  return (
    <Layout>
      <div className="min-h-screen bg-slate-50">

        {/* Hero */}
        <div className="bg-[#1a2744] text-white py-16 md:py-20">
          <div className="container mx-auto max-w-6xl px-4">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Cognitive Science Blog</h1>
            <p className="text-blue-100 text-lg max-w-2xl">
              Research, insights, and deep-dive guides on intelligence, psychometrics, and cognitive performance. Written by researchers, for curious minds.
            </p>
            <p className="text-blue-300 text-sm mt-4">{articles.length} articles · Updated regularly</p>
          </div>
        </div>

        <div className="container mx-auto max-w-6xl px-4 py-10 md:py-14">

          {/* Featured post */}
          <Link href={`/blog/${featured.slug}`}>
            <div className="group mb-14 rounded-2xl overflow-hidden border bg-white shadow-sm hover:shadow-lg transition-all cursor-pointer">
              <div className="md:flex">
                <div className="md:w-1/2 h-64 md:h-auto overflow-hidden">
                  <img
                    src={featured.featuredImage}
                    alt={featured.imageAlt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <Badge className={`text-xs font-bold ${tagColors[featured.tag] ?? ''}`}>{featured.tag}</Badge>
                    <span className="text-xs text-slate-400 flex items-center gap-1"><Clock className="h-3 w-3" />{featured.readTime} read</span>
                    <span className="text-xs text-blue-600 font-semibold bg-blue-50 px-2 py-0.5 rounded">Featured</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-3 group-hover:text-[#1a2744] transition-colors leading-snug">
                    {featured.title}
                  </h2>
                  <p className="text-slate-600 leading-relaxed mb-5">{featured.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-[#1a2744]/10 flex items-center justify-center text-xs font-bold text-[#1a2744]">
                        {featured.author.split(' ').map(n => n[0]).join('').slice(0, 2)}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-800">{featured.author}</p>
                        <p className="text-xs text-slate-400">{featured.date}</p>
                      </div>
                    </div>
                    <span className="text-sm font-semibold text-[#1a2744] flex items-center gap-1 group-hover:gap-2 transition-all">
                      Read article <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Link>

          {/* Search + Filter */}
          <div className="mb-8 space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <Input
                placeholder="Search articles..."
                className="pl-10 bg-white border-slate-200 h-11"
                value={search}
                onChange={e => setSearch(e.target.value)}
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {allTags.map(tag => (
                <button
                  key={tag}
                  onClick={() => setActiveTag(tag)}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-all ${
                    activeTag === tag
                      ? 'bg-[#1a2744] text-white border-[#1a2744]'
                      : 'bg-white text-slate-600 border-slate-200 hover:border-slate-400'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* Count */}
          <p className="text-sm text-slate-500 mb-6">
            {filtered.length} article{filtered.length !== 1 ? 's' : ''}
            {activeTag !== 'All' && ` in ${activeTag}`}
            {search && ` matching "${search}"`}
          </p>

          {/* Grid */}
          {filtered.length === 0 ? (
            <div className="text-center py-20 text-slate-400">
              <Search className="h-10 w-10 mx-auto mb-3 opacity-30" />
              <p>No articles found. Try a different search or filter.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
              {filtered.map((article) => (
                <Link key={article.slug} href={`/blog/${article.slug}`}>
                  <Card className="group h-full hover:shadow-lg transition-all cursor-pointer bg-white border hover:border-[#1a2744]/30 overflow-hidden">
                    <div className="h-48 overflow-hidden">
                      <img
                        src={article.featuredImage}
                        alt={article.imageAlt}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <CardContent className="p-5 flex flex-col flex-grow">
                      <div className="flex items-center justify-between mb-3">
                        <Badge className={`text-xs font-bold ${tagColors[article.tag] ?? 'bg-slate-100 text-slate-700'}`}>
                          {article.tag}
                        </Badge>
                        <span className="text-xs text-slate-400 flex items-center gap-1">
                          <Clock className="h-3 w-3" />{article.readTime}
                        </span>
                      </div>
                      <h2 className="font-bold text-slate-900 text-[15px] leading-snug mb-2 group-hover:text-[#1a2744] transition-colors line-clamp-2">
                        {article.title}
                      </h2>
                      <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 mb-4 flex-grow">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center justify-between mt-auto pt-3 border-t border-slate-100">
                        <span className="text-xs text-slate-400">{article.date}</span>
                        <span className="text-xs font-semibold text-[#1a2744] flex items-center gap-1 group-hover:gap-1.5 transition-all">
                          Read <ArrowRight className="h-3 w-3" />
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}
