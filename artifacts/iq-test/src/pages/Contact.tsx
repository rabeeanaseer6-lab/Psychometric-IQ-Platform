import { Layout } from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { usePageTitle } from '@/hooks/usePageTitle';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Mail, MapPin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function Contact() {
  usePageTitle('Contact Us');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "Thank you for contacting us. We'll respond shortly.",
    });
    (e.target as HTMLFormElement).reset();
  };

  return (
    <Layout>
      <div className="py-16 md:py-24 bg-white min-h-screen">
        <div className="container mx-auto max-w-5xl px-4">
          
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Contact Us</h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Have questions about our methodology, need technical support, or want to report an issue? Our team is here to help.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            <div className="lg:col-span-1 space-y-8">
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Mail className="h-5 w-5 text-primary mr-3 mt-0.5" />
                    <div>
                      <div className="font-medium text-slate-900">Email</div>
                      <a href="mailto:support@freeiqtest.online" className="text-slate-600 hover:text-primary">support@freeiqtest.online</a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-primary mr-3 mt-0.5" />
                    <div>
                      <div className="font-medium text-slate-900">Headquarters</div>
                      <div className="text-slate-600">Research Dept<br />1200 Tech Boulevard<br />San Francisco, CA 94107</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-slate-50 p-6 rounded-xl border">
                <h3 className="font-bold text-slate-900 mb-2">Check the FAQ first</h3>
                <p className="text-sm text-slate-600 mb-4">Many common questions about scores and methodologies are already answered.</p>
                <Button variant="outline" className="w-full" asChild>
                  <a href="/#faq">View FAQ</a>
                </Button>
              </div>
            </div>

            <div className="lg:col-span-2">
              <Card className="shadow-sm">
                <CardHeader>
                  <CardTitle>Send a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-slate-900">Name</label>
                        <Input id="name" required placeholder="John Doe" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-slate-900">Email</label>
                        <Input id="email" type="email" required placeholder="john@example.com" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium text-slate-900">Subject</label>
                      <Input id="subject" required placeholder="How can we help?" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-slate-900">Message</label>
                      <Textarea id="message" required placeholder="Your message here..." rows={6} />
                    </div>
                    <Button type="submit" size="lg" className="w-full sm:w-auto px-8">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

          </div>
        </div>
      </div>
    </Layout>
  );
}