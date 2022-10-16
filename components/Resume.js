import {
    SiJavascript, SiNodedotjs,
    SiFirebase, SiReact, SiTailwindcss, SiHtml5, SiCss3, SiWordpress, SiPaypal, SiStripe, SiVuedotjs, SiNpm, SiWoo, SiNextdotjs
} from "react-icons/si"

import ResumeItem from "./ResumeItem"
function Resume() {
    return (
        <section id="resume" className="z-20 h-full max-w-3xl p-3 mx-auto text-white sm:max-w-xl md:max-w-3xl">
            <div className="mt-32">
                <h2 className="mb-5 text-3xl text-center text-yellow-400 uppercase shadow-md md:text-6xl font-body shadow-yellow-400">Experience</h2>
                <div className="z-20 resume-item">
                    <ResumeItem
                        title="Administrator - Web Developer - Tutor"
                        companyName="Mindcan LTP PYD - World Educational Robotics Contest Australia"
                        descriptions={[
                            "Administrator of Mindcan website and WERAU website.",
                            "Provided regular maintenance to ensure 99.9% site availability",
                            "Preprared curriculum and tutoring After School Robotics class at Ashgrove State School, Moorooka State School",
                            "Collaborated with outsource developer team in China for Marketplace project.",
                            "Improving customer service by implementing Tidio to directly live chat with customers",
                            "Implemented the Calendly book appointment system.",
                            "Succesfully hosted the World Educational Robotics and Drone Competition Australia Open 2021, proudly supported by Australia Government, Brisbane City Council and Redland City Council."
                        ]}
                        technologies={["Wordpress, Elementor, Woo Commerce, Event Tickets, The Events Calendar.",
                            "Frontend: ReactJS, Firebase v9, VueJS, TailwindCSS.",
                            "POAP - Proof of Attendance Protocol.",
                            "CRM system: GetResponse"]}
                        isSKill={true}
                    />
                    <ul className="flex flex-wrap items-center justify-center mt-10 space-x-4 space-y-4">
                        <li className="z-20"><SiJavascript className="devLogo" /></li>
                        <li className="z-20"><SiFirebase className="devLogo" /></li>
                        <li className="z-20"><SiReact className="devLogo" /></li>
                        <li className="z-20"><SiTailwindcss className="devLogo" /></li>
                        <li className="z-20"><SiHtml5 className="devLogo" /></li>
                        <li className="z-20"><SiCss3 className="devLogo" /></li>
                        <li className="z-20"><SiWordpress className="devLogo" /></li>
                        <li className="z-20"><SiPaypal className="devLogo" /></li>
                        <li className="z-20"><SiStripe className="devLogo" /></li>
                        <li className="z-20"><SiVuedotjs className="devLogo" /></li>
                        <li className="z-20"><SiNpm className="devLogo" /></li>
                        <li className="z-20"><SiWoo className="devLogo" /></li>
                        <li className="z-20"><SiNextdotjs className="devLogo" /></li>
                        <li className="z-20"><SiNodedotjs className="devLogo" /></li>
                    </ul>
                    <ResumeItem
                        title="Frontend Developer"
                        companyName="Starry Night Media"
                        descriptions={["Designed and built the e-commerce site for Starry Night Media from ground up.",
                            "Provided regular maintenance to ensure 99.9% site avalability.",
                        ]}
                        technologies={["CPanel hosting control panel for Apache server",
                            "MySQL database",
                            "Javascript (jQuery, Bootstrap)",
                            "Paypal Gateway API"]}
                        isSKill={true}
                    />
                    <ul className="flex flex-wrap items-center justify-center mt-10 space-x-4 space-y-4">
                        <li className="z-20"><SiJavascript className="devLogo" /></li>
                        <li className="z-20"><SiHtml5 className="devLogo" /></li>
                        <li className="z-20"><SiCss3 className="devLogo" /></li>
                        <li className="z-20"><SiWordpress className="devLogo" /></li>
                        <li className="z-20"><SiPaypal className="devLogo" /></li>
                        <li className="z-20"><SiWoo className="devLogo" /></li>
                    </ul>
                    <ResumeItem
                        title="IT Helpdesk Intern"
                        companyName="SOL Edu Pty Ltd"
                        descriptions={[
                            "Provided on-site IT support to staff for technical issues with printers, internet connectivity, computers, tablets and mobile phones.",
                            "Using Wordpress to manage the content for 9 websites.",
                            "Set up ICT services for meetings and training sessions.",
                            "Assist company’s projects on a range of issues related to systems and infrastructure.",
                            "Actively identify ICT service issues to be investigated and improved to ensure smooth and efficient work processes for staffs.",
                            "Maintain MAC/Windows computers, printers (cartridges & drums) and network.",
                            "Make a proposal to purchase IT equipment and assist the finance team in purchasing IT equipment.",
                            "Prepare manuals instructions on ICT services for staffs.",
                            "Perform other miscellaneous administrative tasks related to ICT services.",
                            "Online marketing."]}
                        technologies={["Wordpress, Elementor",
                            "Window Server 2012",
                            "Open source software for video recording and live streaming OBS",
                            "Javascript (jQuery, Bootstrap)",
                            "Facebook Ads"]}
                        isSKill={true}
                    />
                    <ul className="flex flex-wrap items-center justify-center mt-10 space-x-4 space-y-4">
                        <li className="z-20"><SiJavascript className="devLogo" /></li>
                        <li className="z-20"><SiHtml5 className="devLogo" /></li>
                        <li className="z-20"><SiCss3 className="devLogo" /></li>
                        <li className="z-20"><SiWordpress className="devLogo" /></li>
                        <li className="z-20"><SiPaypal className="devLogo" /></li>
                        <li className="z-20"><SiWoo className="devLogo" /></li>
                    </ul>
                </div>
            </div>
        </section >
    )
}

export default Resume
