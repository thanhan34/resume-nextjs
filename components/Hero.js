
import Image from "next/image";
import Particles from "react-tsparticles";
import particlesConfig from '../particlesConfig';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

function Hero() {
    const particlesInit = (main) => {
        // console.log(main);
        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    };

    const particlesLoaded = (container) => {
        // console.log(container);
    };
    return (
        <div id="home" className="w-full h-screen ">
            <Particles
                className="fixed top-0 left-0 z-10"
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                params={particlesConfig}

            />
            <Image
                src="https://images.unsplash.com/photo-1477346611705-65d1883cee1e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                layout="fill"
                objectFit="cover"
            />

            <div className="absolute z-20 w-full text-center top-1/3">
                <h1 className="text-5xl font-extrabold text-white font-body md:text-8xl">I'm An Doan</h1>
                <h3 className="text-lg font-semibold text-gray-300 md:text-3xl font-body">I'm a Brisbane based <span className="font-bold text-white">React Developer</span></h3>
                <h3 className="text-lg font-semibold text-gray-300 md:text-3xl font-body">Fullstack Developer and Tech Enthusiast, Learner</h3>
                <div className="flex justify-center px-10 py-4 my-3 space-x-6">
                    <a href="https://github.com/thanhan34"><FaGithub className="devLogo" /></a>
                    <a href="https://www.linkedin.com/in/an-doan-3130b1133/"><FaLinkedinIn className="devLogo" /></a>
                </div>
            </div>
        </div>
    )
}

export default Hero
