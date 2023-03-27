import React from 'react'

const AwesomeArticles = () => {
    return (
        <div>
            <div className='text-center'>
            <p className='text-center text-4xl absolute top-[5180px] pl-[750px] font-family italic text-[#5eD1D3]'>Consultant For health benefits</p>
            </div>
            <div className='bg-[#f9f9f9] pb-8  mt-[150px] '>
                <div className='grid grid-cols-1 lg:grid-cols-3 container mt-[150px] pt-12'>
                    <div className=''>
                        <p className='text-4xl'>Not Sure Where To Start?</p>
                    </div>
                    <div className=''>
                        <p1 className="text-2xl">I've put together a two week quickstart guide to set you off on your journey, full of recipes, inspiration and advice.<strong className='text-[#5ED1E3] italic'>And it's 100% Free!</strong></p1>
                    </div>
                    <div className='lg:pl-10'>
                        <button className='btn rounded-[30px] p-3 w-[220px] bg-[#64d2dd]  text-white'>Buy it Now</button>
                    </div>
                </div>
            </div>


            <div className='text-center mb-7 mt-[160px]'>
                <p className='text-4xl pb-3 mt-5'>Trainers</p>
                <p1 className="text-[#5ED1E3] text-3xl italic">Your Healthy Lifestyle Blog</p1>
            </div>




            <div className="grid lg:grid-rows-3 lg:grid-flow-col gap-4 container  lg:pl-[120px] lg:pr-[120px] mt-[90px]">
                <div className="row-span-3  lg:h-[1015px] lg:w-[580px] relative">
                    <img src="https://img.freepik.com/free-photo/couple-training-together-gym_651396-1076.jpg?w=1380&t=st=1679763862~exp=1679764462~hmac=7d5a936fd616c313d0c28e368deba57cdec142166ebbebabe065a12cd68f9414" className='lg:h-[810px] lg:w-[580px] relative' />
                    <p className='absolute top-[300px] text-white pl-[50px] text-2xl font'>Updates: Where I'm Taking This Journey Now</p>
                    <p1 className="bg-white text-black p-1 absolute top-3 ml-6 text-center pt-2  w-[180px] rounded-xl font"> physical benefits</p1>
                    <br />
                    <p2 className="absolute top-[320px] text-white pl-[220px] text-center text-2xl pt-3 font">Reduce stress</p2>
                </div>

                <div className="col-span-2 row-span-1  w-[300px] relative">
                    <img src="https://img.freepik.com/free-photo/athletic-man-woman-with-dumbbells_155003-11803.jpg?w=1380&t=st=1679763988~exp=1679764588~hmac=06b89af57aaa6ad7ad04bba58887211768e432fb757fb9aac7055e57c7f5bf33" className='w-[300px] h-[390px] relative' />
                    {/* <p2 className="absolute top-[350px] text-black bg-white   text-center text-1xl mt-4 ml-7   w-[140px] rounded-xl">Fitnest</p2> */}
                    <p2 className="absolute top-[15px] p-1 text-black bg-white pl-[40px] text-center  rounded-xl ml-12 w-[190px] font">Reduce stress</p2>
                </div>
                <div className="row-span-2 col-span-2  h-[300px] relative">
                    <img src="https://img.freepik.com/free-photo/athletic-man-woman-with-dumbbells_155003-11800.jpg?w=1380&t=st=1679764011~exp=1679764611~hmac=5f9bb36ed3c118764782c09376853c9d08adee91b75d7f1516a5b8edac04b23e" className='w-[300px] h-[390px] relative' />


                    <p1 className="bg-white text-black p-1 absolute top-3 ml-12 text-center   w-[180px] rounded-xl font">mental health</p1>


                </div>
                <div className="row-span-1 col-span-2 h-[300px] relative">
                    <img src="images/img.jpg" className='w-[350px] h-[390px]  relative' />
                    <p1 className="bg-white text-black p-1 absolute top-3 ml-12 text-center  w-[180px] rounded-xl font">achieve your goals</p1>
                </div>
                <div className="row-span-1 col-span-2   h-[300px] relative">
                    <img src="https://img.freepik.com/free-photo/young-boxing-trainer-his-new-student-have-training-boxing-ring_613910-13112.jpg?w=1380&t=st=1679764063~exp=1679764663~hmac=50d635e935fbf319f2ce4f92dfc0a9ed2cd2881a7ed9a0a7e4634fb6782f0ac6" className='w-[350px] h-[390px] relative' />
                    <p1 className="bg-white text-black p-1 absolute top-3 ml-12 text-center  w-[100px] rounded-xl font">fitness</p1>
                </div>
            </div>
        </div>

    )
}

export default AwesomeArticles