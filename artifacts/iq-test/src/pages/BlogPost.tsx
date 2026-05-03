import { Layout } from '@/components/Layout';
import { useParams, Link } from 'wouter';
import { ArrowLeft, Clock, Calendar, ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { articles, getArticleBySlug } from '@/data/articles';
import { usePageTitle } from '@/hooks/usePageTitle';

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

export default function BlogPost() {
  const { slug } = useParams();
  const article = slug ? getArticleBySlug(slug) : undefined;
  usePageTitle(article ? article.title : 'Blog Article');

  const relatedArticles = articles
    .filter(a => a.slug !== slug && (article ? a.tag === article.tag : true))
    .slice(0, 3);

  if (!article) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center bg-slate-50">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-slate-900 mb-2">Article not found</h1>
            <p className="text-slate-500 mb-6">This article may have moved or doesn't exist yet.</p>
            <Link href="/blog" className="inline-flex items-center gap-2 text-[#1a2744] font-semibold hover:underline">
              <ArrowLeft className="h-4 w-4" /> Back to Blog
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  const initials = article.author.split(' ').map(n => n[0]).join('').slice(0, 2);

  return (
    <Layout>
      <div className="min-h-screen bg-white">

        {/* Back nav */}
        <div className="bg-slate-50 border-b">
          <div className="container mx-auto max-w-4xl px-4 py-3">
            <Link href="/blog" className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-[#1a2744] transition-colors gap-1.5">
              <ArrowLeft className="h-4 w-4" /> Back to Blog
            </Link>
          </div>
        </div>

        {/* Featured image */}
        <div className="w-full h-64 md:h-96 overflow-hidden">
          <img
            src={article.featuredImage}
            alt={article.imageAlt}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Article */}
        <article className="container mx-auto max-w-3xl px-4 py-12">

          {/* Header */}
          <header className="mb-10">
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <Badge className={`text-xs font-bold ${tagColors[article.tag] ?? 'bg-slate-100 text-slate-700'}`}>
                {article.tag}
              </Badge>
              <span className="text-sm text-slate-400 flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5" />{article.readTime} read
              </span>
              <span className="text-sm text-slate-400 flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5" />{article.date}
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-6">
              {article.title}
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed border-l-4 border-[#1a2744]/20 pl-4">
              {article.excerpt}
            </p>

            <div className="flex items-center gap-3 mt-8 pt-6 border-t border-slate-100">
              <div className="w-11 h-11 rounded-full bg-[#1a2744] flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                {initials}
              </div>
              <div>
                <p className="font-semibold text-slate-900 text-sm">{article.author}</p>
                <p className="text-xs text-slate-400">{article.authorRole}</p>
              </div>
            </div>
          </header>

          {/* Body */}
          <div className="prose prose-lg prose-slate max-w-none
            prose-headings:font-extrabold prose-headings:text-slate-900
            prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
            prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
            prose-p:text-slate-700 prose-p:leading-relaxed prose-p:mb-5
            prose-blockquote:border-l-4 prose-blockquote:border-[#1a2744]/40
            prose-blockquote:bg-blue-50 prose-blockquote:rounded-r-lg
            prose-blockquote:px-6 prose-blockquote:py-4 prose-blockquote:not-italic
            prose-blockquote:text-slate-700
            prose-ul:space-y-2 prose-li:text-slate-700
          ">
            {article.sections.map((section, i) => {
              if (section.type === 'h2') {
                return <h2 key={i}>{section.content as string}</h2>;
              }
              if (section.type === 'h3') {
                return <h3 key={i}>{section.content as string}</h3>;
              }
              if (section.type === 'p') {
                return <p key={i}>{section.content as string}</p>;
              }
              if (section.type === 'blockquote') {
                return (
                  <blockquote key={i}>
                    <p>{section.content as string}</p>
                  </blockquote>
                );
              }
              if (section.type === 'ul' && Array.isArray(section.content)) {
                return (
                  <ul key={i}>
                    {(section.content as string[]).map((item, j) => (
                      <li key={j}>{item}</li>
                    ))}
                  </ul>
                );
              }
              return null;
            })}
          </div>

          {/* Author bio */}
          <div className="mt-14 p-6 bg-slate-50 rounded-xl border border-slate-200 flex gap-5 items-start">
            <div className="w-14 h-14 rounded-full bg-[#1a2744] flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
              {initials}
            </div>
            <div>
              <p className="font-bold text-slate-900 mb-0.5">{article.author}</p>
              <p className="text-sm text-[#1a2744] font-medium mb-2">{article.authorRole}</p>
              <p className="text-sm text-slate-600 leading-relaxed">
                Contributing researcher at FreeIQTest.online. Specializes in psychometric assessment, cognitive neuroscience, and translating academic research into accessible insights for a general audience.
              </p>
            </div>
          </div>
        </article>

        {/* Related posts */}
        {relatedArticles.length > 0 && (
          <div className="bg-slate-50 border-t py-14">
            <div className="container mx-auto max-w-4xl px-4">
              <h2 className="text-2xl font-extrabold text-slate-900 mb-8">Related Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedArticles.map(related => (
                  <Link key={related.slug} href={`/blog/${related.slug}`}>
                    <div className="group bg-white rounded-xl border overflow-hidden hover:shadow-md hover:border-[#1a2744]/30 transition-all cursor-pointer h-full flex flex-col">
                      <div className="h-36 overflow-hidden flex-shrink-0">
                        <img
                          src={related.featuredImage}
                          alt={related.imageAlt}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-4 flex flex-col flex-grow">
                        <Badge className={`text-xs font-bold mb-2 self-start ${tagColors[related.tag] ?? ''}`}>
                          {related.tag}
                        </Badge>
                        <p className="font-semibold text-slate-900 text-sm leading-snug line-clamp-2 group-hover:text-[#1a2744] transition-colors flex-grow">
                          {related.title}
                        </p>
                        <span className="text-xs font-semibold text-[#1a2744] flex items-center gap-1 mt-3">
                          Read <ArrowRight className="h-3 w-3" />
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}
