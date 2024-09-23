import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
const [bookmarks,setBookmarks]=useState([]);
const [readingTime, setReadingTime]=useState(0);
const handleBookmark=(blog)=>{
    const newBookmark=[...bookmarks,blog];
    setBookmarks(newBookmark);
}
const handleMarkAsRead=(id,time)=>{
  const newReadingTime=readingTime + time;
  setReadingTime(newReadingTime);
  const remainingBookmarks=bookmarks.filter(bookmark=> bookmark.id !== id);
  setBookmarks(remainingBookmarks); 
}

  return (
    <>
      <Header></Header>
      <div className='md:flex gap-2'>
          <Blogs handleMarkAsRead={handleMarkAsRead} handleBookmark={handleBookmark}></Blogs>
          <Bookmarks readingTime={readingTime} bookmarks={bookmarks}></Bookmarks>
      </div>
    </>
  )
}

export default App
