
function EducationItem({ schoolName, major, period }) {
    return (
        <div>
            <div className="education-content">
                <h3 className="mt-10 text-2xl font-semibold text-center text-gray-300 md:text-3xl font-body md:text-left">{schoolName}</h3>
                <div>
                    <div className="text-xl font-semibold text-center text-gray-200 md:text-2xl font-content md:text-left">{major}</div>
                    <div className="text-center md:text-left">{period}</div>
                </div>
            </div>


        </div>
    )
}

export default EducationItem
