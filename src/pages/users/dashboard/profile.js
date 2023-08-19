import React from 'react'
import Navbaar from '@/components/Navbaar'
import { getSession} from 'next-auth/react'


const profile = () => {
  return (
    <div>
      <Navbaar title="Logout" />
      <div className='bg-[#F8F9FA] flex flex-col w-full pb-[5rem] h-[100vh]'>
        <div className='bg-[#FFF] w-full h-[7rem] flex px-[10rem] py-[2rem] flex-col justify-center items-start'>
          <h1 className='text-[2.5rem] font-bold leading-normal'>Profile</h1>
        </div>

        <div className='rounded-[0.5rem] w-[55.0625rem] h-[40.625rem] bg-white ml-[10.38rem] mt-[1.81rem] shadow-2xl flex flex-col justify-center gap-[2rem] pl-[3.5rem]'>

          <div>
            <img src="../../img/profile 1.png" alt="" className='w-[18.76188rem] ml-[-1rem]' />
            <div className='flex'>
              <h3 className='text-[1.5rem] font-semibold'> Inzamam Malik</h3>
              <svg className='mt-[.8rem] ml-[1rem]' xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                <g clip-path="url(#clip0_4400_231)">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M13.4978 1.2951L13.6468 1.1461C13.759 1.03402 13.8921 0.945122 14.0386 0.884488C14.1851 0.823855 14.3421 0.792671 14.5007 0.792717C14.6592 0.792763 14.8162 0.824039 14.9627 0.884759C15.1092 0.945479 15.2422 1.03445 15.3543 1.1466C15.4664 1.25875 15.5553 1.39188 15.6159 1.53838C15.6766 1.68489 15.7077 1.8419 15.7077 2.00046C15.7077 2.15901 15.6764 2.31601 15.6157 2.46247C15.5549 2.60894 15.466 2.74202 15.3538 2.8541L15.2048 3.0021C15.4597 3.28796 15.5956 3.6605 15.5846 4.04333C15.5736 4.42617 15.4167 4.79031 15.1458 5.0611L4.85382 15.3541C4.78948 15.4181 4.70893 15.4634 4.62082 15.4851L0.620816 16.4851C0.537108 16.5059 0.449432 16.5048 0.366309 16.4817C0.283186 16.4586 0.207444 16.4145 0.146447 16.3535C0.0854489 16.2925 0.0412701 16.2167 0.0182047 16.1336C-0.00486067 16.0505 -0.00602807 15.9628 0.014816 15.8791L1.01482 11.8791C1.0367 11.7913 1.08197 11.7112 1.14582 11.6471L10.7878 2.0051C10.6914 1.93723 10.5741 1.90563 10.4566 1.91588C10.3391 1.92612 10.229 1.97756 10.1458 2.0611L6.85382 5.3541C6.80733 5.40059 6.75214 5.43747 6.6914 5.46263C6.63066 5.48779 6.56556 5.50073 6.49982 5.50073C6.43407 5.50073 6.36897 5.48779 6.30823 5.46263C6.24749 5.43747 6.1923 5.40059 6.14582 5.3541C6.09933 5.30761 6.06245 5.25243 6.03729 5.19169C6.01213 5.13095 5.99918 5.06585 5.99918 5.0001C5.99918 4.93436 6.01213 4.86926 6.03729 4.80852C6.06245 4.74778 6.09933 4.69259 6.14582 4.6461L9.43981 1.3541C9.71079 1.08312 10.0752 0.926123 10.4583 0.915337C10.8413 0.904552 11.214 1.04079 11.4998 1.2961C11.7746 1.05054 12.1301 0.914714 12.4986 0.914529C12.8671 0.914345 13.2228 1.04982 13.4978 1.2951Z" fill="#9747FF" />
                </g>
                <defs>
                  <clipPath id="clip0_4400_231">
                    <rect width="16" height="16" fill="white" transform="translate(0 0.5)" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <h3 className='text-[1.5rem] font-semibold'>Password</h3>
            <div className='flex flex-col h-[14rem] gap-5 pb-[1rem]'>
              <input type="password" className='w-[17.75rem] h-[2.375rem] border-[0.1rem] border-[#ADB5BD] outline-[#888] rounded-[0.5rem] pl-[.8rem]' placeholder='Old password' />
              <input type="password" className='w-[17.75rem] h-[2.375rem] border-[0.1rem] border-[#ADB5BD] outline-[#888] rounded-[0.5rem] pl-[.8rem]' placeholder='New Password' />
              <input type="password" className='w-[17.75rem] h-[2.375rem] border-[0.1rem] border-[#ADB5BD] outline-[#888] rounded-[0.5rem] pl-[.8rem]' placeholder='Repeat password' />
              <button className='inline-flex py-[0.4rem] px-[1.2rem] items-start gap-[0.5rem] rounded-[0.375rem] bg-[#7749F8] text-[#fff] w-[10.4375rem] h-[2.375rem] flex-start'>Update password</button>
            </div>
          </div>

        </div>

      </div>

    </div>
  )
}

export default profile
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