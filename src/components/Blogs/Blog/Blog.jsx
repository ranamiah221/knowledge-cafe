import PropTypes from "prop-types";
import { BsBookmarkStar } from "react-icons/bs";

const Blog = ({ blog, handleBookmark,handleMarkAsRead }) => {
  const {
    cover,
    title,
    author,
    author_img,
    posted_date,
    hashtag,
    reading_time,
  } = blog;
  return (
    <div className="card bg-base-100 w-full shadow-xl mb-5">
      <figure>
        <img className=""
          src={cover}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
       <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
                <img className="w-20 h-20 rounded-full" src={author_img} alt="" />
                <div>
                <h2 className="text-2xl font-medium">{author}</h2>
                <p className="text-xl font-normal">{posted_date}</p>
                </div>
            </div>
            <div className="flex gap-2">
                  <p>{reading_time} min read</p>
                  <button onClick={()=>handleBookmark(blog)}><BsBookmarkStar></BsBookmarkStar></button>

            </div>
         </div>
        <h2 className="card-title">{title}</h2>
         <p>
            {
                hashtag.map((hash,idx)=> <span key={idx}> <a href="">{hash}</a> </span>)
            }
         </p>
      </div>
      <button className="text-blue-700 text-xl font-normal underline text-start pl-10 mb-10" onClick={()=>handleMarkAsRead(reading_time)}>Marks as Read</button>
    </div>
  );
};
Blog.propTypes={
    blog:PropTypes.object.isRequired,
    handleBookmark:PropTypes.func,
    handleMarkAsRead:PropTypes.func
}
export default Blog;
