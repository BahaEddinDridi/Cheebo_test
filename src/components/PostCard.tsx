import { Heart, MessageSquare, Share2 } from "lucide-react";

export default function PostCard({ post }) {
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 p-4 bg-white dark:bg-dark-gray shadow-lg rounded-lg">
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-2">
          <img
            src={post.userImage}
            alt="User"
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border-2 border-gray-400 shadow-sm"
          />
          <div>
            <p className="font-semibold text-sm sm:text-base">{post.user}</p>
            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
              {post.time}
            </p>
          </div>
        </div>
      </div>

      <p className="mt-2 sm:mt-4 text-xs sm:text-sm text-gray-700 dark:text-gray-300">
        {post.phrase}
      </p>

      <img
        src={post.petImage}
        alt="Pet"
        className="w-full h-48 sm:h-64 md:h-96 object-cover mt-2 sm:mt-4 rounded-lg"
      />

      <div className="flex justify-between items-center mt-2 sm:mt-4">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 dark:text-gray-400" />
            <span className="text-xs sm:text-sm">{post.likes}</span>
          </div>
          <div className="flex items-center gap-1">
            <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 dark:text-gray-400" />
            <span className="text-xs sm:text-sm">{post.comments}</span>
          </div>
        </div>
        <Share2 className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 dark:text-gray-400" />
      </div>
    </div>
  );
}