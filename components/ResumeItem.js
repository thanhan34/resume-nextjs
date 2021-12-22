

function ResumeItem({ title, companyName, descriptions, technologies, isSKill }) {
    return (
        <div>
            <div className="z-20 resume-content">
                <h3 className="mt-10 text-2xl font-semibold text-center text-gray-300 md:text-3xl font-body md:text-left">{title}</h3>
                <div className="text-xl font-semibold text-center text-gray-200 md:text-2xl font-content md:text-left">{companyName}</div>
            </div>
            <ul className="mt-5 text-base text-center text-white md:text-lg font-content md:text-left">
                {
                    descriptions.map((description, index) => (
                        <li key={index} className="mt-3">{description}</li>
                    ))
                }
            </ul>

            {
                isSKill && (
                    <>
                        <h4 className="mt-10 text-xl font-semibold text-center text-gray-200 md:text-2xl font-content md:text-left">Technologies involved</h4>
                        <ul className="mt-5 text-base text-center text-white md:text-lg font-content md:text-left">
                            {
                                technologies.map((technique, index) => (
                                    <li key={index} className="mt-3">{technique}</li>
                                ))
                            }

                        </ul>
                    </>

                )
            }


        </div>
    )
}

export default ResumeItem
