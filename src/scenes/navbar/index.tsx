

function Navbar() {

    const navBackground = 'bg-black';
    const navTextColor = 'text-white';
    const navStyles = `flex items-center mx-4 my-2 font-bold ${navTextColor} text-md`;

    return (
        <nav className={`${navBackground} flex fixed z-20 justify-between w-full`}>
            <div className={navStyles}>Logo</div>
            <div className={navStyles}>Kanji Keyword Dictionary</div>
            <div className={navStyles}>Button</div>
        </nav >
    )
}

export default Navbar