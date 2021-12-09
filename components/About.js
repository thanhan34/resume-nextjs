
function About() {
    return (


        <div class="grid grid-cols-3 h-screen z-20 max-w-6xl mx-auto font-content">
            <div class="col-span-3 sm:col-span-1 flex">
                <div class=" m-auto">
                    <img src="https://scontent.fbne5-1.fna.fbcdn.net/v/t1.6435-9/71083781_10214932870304025_3054890081639727104_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=174925&_nc_ohc=SGaImkNF3tkAX8UyEUV&_nc_ht=scontent.fbne5-1.fna&oh=91a315ffef30764760bd1d1d817fc64c&oe=61D78B0D" alt=""
                        className="hidden rounded-full h-44 w-44 md:inline-flex" />
                </div>
            </div>
            <div class="col-span-3  sm:col-span-2 m-auto space-y-10">
                <div className="">
                    <h1 className="text-3xl font-bold text-white">About me</h1>
                    <p className="mt-4 text-2xl text-black">I describe myself as a self-taught, self-driven, passionate learner and developer focusing on React, Node, and Java Technologies. Looking forward opportunties to working with ingenious teams on challenging projects.</p>
                </div>
                <div className="flex flex-col md:flex-row">
                    <div className="flex-grow">
                        <h1 className="text-3xl font-bold text-white">Contact Details</h1>
                        <p className="mt-4 text-2xl text-black">An doan</p>
                        <p className="text-2xl text-black ">48 Derwent Place, Riverhills</p>
                        <p className="text-2xl text-black ">Brisbane QLD, 4074</p>
                        <p className="text-2xl text-black ">0450669092</p>
                        <p className="text-2xl text-black ">dtan42@gmail.com</p>
                    </div>

                </div>
            </div>
        </div>



    )
}

export default About
