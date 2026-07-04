import { forwardRef } from 'react'

const Input = forwardRef(function Input(
  { label, error, className = '', ...props },
  ref
) {
  return (
    <div className={`space-y-1 ${className}`}>
      {label && (
        <label className="block text-sm font-medium text-text-heading">
          {label}
        </label>
      )}
      <input
        ref={ref}
        className={`
          w-full rounded-lg border border-border px-4 py-2 text-sm
          outline-none transition-colors
          focus:border-primary focus:ring-2 focus:ring-primary/20
          disabled:bg-gray-50 disabled:cursor-not-allowed
          ${error ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : ''}
        `}
        {...props}
      />
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  )
})

export default Input