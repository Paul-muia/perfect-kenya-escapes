
import { useState, useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { ArrowLeft, Calendar, Clock, Facebook, Twitter, Linkedin } from 'lucide-react';
import { blogPosts } from '@/lib/data';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find(post => post.slug === slug);
  
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  if (!post) {
    return <Navigate to="/blog" replace />;
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <main className="flex-grow pt-24">
        {/* Back Link */}
        <div className="container mx-auto mb-6">
          <Link to="/blog" className="inline-flex items-center text-luxury-purple hover:underline">
            <ArrowLeft size={16} className="mr-1" />
            Back to Blog
          </Link>
        </div>
        
        {/* Hero Image */}
        <div className="container mx-auto mb-8">
          <div className="aspect-[16/9] relative rounded-lg overflow-hidden">
            <img 
              src={post.coverImage} 
              alt={post.title} 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        {/* Post Content */}
        <div className="container mx-auto mb-16">
          <div className="max-w-3xl mx-auto">
            <div className="mb-6">
              <span className="inline-block px-3 py-1 bg-luxury-purple/10 text-luxury-purple text-sm font-medium rounded-full mb-4">
                {post.category}
              </span>
              <h1 className="text-3xl lg:text-4xl font-heading font-bold text-luxury-darkPurple mb-4">
                {post.title}
              </h1>
              
              <div className="flex items-center mb-6">
                <img 
                  src={post.authorImage} 
                  alt={post.author} 
                  className="w-10 h-10 rounded-full object-cover mr-3"
                />
                <div>
                  <p className="font-medium">{post.author}</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <div className="flex items-center mr-4">
                      <Calendar size={14} className="mr-1.5" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock size={14} className="mr-1.5" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div 
                className="prose max-w-none text-gray-600"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
              
              {/* Share Links */}
              <div className="border-t border-gray-200 pt-6 mt-10">
                <p className="font-medium text-gray-700 mb-3">Share this article</p>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-500 hover:text-luxury-purple transition-colors">
                    <Facebook size={20} />
                    <span className="sr-only">Share on Facebook</span>
                  </a>
                  <a href="#" className="text-gray-500 hover:text-luxury-purple transition-colors">
                    <Twitter size={20} />
                    <span className="sr-only">Share on Twitter</span>
                  </a>
                  <a href="#" className="text-gray-500 hover:text-luxury-purple transition-colors">
                    <Linkedin size={20} />
                    <span className="sr-only">Share on LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogPost;
