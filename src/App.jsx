import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
const [bookmarks,setBookmarks]=useState([]);
const [markAsRead,setMarkAsRead]=useState(0);
const handleBookmark=(blog)=>{
    const newBookmark=[...bookmarks,blog];
    setBookmarks(newBookmark);
}
const handleMarkAsRead=(time)=>{
  console.log('set read time',time);
}

  return (
    <>
      <Header></Header>
      <div className='md:flex gap-2'>
          <Blogs handleMarkAsRead={handleMarkAsRead} handleBookmark={handleBookmark}></Blogs>
          <Bookmarks bookmarks={bookmarks}></Bookmarks>
      </div>
    </>
  )
}

export default App
