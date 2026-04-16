import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { getDb } from '@/lib/mongodb';
import { Calendar, User, ArrowLeft, Share2, ShieldCheck } from 'lucide-react';

export const revalidate = 3600;

async function getBlogData(slug: string) {
  const db = await getDb();
  const blog = await db.collection('blogs').findOne({ slug, published: true });
  return blog;
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const blog = await getBlogData(params.slug);
  
  if (!blog) {
    return {
      title: 'Article Not Found | AMS Civil Construction',
    };
  }

  return {
    title: `${blog.title} | AMS Civil Blog`,
    description: blog.excerpt || `Read ${blog.title} on the AMS Civil Construction Blog.`,
    keywords: blog.seoKeywords || 'construction blog, civil contractors, ams civil construction',
    openGraph: {
      type: 'article',
      title: blog.title,
      description: blog.excerpt,
      publishedTime: new Date(blog.createdAt).toISOString(),
      authors: [blog.author || 'AMS Civil Construction'],
    },
  };
}

export default async function BlogArticlePage({ params }: { params: { slug: string } }) {
  const blog = await getBlogData(params.slug);

  if (!blog) {
    notFound();
  }

  const formattedDate = new Date(blog.createdAt).toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: blog.title,
    description: blog.excerpt,
    author: {
      '@type': 'Person',
      name: blog.author || 'AMS Civil Construction',
    },
    datePublished: new Date(blog.createdAt).toISOString(),
    publisher: {
      '@type': 'Organization',
      name: 'AMS Civil Construction',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.amscivilwork.in/logo.png',
      },
    },
  };

  return (
    <>
      {/* Inject Article JSON-LD for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen bg-[#080D1A] pt-32 pb-24 selection-orange">
        
        {/* Subtle top glow */}
        <div className="absolute top-0 inset-x-0 h-[500px] pointer-events-none opacity-20"
          style={{ background: 'radial-gradient(circle at 50% 0%, #F97316 0%, transparent 70%)' }} />

        <article className="container-custom max-w-4xl relative z-10">
          
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-orange-400 transition-colors mb-8 font-medium">
            <ArrowLeft size={16} /> Back to all articles
          </Link>

          {/* Article Header */}
          <header className="mb-12 border-b border-[#1E2D45] pb-10">
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400 mb-6">
              <span className="flex items-center gap-1.5 px-3 py-1 rounded bg-[#101827] border border-[#1E2D45]">
                <Calendar size={13} className="text-orange-400" /> {formattedDate}
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1 rounded bg-[#101827] border border-[#1E2D45]">
                <User size={13} className="text-blue-400" /> By {blog.author || 'Expert Team'}
              </span>
            </div>

            <h1 className="font-display font-black text-white text-3xl sm:text-4xl md:text-5xl leading-tight mb-6">
              {blog.title}
            </h1>

            {blog.excerpt && (
              <p className="text-lg text-slate-300 leading-relaxed max-w-3xl border-l-2 border-orange-500 pl-4">
                {blog.excerpt}
              </p>
            )}
          </header>

          {/* Article Body */}
          <div className="bg-[#101827] rounded-2xl p-6 sm:p-10 border border-[#1E2D45] shadow-2xl">
            <div 
              className="prose prose-invert prose-orange max-w-none 
                         prose-headings:font-display prose-headings:font-bold
                         prose-h2:text-orange-500 prose-h2:border-b prose-h2:border-[#1E2D45] prose-h2:pb-2 prose-h2:mb-4
                         prose-h3:text-white prose-h3:mt-8
                         prose-p:text-slate-300 prose-p:leading-relaxed prose-p:mb-6
                         prose-strong:text-orange-300 prose-strong:font-bold
                         prose-ul:text-slate-300 prose-li:marker:text-orange-500
                         prose-a:text-orange-400 hover:prose-a:text-orange-300
                         prose-img:rounded-xl prose-img:border prose-img:border-[#1E2D45]"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />
          </div>

          {/* Footer CTA */}
          <div className="mt-16 p-8 rounded-xl relative overflow-hidden" style={{ background: 'linear-gradient(135deg, rgba(249,115,22,0.1), rgba(11,17,32,0.8))', border: '1px solid rgba(249,115,22,0.2)' }}>
            <div className="absolute right-0 top-0 w-32 h-32 bg-orange-500/10 blur-[50px] rounded-full" />
            <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-white font-display text-2xl font-bold mb-2 flex items-center gap-2">
                  <ShieldCheck className="text-orange-500" size={24} /> Starting a construction project?
                </h3>
                <p className="text-slate-400">Get a free consultation and estimate from Mumbai's trusted experts.</p>
              </div>
              <Link href="/contact" className="btn-primary whitespace-nowrap px-8 py-4 text-base">
                Get Free Quote
              </Link>
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
