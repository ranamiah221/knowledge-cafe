import { useEffect } from "react";
import { useState } from "react";
import Blog from "./Blog/Blog";
import { createRoot } from 'react-dom/client';

const Blogs = () => {
    const [blogs, setBlogs]=useState([]);
    useEffect(()=>{
        fetch('blogs.json')
        .then(res=> res.json())
        .then(data=> setBlogs(data))
    },[])
    return (
        <div className="flex">
            <div className="w-3/4">
              {
                   blogs.map(blog=><Blog key={blog.id} blog={blog}></Blog>)
               }
             </div>
             <div className="w-1/4">
                  <h2>saving createRoot</h2>
             </div>
        </div>
    );
};

export default Blogs;