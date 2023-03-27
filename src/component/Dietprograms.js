import React from 'react'
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'
// import {BiRightArrowAlt} from 'react-icons/bi';
const Dietprograms = () => {
  return (
    <div className='mt-[150px]'>
      <div className='grid grid-cols-1 lg:grid-cols-2 container gap-[130px] '>
        <div className='A'>
       
          <img src="https://images.pexels.com/photos/4761779/pexels-photo-4761779.jpeg?auto=compress&cs=tinysrgb&w=600" className='w-[900px] h-[900px]'/>
        </div>
        <div className='pt-[120px]'>
          <p className='text-6xl  font  pb-3'>Diet Programs</p>
          <p1 className=" font-family italic  lg:text-2xl text-[#5ED1E3] ">Fresh Start Consultation</p1>







          <div className="w-full  pt-16">
            <div className=" rounded-2xl bg-white p-2">
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex lg:w-[600px] justify-between rounded-lg   py-2 text-left text-sm font-medium  focus:outline-none focus-visible:ring  focus-visible:ring-opacity-75">

                      <span className='text-4xl font'>What is your refund policy?</span>
                      <ChevronUpIcon
                        className={`${open ? 'rotate-180 transform ' : ''
                          } h-12 w-12 `}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                      If you're unhappy with your purchase for any reason, email us
                      within 90 days and we'll refund you in full, no questions asked.
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure as="div" className="mt-2">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex lg:w-[600px] justify-between rounded-lg   py-2 text-left text-sm font-medium  focus:outline-none focus-visible:ring  focus-visible:ring-opacity-75">

                      <span className='text-4xl font'>Step-By-Step Training Guide</span>
                      <ChevronUpIcon
                        className={`${open ? 'rotate-180 transform ' : ''
                          } h-12 w-12 `}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className=" pt-4 pb-2 text-sm text-gray-500">
                      If you're unhappy with your purchase for any reason, email us
                      within 90 days and we'll refund you in full, no questions asked.
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>


              <Disclosure as="div" className="mt-2">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex lg:w-[600px] justify-between rounded-lg   py-2 text-left text-sm font-medium  focus:outline-none focus-visible:ring  focus-visible:ring-opacity-75">

                      <span className='text-4xl font'>Explosive Tabata For Maximum Results</span>
                      <ChevronUpIcon
                        className={`${open ? 'rotate-180 transform ' : ''
                          } h-12 w-12 `}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className=" pt-4 pb-2 text-sm text-gray-500">
                      If you're unhappy with your purchase for any reason, email us
                      within 90 days and we'll refund you in full, no questions asked.
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>

              <Disclosure as="div" className="mt-2">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex lg:w-[600px] justify-between rounded-lg   py-2 text-left text-sm font-medium  focus:outline-none focus-visible:ring  focus-visible:ring-opacity-75">

                      <span className='text-4xl font'>Free Adivising</span>
                      <ChevronUpIcon
                        className={`${open ? 'rotate-180 transform ' : ''
                          } h-12 w-12 `}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className=" pt-4 pb-2 text-sm text-gray-500">
                      If you're unhappy with your purchase for any reason, email us
                      within 90 days and we'll refund you in full, no questions asked.
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </div>
          </div>
          {/*    
 <BiRightArrowAlt className=' text-4xl'/> */}
          <div className='flex gap-[20px] '>

            <button className='btn rounded-[30px] p-3 w-[220px] bg-[#64d2dd] text-white font'>Buy it Now</button>

            <button className='btn rounded-[30px] p-3 w-[220px] bg-[#64d2dd] text-white font'>Programs</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dietprograms