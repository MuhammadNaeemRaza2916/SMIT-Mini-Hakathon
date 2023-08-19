import Image from 'next/image'
import { Inter } from 'next/font/google'
import signup from './signup'
const inter = Inter({ subsets: ['latin'] })
import header from '@/components/Navbaar'
import Navbaar from '@/components/Navbaar'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Navbaar title="signup" />
      <div className='bg-[#F8F9FA] flex flex-col w-full pb-[5rem]'>
        <div className='bg-[#FFF] w-full h-[7rem] flex px-[10rem] py-[2rem] flex-col justify-center items-start'>
          <h1 className='text-[2.5rem] font-bold leading-normal'>Good Morning Readers!</h1>
        </div>


        <div className='mt-[2.5rem]'>
          <h1 className='text-[1.75rem] font-medium pl-[10rem]'>All Blogs</h1>
          <div className='rounded-[0.5rem] w-[55.0625rem] h-[20.625rem] bg-white ml-[10.38rem] mt-[1.81rem] shadow-2xl flex flex-col gap-[] pl-[1.5rem]'>

            <div className='w-[95%] mt-5'>

              <div className='flex w-[40%] justify-between gap-4'>
                <div><img src="./img/profile 2.png" alt="" className='w-[5rem]' /></div>
                <div>
                  <h2 className='text-[1.2rem] font-semibold'>
                    Introducing Whisper</h2>
                  <p className='text-[#888]'>Elon Musk - August 17th, 2023</p>
                </div>
              </div>
              <br />
              <p className='text-[1rem] text-[#888]'>Whisper is an automatic speech recognition (ASR) system trained on 680,000 hours of multilingual and multitask supervised data collected from the web. We show that the use of such a large and diverse dataset leads to improved robustness to accents, background noise and technical language. Moreover, it enables transcription in multiple languages, as well as translation from those languages into English. We are open-sourcing models and inference code to serve as a foundation for building useful applications and for further research on robust speech processing.</p>
              <div className='flex justify-between mt-3 text-[#7749F8]'>
                <Link href="/ReadMore">see all from this user</Link>
              </div>
            </div>


          </div>
        </div>

        <div className='rounded-[0.5rem] w-[55.0625rem] h-[22.625rem] bg-white ml-[10.38rem] mt-[1.81rem] shadow-2xl flex flex-col gap-[] pl-[1.5rem]'>

          <div className='w-[95%] mt-5'>

            <div className='flex w-[45%] justify-between gap-4'>
              <div><img src="../../img/profile 4.png" alt="" className='w-[8.5rem]' /></div>
              <div>
                <h2 className='text-[1.2rem] font-semibold'>An Action Button Could Be Coming to the iPhone 15</h2>
                <p className='text-[#888]'>Inzamam Malik - August 16th, 2023</p>
              </div>
            </div>
            <br />
            <p className='text-[1rem] text-[#888]'>Apple could be putting an Action button on your next iPhone. According to a July report from MacRumors, code in the fourth iOS 17 developer beta hints at functionality for an Action button on the next-gen iPhone 15 Pro and Pro Max models. <br />
              Apple introduced the Action button on the Apple Watch Ultra. It's a physical button on the side of the Apple Watch Ultra that allows you to run a preselected function or program when you press it without unlocking your device or navigating to an app. Some of the preselected functions include starting a stopwatch, beginning a workout and turning on your flashlight.</p>
            <div className='flex justify-between mt-3 text-[#7749F8]'>
              <button>see all from this user</button>
            </div>
          </div>


        </div>

        <div className='rounded-[0.5rem] w-[55.0625rem] h-[32.625rem] bg-white ml-[10.38rem] mt-[1.81rem] shadow-2xl flex flex-col gap-[] pl-[1.5rem]'>

          <div className='w-[95%] mt-5'>

            <div className='flex w-[45%] justify-between gap-4'>
              <div><img src="../../img/profile 4.png" alt="" className='w-[12rem]' /></div>
              <div>
                <h2 className='text-[1.2rem] font-semibold'>What Is the Event Loop and How Does It Improve App Performance?</h2>
                <p className='text-[#888]'>Inzamam Malik - August 15th, 2023</p>
              </div>
            </div>
            <br />
            <p className='text-[1rem] text-[#888]'>JavaScript is a single-threaded language, built to handle tasks one at a time. However, the event loop lets JavaScript handle events and callbacks asynchronously by emulating simultaneous programming systems. This assures the performance of your JavaScript applications. <br /> JavaScript is a single-threaded language, built to handle tasks one at a time. However, the event loop lets JavaScript handle events and callbacks asynchronously by emulating simultaneous programming systems. This assures the performance of your JavaScript applications.<br />JavaScript is a single-threaded language, built to handle tasks one at a time. However, the event loop lets JavaScript handle events and callbacks asynchronously by emulating simultaneous programming systems. This assures the performance of your JavaScript applications.<br />JavaScript is a single-threaded language, built to handle tasks one at a time. However, the event loop lets JavaScript handle events and callbacks asynchronously by emulating simultaneous programming systems. This assures the performance of your JavaScript applications.</p>
            <div className='flex justify-between mt-3 text-[#7749F8]'>
              <button>see all from this user</button>
            </div>
          </div>


        </div>
      </div>
    </div>
  )
}
