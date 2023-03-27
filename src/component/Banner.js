import React from 'react'
import AwesomeArticles from './AwesomeArticles'
import BookNow from './BookNow'
import Cosultation from './Cosultation'
import Dietprograms from './Dietprograms'
import Healthlife from './Healthlife'
import Footer from './Footer'
import Navbar from './Navbar'

const Bannessr = () => {
  return (
    <div>
    <div className ='bg-[#5ED1E3]'>
        <div className='grid grid-cols-1 lg:grid-cols-2 items-center container'>
            
            <div className='ml-[70px]'>
                <img src="https://w7.pngwing.com/pngs/458/83/png-transparent-fitness-centre-inside-the-box-how-crossfit-%C2%AE-shredded-the-rules-stripped-down-the-gym-and-rebuilt-my-body-outdoor-gym-exercise-physical-fitness-bodybuilding-fitness-hand-sport-thumbnail.png" className='w-[660px] h-[640px]'/>
            </div>
            <div className='ml-[70px]'>
<div>
    <p className='text-[69px] font-bold text-white font'>Health Coaching </p>
    <p1 className='text-[69px] font-bold text-white font'>Just Got <strong className='font'>Easieer!</strong></p1>
    <br/>
    <button className='ml-[120px] mt-4 btn w-[250px] rounded-full font bg-white hover:bg-[#093741] p-3 text-black'>More about health</button>
</div>
            </div>
        </div>
        </div>
        <Navbar/>
       
            <Healthlife />
            <BookNow />
            <Dietprograms />
            <AwesomeArticles />
            <Cosultation/>
            <Footer/>
    </div>
  )
}

export default Bannessr