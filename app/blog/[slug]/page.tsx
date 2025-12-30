import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';
import Link from 'next/link';
import { getPostBySlug, getPostSlugs } from '@/lib/blog';
import { urlFor } from '@/lib/sanity';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import PortableText from '@/components/blog/portable-text';

export async function generateStaticParams() {
  try {
    const slugs = await getPostSlugs();
    if (!slugs || slugs.length === 0) {
      // For static export, we must return at least one param
      // Return a placeholder that will show 404
      return [{ slug: '__placeholder__' }];
    }
    return slugs.map((slug) => ({ slug }));
  } catch (error) {
    console.error('Error generating static params:', error);
    // Return placeholder for static export
    return [{ slug: '__placeholder__' }];
  }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  
  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: `${post.title} | Kovio Blog`,
    description: post.description,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  // Handle placeholder slug for static export
  if (slug === '__placeholder__') {
    notFound();
  }
  
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white pt-32 pb-20">
        {/* Hero Section */}
        <section className="px-4 sm:px-6 lg:px-8 pb-16">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block px-4 py-2 bg-purple-50 border border-purple-100 rounded-full mb-6">
              <span className="text-sm text-purple-900 font-medium">BLOG</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal text-gray-900 mb-6 leading-tight">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-gray-600 mb-8">
              <span>{post.author || 'Kovio Team'}</span>
              {post.publishedAt && (
                <>
                  <span>•</span>
                  <span>
                    {new Date(post.publishedAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </span>
                </>
              )}
            </div>
            {post.mainImage && (
              <div className="relative w-full h-64 md:h-96 bg-gray-100 rounded-xl overflow-hidden mb-12">
                <Image
                  src={urlFor(post.mainImage).width(1200).height(600).url()}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
            )}
          </div>
        </section>

        {/* Article Content */}
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            {post.description && (
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                {post.description}
              </p>
            )}
            
            {post.body && <PortableText value={post.body} />}

            {/* CTA Section */}
            <div className="bg-purple-50 border border-purple-200 rounded-2xl p-12 text-center mt-16">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Ready to Build a Profitable Ad Business?
              </h3>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-lg">
                Kovio helps large publishers automate their entire ad stack with AI - managing AdMob, mediation platforms, and ad ops workflows autonomously.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/waitlist"
                  className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors text-lg"
                >
                  Get early access →
                </Link>
                <Link
                  href="/"
                  className="px-8 py-4 bg-white border border-gray-200 hover:border-gray-300 text-gray-900 font-medium rounded-lg transition-colors text-lg"
                >
                  Learn more
                </Link>
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}

