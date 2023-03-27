import React from 'react'

const Sectiontwitter = () => {
    return (
        <div>
            <div className='grid grid-cols-1 lg:grid-cols-2'>
                <div className=' '>
                    <img src="https://images.pexels.com/photos/416754/pexels-photo-416754.jpeg?auto=compress&cs=tinysrgb&w=600" className='img  w-[1200px] h-[1000px]' />
                </div>

                <div className=' text-center space-y-4 items-center pt-[170px]'>
                    <div className='text-center items-center lg:ml-[430px]'>
                        <img src="https://melanie-hanson-html.themerex.net/images/hello.png" className='text-center items-center  ' />
                    </div>
                    <p className='text-6xl'>The Reason I became </p>
                    <div>
                        <p1 className='text-6xl'>the Health Coach</p1>
                    </div>
                    <div>
                        <p2 className="text-2xl text-blue-500 font-serif ">Making & Breaking the Rules</p2>
                    </div>
                    <div>
                        <div>
                            <p3 className="">Hello! I'm Melanie, and I'm going to teach .
                            </p3>
                        </div>
                        <div>
                            <p4>you how to lose weight & get flawless skin</p4>
                        </div>
                        <div>
                            <p5> through better eating habits</p5>
                        </div>
                    </div>
                    <button className='btn rounded-[30px] p-3 w-[220px] bg-[#ff194F] text-white'>Read My Story</button>
                </div>
            </div>
          
        </div>

    )
}

export default Sectiontwitter