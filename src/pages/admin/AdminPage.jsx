import { useQuery } from '@tanstack/react-query'
import { Mail, User, MessageSquare } from 'lucide-react'
import { getSubmissions } from '../../services/admin'

export default function AdminPage() {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ['submissions'],
    queryFn: getSubmissions,
    refetchInterval: 30000,
  })

  const submissions = data?.data || []

  return (
    <div style={{ padding: '2rem 1rem', minHeight: 'calc(100vh - 200px)', background: '#f8f8fc' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2rem' }}>
          <div>
            <h1 style={{ fontSize: '2rem', fontWeight: '800', color: '#0f172a', margin: 0, fontFamily: 'var(--font-serif)' }}>Contact Submissions</h1>
            <p style={{ color: '#64748b', margin: '0.25rem 0 0' }}>
              {submissions.length} message{submissions.length !== 1 ? 's' : ''} received
            </p>
          </div>
          <button
            onClick={() => refetch()}
            style={{ padding: '0.625rem 1.25rem', background: '#7c3aed', color: 'white', border: 'none', borderRadius: '12px', fontWeight: '600', cursor: 'pointer' }}
          >
            Refresh
          </button>
        </div>

        {isLoading && (
          <div style={{ textAlign: 'center', padding: '3rem', color: '#64748b' }}>Loading submissions...</div>
        )}

        {error && (
          <div style={{ textAlign: 'center', padding: '3rem', color: '#ef4444' }}>
            Failed to load submissions. Make sure the backend is running.
          </div>
        )}

        {!isLoading && !error && submissions.length === 0 && (
          <div style={{ textAlign: 'center', padding: '3rem', color: '#64748b', background: 'white', borderRadius: '16px' }}>
            No contact submissions yet.
          </div>
        )}

        <div style={{ display: 'grid', gap: '1.25rem' }}>
          {submissions.map((sub) => (
            <div
              key={sub.id}
              style={{
                background: 'white',
                borderRadius: '16px',
                padding: '1.5rem',
                border: '1px solid rgba(0,0,0,0.06)',
                boxShadow: '0 2px 10px rgba(0,0,0,0.04)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{
                    width: '40px', height: '40px', borderRadius: '12px',
                    background: 'linear-gradient(135deg, rgba(124,58,237,0.1), rgba(124,58,237,0.05))',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <User size={18} color="#7c3aed" />
                  </div>
                  <div>
                    <p style={{ margin: 0, fontWeight: '700', color: '#0f172a' }}>{sub.name}</p>
                    <p style={{ margin: 0, fontSize: '0.85rem', color: '#64748b' }}>{sub.email}</p>
                  </div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <p style={{ margin: 0, fontSize: '0.8rem', color: '#94a3b8' }}>
                    {new Date(sub.created_at).toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'short' })}
                  </p>
                  <p style={{ margin: '0.2rem 0 0', fontSize: '0.8rem', fontWeight: '600', color: '#7c3aed' }}>#{sub.id}</p>
                </div>
              </div>

              <div style={{ marginBottom: '0.75rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
                  <Mail size={14} color="#64748b" />
                  <p style={{ margin: 0, fontWeight: '600', color: '#0f172a' }}>{sub.subject}</p>
                </div>
              </div>

              <div style={{
                background: '#f8f8fc', borderRadius: '12px', padding: '1rem',
                border: '1px solid rgba(0,0,0,0.04)',
              }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                  <MessageSquare size={16} color="#7c3aed" style={{ marginTop: '2px' }} />
                  <p style={{ margin: 0, color: '#334155', lineHeight: 1.6, whiteSpace: 'pre-wrap' }}>{sub.message}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
