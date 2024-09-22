import profile from'../../assets/IMG-20240222-WA0003_1.jpg'
const Header = () => {
    return (
        <div className='flex justify-between border-b-2 my-2 py-2'>
            <h2 className="text-4xl font-medium text-gray-600">Knowledge Cafe</h2>
            <img className='h-20 w-20 rounded-full' src={profile} alt="" />
        </div>
    );
};

export default Header;