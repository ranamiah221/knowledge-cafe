import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
const [bookmarks,setBookmarks]=useState([]);
const handleBookmark=(blog)=>{
    const newBookmark=[...bookmarks,blog];
    setBookmarks(newBookmark);
}

  return (
    <>
      <Header></Header>
      <div className='md:flex'>
          <Blogs handleBookmark={handleBookmark}></Blogs>
          <Bookmarks bookmarks={bookmarks}></Bookmarks>
      </div>
    </>
  )
}

export default App
