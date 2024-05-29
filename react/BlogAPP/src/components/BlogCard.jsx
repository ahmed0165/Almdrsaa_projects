import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
const BlogCard = (props) => {
  const { image, authorImage, textContent, category, date, authorName } = props;
  const { blogPostId } = useParams();

  return (
    <Link
      to={{ pathname: `/blogPost/${textContent}` }}
      state={{
        textContent: textContent,
        category: category,
        date: date,
        authorName: authorName,
      }}
      className="border-solid border-2 border-[#E8E8EA] rounded-md p-3 "
    >
      <img src={image} alt="card-img" />
      <div className=" p-2 flex flex-col gap-3">
        <h5 className="text-[#4B6BFB] bg-[#e8e8ea] w-fit p-1 rounded-sm text-sm font-semibold ">
          {category}
        </h5>
        <p className=" font-bold ">{textContent}</p>
        <footer className="flex gap-3 items-center">
          <img src={authorImage} alt="author-img" />
          <span className="text-[#97989F] text-sm">{authorName}</span>
          <span className="text-[#97989F]">{date}</span>
        </footer>
      </div>
    </Link>
  );
};
export default BlogCard;
