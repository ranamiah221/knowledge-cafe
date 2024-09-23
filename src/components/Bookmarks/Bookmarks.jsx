import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({bookmarks}) => {
    return (
        <div className="md:w-1/3 bg-slate-200 rounded-lg h-screen">
            <h1 className="text-2xl font-medium text-center my-4">Bookmarks : {bookmarks.length}</h1>
            {
                bookmarks.map(bookmark=><Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};
Bookmarks.propTypes={
    bookmarks:PropTypes.array
}
export default Bookmarks;