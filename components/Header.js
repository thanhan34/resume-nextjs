function Header() {
    return (

        <nav className="absolute left-0 right-0 z-20 max-w-3xl mx-auto text-white align-middle h-44">
            <ul className="flex flex-row items-center justify-center space-x-4">
                <li className="current"><a className="navItem" href="#home">HOME</a></li>
                <li><a className="navItem" href="#about">ABOUT</a></li>
                <li><a className="navItem" href="#resume">RESUME</a></li>
                <li><a className="navItem" href="#works">WORKS</a></li>
                <li><a className="navItem" href="#testimonials">TESTIMONIALS</a></li>
                <li><a className="navItem" href="#contact">CONTACT</a></li>
            </ul>
        </nav>

    )
}

export default Header
