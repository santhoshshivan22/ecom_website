import { Star } from 'lucide-react'

export default function RatingStars({ rating = 0, count }) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i < Math.floor(rating)
              ? 'fill-yellow-400 text-yellow-400'
              : i < rating
                ? 'fill-yellow-200 text-yellow-200'
                : 'text-gray-300'
          }`}
        />
      ))}
      {count != null && <span className="text-sm text-text">({count})</span>}
    </div>
  )
}
