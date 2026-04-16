// src/components/admin/BlogsTab.tsx
import { useState, useEffect, useCallback } from 'react';
import { RefreshCw, Plus, Pencil, Trash2, PenTool, CheckCircle, XCircle, Clock } from 'lucide-react';
import toast from 'react-hot-toast';

interface Blog {
  id: string; slug: string; title: string; excerpt: string; content: string;
  featuredImage?: string; seoKeywords: string; author: string;
  published: boolean; publishDate?: string; createdAt: string;
}

export default function BlogsTab() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editBlog, setEditBlog] = useState<Blog | null>(null);

  const fetchBlogs = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/blogs');
      const j = await res.json();
      if (j.success) setBlogs(j.data);
      else toast.error('Failed to load blogs.');
    } catch {
      toast.error('Network error loading blogs.');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchBlogs();
  }, [fetchBlogs]);

  const deleteBlog = async (id: string, title: string) => {
    if (!confirm(`Delete blog "${title}"? This cannot be undone.`)) return;
    const tid = toast.loading('Deleting...');
    try {
      const res = await fetch(`/api/blogs/${id}`, { method: 'DELETE' });
      const j = await res.json();
      if (j.success) {
        setBlogs(prev => prev.filter(b => b.id !== id));
        toast.success('Blog deleted.', { id: tid });
      } else {
        toast.error(j.error || 'Delete failed.', { id: tid });
      }
    } catch {
      toast.error('Network error.', { id: tid });
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
        <h2 className="font-display text-2xl text-white flex items-center gap-2">
          <PenTool size={24} style={{ color: '#F97316' }} /> Manage Blogs
        </h2>
        <div className="flex gap-2">
          <button onClick={fetchBlogs} className="btn-ghost text-xs px-4 py-2.5 flex items-center gap-1.5">
            <RefreshCw size={13} /> Refresh
          </button>
          <button onClick={() => { setShowForm(true); setEditBlog(null); }} className="btn-primary text-xs px-5 py-2.5">
            <Plus size={14} /> Write New Article
          </button>
        </div>
      </div>

      {(showForm || editBlog) && (
        <BlogForm
          blog={editBlog}
          onClose={() => { setShowForm(false); setEditBlog(null); }}
          onSaved={(saved, isEdit) => {
            if (isEdit) setBlogs(p => p.map(x => x.id === saved.id ? saved : x));
            else setBlogs(p => [saved, ...p]);
            setShowForm(false); setEditBlog(null);
          }}
        />
      )}

      {loading ? (
        <div className="card p-12 flex items-center justify-center gap-3 text-slate-400">
          <span className="w-5 h-5 border-2 rounded-full animate-spin1" style={{ borderColor: '#1E2D45', borderTopColor: '#F97316' }} />
          Loading blogs...
        </div>
      ) : blogs.length === 0 ? (
        <div className="card p-12 text-center text-slate-400">
          <PenTool size={40} className="mx-auto mb-3 opacity-30" />
          <p>No articles yet. Write your first SEO article!</p>
        </div>
      ) : (
        <div className="card overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr style={{ borderBottom: '1px solid #1E2D45', background: 'rgba(11,17,32,0.5)' }}>
                <th className="text-left py-3 px-4 text-slate-500 text-xs uppercase tracking-wider">Title</th>
                <th className="text-left py-3 px-4 text-slate-500 text-xs uppercase tracking-wider hidden md:table-cell">Details</th>
                <th className="text-center py-3 px-4 text-slate-500 text-xs uppercase tracking-wider">Status</th>
                <th className="text-right py-3 px-4 text-slate-500 text-xs uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody>
              {blogs.map((b, i) => (
                <tr key={b.id} style={{ borderBottom: '1px solid rgba(30,45,69,0.4)', background: i % 2 === 0 ? '' : 'rgba(11,17,32,0.2)' }}>
                  <td className="py-3 px-4">
                    <p className="text-slate-300 font-medium text-xs truncate max-w-[200px] sm:max-w-xs">{b.title}</p>
                    <p className="text-slate-500 text-[10px] mt-0.5 truncate max-w-[200px]">/{b.slug}</p>
                  </td>
                  <td className="py-3 px-4 text-slate-500 text-[11px] hidden md:table-cell">
                    <div>Author: {b.author}</div>
                    <div className="truncate max-w-[150px]">KWs: {b.seoKeywords || 'None'}</div>
                  </td>
                  <td className="py-3 px-4 text-center">
                    {b.published ? (
                      b.publishDate && new Date(b.publishDate) > new Date() ? (
                        <span className="inline-flex items-center gap-1 text-[10px] uppercase font-mono font-bold text-blue-400 bg-blue-400/10 px-2 py-0.5 rounded" title={new Date(b.publishDate).toLocaleString()}>
                          <Clock size={10} /> Scheduled
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-[10px] uppercase font-mono font-bold text-green-400 bg-green-400/10 px-2 py-0.5 rounded">
                          <CheckCircle size={10} /> Published
                        </span>
                      )
                    ) : (
                      <span className="inline-flex items-center gap-1 text-[10px] uppercase font-mono font-bold text-slate-400 bg-slate-800 px-2 py-0.5 rounded">
                        <XCircle size={10} /> Draft
                      </span>
                    )}
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center justify-end gap-2">
                      <button onClick={() => { setEditBlog(b); setShowForm(false); }} className="p-1.5 text-slate-500 hover:text-orange-400 transition-colors" title="Edit">
                        <Pencil size={14} />
                      </button>
                      <button onClick={() => deleteBlog(b.id, b.title)} className="p-1.5 text-slate-500 hover:text-red-400 transition-colors" title="Delete">
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

function BlogForm({ blog, onClose, onSaved }: { blog: Blog | null; onClose: () => void; onSaved: (b: Blog, isEdit: boolean) => void }) {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: blog?.title || '',
    excerpt: blog?.excerpt || '',
    content: blog?.content || '',
    seoKeywords: blog?.seoKeywords || '',
    author: blog?.author || 'AMS Civil Team',
    published: blog?.published ?? true,
    publishDate: blog?.publishDate ? new Date(new Date(blog.publishDate).getTime() - new Date().getTimezoneOffset() * 60000).toISOString().slice(0, 16) : new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().slice(0, 16),
    featuredImage: blog?.featuredImage || '',
  });

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const url = blog ? `/api/blogs/${blog.id}` : '/api/blogs';
      const method = blog ? 'PUT' : 'POST';

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const j = await res.json();
      if (j.success) {
        toast.success(blog ? 'Blog updated.' : 'Blog created.');
        onSaved(j.data, !!blog);
      } else {
        toast.error(j.error || 'Got an error.');
      }
    } catch {
      toast.error('Network error.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card p-6 shadow-xl mb-6 relative border-orange-500/20" style={{ border: '1px solid rgba(249,115,22,0.3)' }}>
      <button onClick={onClose} className="absolute right-4 top-4 text-slate-500 hover:text-red-400 transition-colors">
        <XCircle size={20} />
      </button>
      
      <h3 className="text-lg text-white font-semibold mb-5 flex items-center gap-2">
        <PenTool size={18} style={{ color: '#F97316' }} />
        {blog ? 'Edit Article' : 'Write New Article'}
      </h3>

      <form onSubmit={submit} className="flex flex-col gap-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-slate-300 text-xs font-medium mb-1.5">Article Title *</label>
            <input type="text" value={formData.title} onChange={e => setFormData({ ...formData, title: e.target.value })} 
              className="form-input text-sm" required placeholder="e.g., Best Bungalow Construction Tips" />
          </div>
          <div>
            <label className="block text-slate-300 text-xs font-medium mb-1.5">Author</label>
            <input type="text" value={formData.author} onChange={e => setFormData({ ...formData, author: e.target.value })} 
              className="form-input text-sm" placeholder="Author name" />
          </div>
        </div>

        <div>
          <label className="block text-slate-300 text-xs font-medium mb-1.5">Short Excerpt (shows on index page)</label>
          <textarea value={formData.excerpt} onChange={e => setFormData({ ...formData, excerpt: e.target.value })} 
            className="form-input text-sm resize-none" rows={2} placeholder="A short 1-2 sentence hook..." />
        </div>

        <div>
          <label className="block text-slate-300 text-xs font-medium mb-1.5">SEO Keywords (Comma separated)</label>
          <input type="text" value={formData.seoKeywords} onChange={e => setFormData({ ...formData, seoKeywords: e.target.value })} 
            className="form-input text-sm font-mono text-[11px]" placeholder="e.g., bungalow construction mumbai, civil contractors near me" />
        </div>

        <div>
          <label className="block text-slate-300 text-xs font-medium mb-1.5">Full Article Content (HTML allowed) *</label>
          <textarea value={formData.content} onChange={e => setFormData({ ...formData, content: e.target.value })} 
            className="form-input text-sm font-mono leading-relaxed" rows={12} required 
            placeholder="<p>Write your article here. You can use standard text, or HTML tags like <b>bold</b> and <h2>heading</h2>.</p>" />
        </div>

        <div className="flex items-center justify-between mt-2 flex-wrap gap-4">
          <div className="flex items-center gap-2">
            <input type="checkbox" id="published" checked={formData.published} 
              onChange={e => setFormData({ ...formData, published: e.target.checked })} 
              className="w-4 h-4 rounded border-slate-700 bg-slate-800 text-orange-500 focus:ring-orange-500 focus:ring-offset-slate-900" />
            <label htmlFor="published" className="text-sm text-slate-300 cursor-pointer">Post is visible on public website (Published)</label>
          </div>
          <div className="flex items-center gap-2">
            <label className="text-xs text-slate-400">Publish Date & Time:</label>
            <input type="datetime-local" value={formData.publishDate} 
              onChange={e => setFormData({ ...formData, publishDate: e.target.value })}
              className="form-input text-xs py-1 px-2 h-auto" />
          </div>
        </div>

        <div className="flex justify-end gap-3 mt-4 pt-4 border-t border-slate-800">
          <button type="button" onClick={onClose} disabled={loading} className="btn-outline text-xs px-5 py-2.5">Cancel</button>
          <button type="submit" disabled={loading} className="btn-primary text-xs px-6 py-2.5 min-w-[120px] justify-center">
            {loading ? 'Saving...' : (blog ? 'Update Article' : 'Publish Article')}
          </button>
        </div>
      </form>
    </div>
  );
}
