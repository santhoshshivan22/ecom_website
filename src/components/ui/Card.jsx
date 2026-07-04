export default function Card({ children, className = '', hover = false }) {
  return (
    <div
      className={`
        rounded-xl border border-border bg-bg p-4
        ${hover ? 'transition-shadow hover:shadow-lg' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  )
}