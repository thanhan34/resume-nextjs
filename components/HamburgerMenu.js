import { Link } from 'react-scroll'
import { useRecoilState } from 'recoil'
import { isOpenState } from '../Atom/isOpenAtom'

function HamburgerMenu() {
    const [isOpen, setIsOpen] = useRecoilState(isOpenState)
    return (
        <div className="fixed top-0 z-40 grid w-full h-full grid-cols-1 p-32 text-center bg-yellow-900">
            <Link onClick={() => setIsOpen(false)} className="navItem" to="home" smooth={true} duration={1000} activeClass="active text-yellow-400" offset={-50} spy={true}>HOME</Link>
            <Link onClick={() => setIsOpen(false)} className="navItem" to="about" smooth={true} duration={1000} activeClass="active text-yellow-400" spy={true}>ABOUT</Link>
            <Link onClick={() => setIsOpen(false)} className="navItem" to="resume" smooth={true} duration={1000} activeClass="active text-yellow-400" spy={true}>RESUME</Link>
            <Link onClick={() => setIsOpen(false)} className="navItem" to="education" smooth={true} duration={1000} activeClass="active text-yellow-400" spy={true}>EDUCATION</Link>
            <Link onClick={() => setIsOpen(false)} className="navItem" to="skills" smooth={true} duration={1000} activeClass="active text-yellow-400" spy={true}>SKILLS</Link>
            <Link onClick={() => setIsOpen(false)} className="navItem" to="contact" smooth={true} duration={1000} activeClass="active text-yellow-400" spy={true}>CONTACT</Link>
        </div>
    )
}

export default HamburgerMenu
