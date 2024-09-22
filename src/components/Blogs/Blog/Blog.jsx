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
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
