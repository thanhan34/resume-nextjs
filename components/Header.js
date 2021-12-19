import { Link } from 'react-scroll'
import { useMediaQuery } from 'react-responsive'
import { CgMenuGridR } from 'react-icons/cg'
import { useEffect, useState } from 'react'
import HamburgerMenu from './HamburgerMenu'
import { useRecoilState } from 'recoil'
import { isOpenState } from '../Atom/isOpenAtom'
function Header() {
    const isSmallScreen = useMediaQuery({ query: '(max-width: 768px)' })
    const [isOpen, setIsOpen] = useRecoilState(isOpenState)

    return (
        <>
            {isSmallScreen ?
                (
                    <>
                        <CgMenuGridR className="sticky z-50 w-16 h-16 pr-5 text-white top-5 left-full" onClick={() => setIsOpen(!isOpen)} />
                        {
                            isOpen && (<HamburgerMenu />)
                        }
                    </>
                )
                :
                (
                    <nav className="sticky top-0 left-0 right-0 z-50 hidden max-w-3xl p-3 mx-auto text-white align-middle md:block">
                        <ul className="flex flex-row items-center justify-center space-x-4">
                            <li><Link className="navItem" to="home" smooth={true} duration={1000} activeClass="active text-yellow-400" offset={-50} spy={true}>HOME</Link></li>
                            <li><Link className="navItem" to="about" smooth={true} duration={1000} activeClass="active text-yellow-400" spy={true}>ABOUT</Link></li>
                            <li><Link className="navItem" to="resume" smooth={true} duration={1000} activeClass="active text-yellow-400" spy={true}>RESUME</Link></li>
                            <li><Link className="navItem" to="education" smooth={true} duration={1000} activeClass="active text-yellow-400" spy={true}>EDUCATION</Link></li>
                            <li><Link className="navItem" to="skills" smooth={true} duration={1000} activeClass="active text-yellow-400" spy={true}>SKILLS</Link></li>
                            <li><Link className="navItem" to="contact" smooth={true} duration={1000} activeClass="active text-yellow-400" spy={true}>CONTACT</Link></li>
                        </ul>
                    </nav>
                )
            }
        </>


    )
}

export default Header
