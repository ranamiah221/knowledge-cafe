import PropTypes from "prop-types";

const Bookmark = ({bookmark}) => {
    const {title}=bookmark;
    return (
        <div className="bg-slate-100 w-11/12 mx-auto rounded-lg my-2 py-2 px-4">
             <h2 className="text-xl font-normal">{title}</h2>
        </div>
    );
};
Bookmark.propTypes={
    bookmark:PropTypes.object.isRequired
}
export default Bookmark;