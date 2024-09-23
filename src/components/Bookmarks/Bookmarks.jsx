import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        <div className="md:w-1/3 bg-slate-200 rounded-lg h-screen">
            <div>
                <h1 className="text-2xl font-medium text-center mt-2 bg-slate-50 w-11/12 mx-auto rounded-lg p-2">Spend Reading Time : {readingTime}</h1>
            </div>
            <h1 className="text-2xl font-medium text-center my-4 bg-slate-50 w-11/12 mx-auto rounded-lg py-2">Bookmarks : {bookmarks.length}</h1>
            {
                bookmarks.map((bookmark, idx)=><Bookmark key={idx} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};
Bookmarks.propTypes={
    bookmarks:PropTypes.array,
    readingTime:PropTypes.number
}
export default Bookmarks;