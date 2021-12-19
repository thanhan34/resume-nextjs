import ResumeItem from "./ResumeItem"
import {
    SiJavascript, SiNodedotjs,
    SiFirebase, SiReact, SiTailwindcss, SiHtml5, SiCss3, SiWordpress, SiPaypal, SiStripe, SiVuedotjs, SiNpm, SiReactrouter, SiWoocommerce, SiNextdotjs, SiMaterialui, SiGithub, SiRedux
} from "react-icons/si"
import { IoLogoNpm } from 'react-icons/io'
function Skills() {
    return (
        <section id="skills" className="h-full max-w-3xl p-3 mx-auto mb-40 text-white md:h-screen">
            <div className="mt-32">
                <h2 className="mb-5 text-3xl text-center text-yellow-400 uppercase shadow-md md:text-6xl font-body shadow-yellow-400">SKILLS AND PROFICIENCY</h2>
                <div>
                    <ResumeItem
                        title="PROFESSIONAL PROFICIENCY"
                        companyName=""
                        descriptions={[
                            "Frontend: React (Redux, Recoil, Gatsby, React Router), NextJS, VueJS",
                            "HTML5, CSS, TailwindCSS, jQuery, Material UI, Style Component",
                            "Databases and data modelling with SQL (MySQL) and NoSQL (Firebase)",
                            "Package management and build tools: Composer, NPM, Yarn, Babel, Webpack",
                            "Version control with Git, and online collaboration with GitHub",
                            "Microsoft Office Suite and similar Google tools"
                        ]}
                        isSKill={false}
                    />
                    <div>
                        <h4 className="mt-10 text-2xl font-semibold text-center text-gray-300 md:text-3xl font-body md:text-left">Learning</h4>
                        <ul className="mt-5 text-base text-center text-white md:text-lg font-content md:text-left">
                            <li className="mt-3">Container orchestration with Docker</li>
                            <li className="mt-3">Continuous Integration and Continuous Delivery with CircleCI, BuildKite, GitHub Actions & GitHub Container Registry</li>
                            <li className="mt-3">Amazon Web Services products: EC2, Lambda, Elastic Beanstalk, SQS, SES, SNS, CloudWatch, S3, CloudFront, RDS</li>
                            <li className="mt-3">Building Infrastructure as Code using AWS Cloud Development Kit (CDK)</li>
                            <li className="mt-3">Serverless Applications using the Serverless Framework</li>
                            <li className="mt-3">TypeScript</li>
                            <li className="mt-3">GraphQL</li>
                            <li className="mt-3">MongoDB</li>
                        </ul>
                    </div>
                </div>
                <ul className="flex flex-wrap items-center justify-center mt-10 space-x-4 space-y-5">
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
                    <li className="z-20"><SiWoocommerce className="devLogo" /></li>
                    <li className="z-20"><SiNextdotjs className="devLogo" /></li>
                    <li className="z-20"><SiNodedotjs className="devLogo" /></li>
                    <li className="z-20"><SiMaterialui className="devLogo" /></li>
                    <li className="z-20"><SiGithub className="devLogo" /></li>
                    <li className="z-20"><SiRedux className="devLogo" /></li>
                    <li className="z-20"><SiReactrouter className="devLogo" /></li>
                </ul>
            </div>
        </section >
    )
}

export default Skills
