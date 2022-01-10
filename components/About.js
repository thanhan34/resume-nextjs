import { saveAs } from "file-saver";

function About() {
    const saveFile = () => {
        saveAs(
            "https://drive.google.com/file/d/1ZwQok1nLpRxD67Rf8k7OqI4cbgO6SQ24/view?usp=sharing",
            "AnDoan_ReactResume.pdf"
        );
    };
    return (
        <div id="about" className="z-20 grid h-screen grid-cols-1 p-5 mx-auto sm:max-w-screen-sm md:max-w-6xl md:grid-cols-3 font-content">
            <div className="flex col-span-3 sm:col-span-1">
                <div className="m-auto ">
                    <img src="/profile.jpg" alt=""
                        className="hidden rounded-full h-44 w-44 md:inline-flex" />
                </div>
            </div>
            <div className="col-span-1 m-auto space-y-10 md:col-span-2 ">
                <div className="flex flex-col items-center justify center">
                    <div className="flex-grow">
                        <h1 className="text-3xl font-bold text-white">About me</h1>
                        <p className="max-w-sm mt-4 text-base text-gray-300 md:text-2xl md:max-w-full d font-content">I describe myself as a self-taught, self-driven, passionate learner and developer focusing on React, Node, and Java Technologies. Looking forward opportunties to working with ingenious teams on challenging projects.</p>
                    </div>
                </div>
                <div className="flex flex-col md:justify-center md:flex-row ">
                    <div className="flex-grow">
                        <h1 className="text-3xl font-bold text-white">Contact Details</h1>
                        <p className="mt-4 text-base text-gray-300 md:text-xl font-content">An doan</p>
                        <p className="text-base text-gray-300 md:text-xl font-content">48 Derwent Place, Riverhills</p>
                        <p className="text-base text-gray-300 md:text-xl font-content">Brisbane QLD, 4074</p>
                        <p className="text-base text-gray-300 md:text-xl font-content">0450669092</p>
                        <p className="text-base text-gray-300 md:text-xl font-content">dtan42@gmail.com</p>
                    </div >
                    <button onClick={saveFile} className="z-20 items-center justify-center w-full p-5 mt-10 text-white bg-yellow-400 shadow-xl md:w-1/2 h-4/6 rounded-xl hover:shadow-yellow-400/50 ">Download Resume</button>
                </div >
            </div >
        </div >



    )
}

export default About
