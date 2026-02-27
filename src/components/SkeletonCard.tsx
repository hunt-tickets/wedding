export default function SkeletonCard() {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg animate-pulse">
      {/* Image placeholder */}
      <div className="h-44 sm:h-56 bg-gray-200" />

      {/* Content placeholder */}
      <div className="p-4 sm:p-6">
        {/* Title */}
        <div className="h-6 bg-gray-200 rounded mb-3 w-3/4" />

        {/* Description lines */}
        <div className="space-y-2 mb-4">
          <div className="h-4 bg-gray-200 rounded w-full" />
          <div className="h-4 bg-gray-200 rounded w-5/6" />
        </div>

        {/* Button/Link placeholder */}
        <div className="h-8 bg-gray-200 rounded w-24 ml-auto" />
      </div>
    </div>
  );
}
