import { signOut } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'

const Navbaar = (props) => {
  return (
    <div className='w-full h-[2.5rem] bg-[#7749F8] flex flex-col items-center'>
      <div className='w-[80%] h-[2.5rem] flex justify-between mt-[0.3rem]'>
        <h1 className='text-[1.1375rem] text-[#FFF]'>Personal Blogging App</h1>
        {
          props.title === "signup" ? (
            <Link href="/login" className='text-[0.7375rem] text-[#FFF] pt-[0.4rem]'>Login</Link>
          ) : props.title === "login" ? (
            <Link href="/signup" className='text-[0.7375rem] text-[#FFF] pt-[0.4rem]'>Signup</Link>
          ) : props.title === "Logout" ? (
            <div className='flex justify-between w-[5rem]'>
              <Link href="/users/dashboard/profile" className='text-[0.7375rem] text-[#FFF] pt-[0.4rem]'>Profile</Link>
              <Link href="/login" className='text-[0.7375rem] text-[#FFF] pt-[0.4rem]' onClick={signOut}>Logout</Link>
            </div>
          ) : ""
        }
      </div>

    </div>
  )
}

export default Navbaar