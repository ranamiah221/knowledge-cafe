const Blog = ({ blog }) => {
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
    <div className="card bg-base-100 w-full shadow-xl">
      <figure>
        <img className=""
          src={cover}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
         <div>
            <div>
                <img src={author_img} alt="" />
                <h2>{author}</h2>
            </div>
            <div>
                  
            </div>
         </div>
      </div>
    </div>
  );
};

export default Blog;
