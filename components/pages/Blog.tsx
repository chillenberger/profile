import React, { useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { Icons } from '../../Experience';
import { BLOG_POSTS } from '../../Blogs';

const Blog: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const activePost = id ? BLOG_POSTS.find(p => p.id === id) : BLOG_POSTS[0];

  useEffect(() => {
    if (!id && BLOG_POSTS.length > 0) {
      navigate(`/blog/${BLOG_POSTS[0].id}`, { replace: true });
    }
  }, [id, navigate]);

  return (
    <div className="max-w-7xl mx-auto pt-24 pb-16 px-6 relative flex flex-col lg:flex-row gap-12">
      <div className="lg:w-1/3 lg:sticky lg:top-24 lg:h-[calc(100vh-8rem)] overflow-y-auto pr-4">
        <h2 className="text-2xl font-bold mb-6 text-neon-blue uppercase tracking-widest border-b border-slate-800 pb-2">DATA_LOGS</h2>
        <div className="space-y-4">
          {BLOG_POSTS.map(post => (
            <Link
              key={post.id}
              to={`/blog/${post.id}`}
              className={`block p-4 border transition-all group ${activePost?.id === post.id ? 'bg-neon-blue/10 border-neon-blue' : 'bg-transparent border-slate-800 hover:border-neon-blue/50'}`}
            >
              <h3 className={`font-bold uppercase tracking-wide mb-1 transition-colors ${activePost?.id === post.id ? 'text-neon-blue' : 'text-slate-300 group-hover:text-white'}`}>{post.title}</h3>
              <div className="flex justify-between text-xs text-slate-400 font-mono">
                <span>{post.date}</span>
                <span>{post.readTime}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="lg:w-2/3 min-h-[500px]">
        {activePost ? (
          <article className="glass-panel p-8 md:p-12 animate-fade-in-up relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-20">
              <Icons.Github />
            </div>
            <div className="mb-8 border-b border-slate-800 pb-8">
              <div className="flex flex-wrap gap-2 mb-4">
                {activePost.tags.map(tag => (
                  <span key={tag} className="px-2 py-1 bg-slate-900 border border-slate-700 text-xs font-mono text-neon-green uppercase">
                    #{tag}
                  </span>
                ))}
              </div>
              <h1 className="text-3xl md:text-5xl font-bold mb-4 uppercase tracking-tighter text-white">{activePost.title}</h1>
              <div className="flex gap-4 text-slate-400 text-sm font-mono border-l-2 border-neon-blue pl-4">
                <span>{activePost.date}</span>
                <span>//</span>
                <span>{activePost.readTime}</span>
              </div>
            </div>
            <div className="prose prose-invert max-w-none prose-p:text-slate-300 prose-p:font-mono prose-headings:text-neon-blue prose-headings:uppercase prose-headings:tracking-wide prose-a:text-neon-purple hover:prose-a:text-neon-blue prose-code:text-acid-yellow prose-strong:text-white">
              {activePost.content || <p>{activePost.summary}</p>}
            </div>
          </article>
        ) : (
          <div className="flex items-center justify-center h-full text-slate-400 font-mono">
            Awaiting input...
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;
