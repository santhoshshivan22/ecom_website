import { X } from 'lucide-react'

export default function Toast({ message, type = 'success', onClose }) {
  const bgColor = {
    success: 'bg-green-600',
    error: 'bg-red-600',
    info: 'bg-blue-600',
  }[type]

  return (
    <div className={`flex items-center justify-between gap-4 rounded-lg px-4 py-3 text-white shadow-lg ${bgColor}`}>
      <p className="text-sm font-medium">{message}</p>
      <button onClick={onClose} className="shrink-0" aria-label="Close">
        <X className="h-4 w-4" />
      </button>
    </div>
  )
}