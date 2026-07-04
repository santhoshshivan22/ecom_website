const variants = {
  default: 'border-border bg-gray-100 text-gray-800',
  primary: 'border-transparent bg-primary/10 text-primary',
  success: 'border-transparent bg-green-50 text-green-700',
  warning: 'border-transparent bg-yellow-50 text-yellow-700',
  danger: 'border-transparent bg-red-50 text-red-700',
}

export default function Badge({ children, variant = 'default', className = '' }) {
  return (
    <span
      className={`
        inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium
        ${variants[variant]} ${className}
      `}
    >
      {children}
    </span>
  )
}