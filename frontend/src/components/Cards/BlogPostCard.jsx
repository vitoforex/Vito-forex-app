import React from "react";
import { Link } from "react-router-dom";
import { formatDate } from "../../lib/utils";

const BlogPostCard = ({
  image,
  title,
  author,
  author_image,
  date,
  post_id
}) => {
  return (
    <Link to={`/blog/${post_id}`}>
    <div className="bg-[#333] p-4 rounded-2xl shadow-2xl w-[280px]">
      <div className="p-2 overflow-hidden w-[250px] h-40">
        <img
          src={`${image}`}
          width={300}
          height={300}
          className="h-full w-full "
          alt="featured"
        />
      </div>
      <div className="py-2">
        <div className="py-2">
            <span className="bg-primary py-2 px-2 rounded-xl text-white text-[10px]">
                Artcile
            </span>
        </div>
        <div className="py-2">
            <h2 className="text-lg text-white line-clamp-1">
                {title}
            </h2>
           
        </div>

      </div>
      <div className="flex justify-between  items-center">
        <div className="">
            <img src={author_image} alt="author" height={50} width={50} className="h-10 w-10 rounded-full"/>
        </div>
        <div className="">
            <h2 className="text-sm font-semibold text-white">
                {author}
            </h2>
            <div className="flex ">
                <div className="text-gray-300 text-[9px]">
                    {formatDate(date)}
                </div>
               
            </div>
        </div>
      </div>

   
    </div>
    </Link>
  );
};

export default BlogPostCard;
