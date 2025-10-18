import { FaRegEye, FaStar, FaShareAlt, FaRegBookmark } from "react-icons/fa";

const NewsCard = ({ news }) => {
  const {
    title,
    rating,
    total_view,
    author,
    thumbnail_url,
    details,
    tags,
  } = news;

  // Format date
  const date = new Date(author?.published_date).toLocaleDateString("en-GB", {
    year: "numeric",
    month: "long",
    day: "2-digit",
  });

  return (
    <div className="card bg-base-100 shadow-md border mx-5 border-gray-200 rounded-lg overflow-hidden">
      {/* Author & Date */}
      <div className="flex justify-between items-center p-4 border-b border-base-300">
        <div className="flex items-center gap-3">
          <img
            src={author?.img}
            alt={author?.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h2 className="font-semibold text-gray-800 text-sm">
              {author?.name}
            </h2>
            <p className="text-xs text-gray-500">{date}</p>
          </div>
        </div>
        <button className="text-gray-500 hover:text-primary flex gap-2">
          <FaRegBookmark />
          <FaShareAlt />
        </button>
      </div>

      {/* News Content */}
      <div className="p-4">
        <h3 className="font-bold text-lg mb-3 hover:text-primary cursor-pointer">
          {title}
        </h3>
        <figure className="mb-3">
          <img
            src={thumbnail_url}
            alt={title}
            className="w-full h-52 object-cover rounded-md"
          />
        </figure>
        <p className="text-sm text-gray-600 mb-2 line-clamp-3">{details}</p>

        {/* Read more */}
        <button className="text-primary font-semibold text-sm hover:underline">
          Read More
        </button>

        {/* Footer Section */}
        <div className="flex justify-between items-center mt-4 pt-3 border-t border-base-300 text-sm text-gray-600">
          <div className="flex items-center gap-1 text-orange-500">
            {[...Array(rating?.number || 0)].map((_, i) => (
              <FaStar key={i} />
            ))}
            <span className="ml-1 text-gray-800 font-semibold">
              {rating?.number?.toFixed(1) || "0.0"}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <FaRegEye />
            <span>{total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
