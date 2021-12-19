import EducationItem from "./EducationItem"

function Education() {
    return (
        <div id="education" className="z-20 h-screen max-w-3xl p-3 mx-auto text-white sm:max-w-xl md:max-w-3xl">
            <div className="mt-32">
                <h2 className="mb-5 text-3xl text-center text-yellow-400 uppercase shadow-md md:text-6xl font-body shadow-yellow-400">Education</h2>
                <div className="education-item">
                    <EducationItem
                        schoolName="Navitas Professionals"
                        major="Professional Year Program in Computer Science"
                        period="July 2017 - July 2019"
                    />
                    <EducationItem
                        schoolName="Queensland University of Technology"
                        major="Master of Computer Secience"
                        period="July 2017 - July 2019"
                    />
                    <EducationItem
                        schoolName="Cantho University"
                        major="Bachelor of Information Technology and Communication"
                        period="July 2012 - July 2016"
                    />
                </div>
            </div>
        </div>
    )
}

export default Education
