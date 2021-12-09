import backgroundImage from '../images/hero.jpg'
import Image from "next/image";
import Header from './Header';
import Particles from "react-tsparticles";
import particlesConfig from '../particlesConfig';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
function Hero() {
    const particlesInit = (main) => {
        console.log(main);

        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    };

    const particlesLoaded = (container) => {
        console.log(container);
    };
    return (
        <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
            <Particles
                className="absolute top-0 z-10 h-screen"
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={particlesConfig}
            />
            <Image
                src="https://images.unsplash.com/photo-1477346611705-65d1883cee1e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                layout="fill"
                objectFit="cover"

            />
            <Header />
            <div className="absolute z-20 w-full text-center top-1/3">
                <h1 className="text-sm font-extrabold text-white sm:text-lg md:text-8xl">I'm An Doan.</h1>
                <h3 className="text-3xl font-semibold text-gray-300">I'm a Brisbane based <span className="font-bold text-white">Junior React Developer</span></h3>
                <h3 className="text-3xl font-semibold text-gray-300">Fullstack Developer and Tech Enthusiast, Learner</h3>
                <div className="flex justify-center px-10 py-4 my-3 space-x-6">
                    <a href="https://github.com/thanhan34"><FaGithub className="text-5xl text-white" /></a>
                    <a href="https://www.linkedin.com/in/an-doan-3130b1133/"><FaLinkedinIn className="text-5xl text-white" /></a>
                </div>

            </div>
        </div>
    )
}

export default Hero
