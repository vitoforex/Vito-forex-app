import React from "react";
;

const BlogPostCard = ({
  image,
  title,
  author,
  author_image,
  caption,
  date,
  read_time,
}) => {
  return (
    <div className="bg-[#333] p-4 rounded-2xl shadow-2xl w-[280px]">
      <div className="p-2 overflow-hidden w-[250px] h-40">
        <img
          src={image}
          width={300}
          height={300}
          className="h-full w-full "
          alt="blog image"
        />
      </div>
      <div className="py-2">
        <div className="py-2">
            <span className="bg-primary py-2 px-2 rounded-xl text-white text-[10px]">
                Artcile
            </span>
        </div>
        <div className="py-2">
            <h2 className="text-lg text-white">
                {title}
            </h2>
            <p className="text-gray-300 text-sm">
                {caption.slice(0, 55)}...
            </p>
        </div>

      </div>
      <div className="grid grid-cols-2  items-center">
        <div className="">
            <img src={author_image} height={50} width={50} className="rounded-full"/>
        </div>
        <div className="">
            <h2 className="text-sm font-semibold text-white">
                {author}
            </h2>
            <div className="flex ">
                <div className="text-gray-300 text-[9px]">
                    {date}
                </div>
                <div className="text-gray-300 text-[9px] ml-2">
                    {read_time} min read
                </div>
            </div>
        </div>
      </div>

   
    </div>
  );
};

export default BlogPostCard;
