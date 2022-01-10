
import Image from "next/image";
import Particles from "react-tsparticles";
import particlesConfig from '../particlesConfig';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

import Lottie from 'react-lottie';
import animationData from '../public/cute-astronaut-operating-laptop.json'


function Hero() {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",

        },

    }
    const particlesInit = (main) => {
        // console.log(main);
        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    };

    const particlesLoaded = (container) => {
        // console.log(container);
    };
    return (
        <div id="home" className="w-full h-screen -mt-14" style={{
            backgroundImage: `url("/hero.jpg")`, backgroundSize: 'cover',
            overflow: 'hidden',
        }}>
            <Particles
                className="fixed top-0 left-0 z-10"
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                params={particlesConfig}

            />
            <div className="absolute z-20 w-full text-center top-1/3">
                <h1 className="text-5xl font-extrabold text-white font-body md:text-8xl">I'm An Doan</h1>
                <h3 className="text-lg font-semibold text-gray-300 md:text-3xl font-body">I'm a Brisbane based <span className="font-bold text-white">React Developer</span></h3>
                <h3 className="text-lg font-semibold text-gray-300 md:text-3xl font-body">Fullstack Developer and Tech Enthusiast, Learner</h3>
                <div className="flex justify-center px-10 py-4 my-3 space-x-6">
                    <a href="https://github.com/thanhan34"><FaGithub className="devLogo" /></a>
                    <a href="https://www.linkedin.com/in/an-doan-3130b1133/"><FaLinkedinIn className="devLogo" /></a>
                </div>
                <Lottie
                    options={defaultOptions}
                    height={100}
                    width={100}
                />
            </div>
        </div>
    )
}

export default Hero
