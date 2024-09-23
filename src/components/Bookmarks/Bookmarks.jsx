import PropTypes from "prop-types";

const Bookmarks = ({bookmarks}) => {
    return (
        <div className="md:w-1/3">
            <h1>Bookmarks : {bookmarks.length}</h1>
        </div>
    );
};
Bookmarks.propTypes={
    bookmarks:PropTypes.object.isRequired
}
export default Bookmarks;