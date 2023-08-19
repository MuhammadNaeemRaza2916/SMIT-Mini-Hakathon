import Navbaar from '@/components/Navbaar'
import { getSession} from 'next-auth/react'
import React, { useEffect } from 'react'

const Dashboard = () => {

  // useEffect(() => {

  // },[])

  return (
    <div>
      <Navbaar title="Logout" />
      <div className='bg-[#F8F9FA] flex flex-col w-full pb-[5rem]'>
        <div className='bg-[#FFF] w-full h-[7rem] flex px-[10rem] py-[2rem] flex-col justify-center items-start'>
          <h1 className='text-[2.5rem] font-bold leading-normal'>Dashboard</h1>
        </div>

        <div className='rounded-[0.5rem] w-[55.0625rem] h-[20.625rem] bg-white ml-[10.38rem] mt-[1.81rem] shadow-2xl flex flex-col justify-center gap-[2rem] pl-[3.5rem]'>

          <input type="text" className='w-[47.5rem] h-[2.375rem] border-[0.1rem] border-[#ADB5BD] outline-[#888] rounded-[0.5rem] pl-[.8rem]' placeholder='Placeholder' />
          <textarea type="text" className='w-[47.5rem] h-[7.125rem] border-[0.1rem] border-[#ADB5BD] outline-[#888] rounded-[0.5rem] pl-[.8rem]' placeholder='What is in your mind' />
          <button className='inline-flex py-[0.4rem] px-[1.2rem] items-start gap-[0.5rem] rounded-[0.375rem] bg-[#7749F8] text-[#fff] w-[8.4375rem] h-[2.375rem] flex-start'>Publish blog</button>
        </div>
        <div className='mt-[2.5rem]'>
          <h1 className='text-[1.75rem] font-medium pl-[10rem]'>My Blogs</h1>
          <div className='rounded-[0.5rem] w-[55.0625rem] h-[22.625rem] bg-white ml-[10.38rem] mt-[1.81rem] shadow-2xl flex flex-col gap-[] pl-[1.5rem]'>

            <div className='w-[95%] mt-5'>

              <div className='flex w-[45%] justify-between gap-4'>
                <div><img src="../../img/profile 4.png" alt="" className='w-[10rem]' /></div>
                <div>
                  <h2 className='text-[1.2rem] font-semibold'>An Action Button Could Be Coming to the iPhone 15</h2>
                  <p className='text-[#888]'>Inzamam Malik - August 16th, 2023</p>
                </div>
              </div>
              <br />
              <p className='text-[1rem] text-[#888]'>Apple could be putting an Action button on your next iPhone. According to a July report from MacRumors, code in the fourth iOS 17 developer beta hints at functionality for an Action button on the next-gen iPhone 15 Pro and Pro Max models. <br />
                Apple introduced the Action button on the Apple Watch Ultra. It's a physical button on the side of the Apple Watch Ultra that allows you to run a preselected function or program when you press it without unlocking your device or navigating to an app. Some of the preselected functions include starting a stopwatch, beginning a workout and turning on your flashlight.</p>
              <div className='flex w-[5rem] justify-between mt-3 text-[#7749F8]'>
                <button>Delete</button>
                <button>Edit</button>
              </div>
            </div>


          </div>
        </div>

        <div className='rounded-[0.5rem] w-[55.0625rem] h-[30.625rem] bg-white ml-[10.38rem] mt-[1.81rem] shadow-2xl flex flex-col gap-[] pl-[1.5rem]'>

          <div className='w-[95%] mt-5'>

            <div className='flex w-[45%] justify-between gap-4'>
              <div><img src="../../img/profile 4.png" alt="" className='w-[13.5rem]' /></div>
              <div>
                <h2 className='text-[1.2rem] font-semibold'>What Is the Event Loop and How Does It Improve App Performance?</h2>
                <p className='text-[#888]'>Inzamam Malik - August 15th, 2023</p>
              </div>
            </div>
            <br />
            <p className='text-[1rem] text-[#888]'>JavaScript is a single-threaded language, built to handle tasks one at a time. However, the event loop lets JavaScript handle events and callbacks asynchronously by emulating simultaneous programming systems. This assures the performance of your JavaScript applications. <br /> JavaScript is a single-threaded language, built to handle tasks one at a time. However, the event loop lets JavaScript handle events and callbacks asynchronously by emulating simultaneous programming systems. This assures the performance of your JavaScript applications.<br />JavaScript is a single-threaded language, built to handle tasks one at a time. However, the event loop lets JavaScript handle events and callbacks asynchronously by emulating simultaneous programming systems. This assures the performance of your JavaScript applications.<br />JavaScript is a single-threaded language, built to handle tasks one at a time. However, the event loop lets JavaScript handle events and callbacks asynchronously by emulating simultaneous programming systems. This assures the performance of your JavaScript applications.</p>
            <div className='flex w-[5rem] justify-between mt-3 text-[#7749F8]'>
              <button>Delete</button>
              <button>Edit</button>
            </div>
          </div>


        </div>
      </div>

    </div>
  )
}

export default Dashboard

export async function getServerSideProps({ req }) {

  const session = await getSession({ req })
  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false
      }
    }
  }
  return {
    props: {
      session
    }
  }
}