import Navbaar from '@/components/Navbaar'
import React, { useRef } from 'react'
import { useSession, signIn } from 'next-auth/react'
import { useRouter } from 'next/router'; // Import the useRouter hook
// import { getByEmail2 } from '@/services/user';

const login = () => {
    const data = useSession()
    console.log(data)

    const email = useRef()
    const password = useRef()
    const router = useRouter(); // Initialize the useRouter hook


    const onSubmit = async (e) => {
        e.preventDefault()
        const confirmEmail = email.current.value;
        const enterPassword = password.current.value;

        const data = await signIn('credentials', { redirect: false, confirmEmail, enterPassword })
        console.log(data)

        // const user = getByEmail2(confirmEmail)
        // console.log(user.firstName)

        if (data?.ok) {
            // Redirect the user to the profile page on successful login
            router.push(`/users/dashboard`);
            // alert("Sign In Successfully")
        }
        else {
            alert("Incorrect Password")
        }

        // const { data: session } = useSession()
        // if (session) {
        //     return {
        //         redirect: {
        //             destination: "/profile",
        //             permanent: false
        //         }
        //     }
        // }
    }

    const { data: session } = useSession();


    return (
        <div className='bg-[#F8F9FA] flex flex-col items-center w-full h-[100vh]'>
            <Navbaar title="login" />
            <div className='bg-[#FFF] w-full h-[7rem] flex px-[10rem] py-[2rem] flex-col justify-center items-start'>
                <h1 className='text-[2.5rem] font-bold leading-normal'>Login</h1>
            </div>

            <div className='rounded-[1rem] w-[28.5rem] h-[16.1875rem] bg-white mt-[6.44rem] shadow-2xl	flex justify-center items-center'>

                <form onSubmit={onSubmit} className='w-[15rem] h-[10rem] flex flex-col items-center justify-between'>

                    <input ref={email} className='w-[15rem] h-[2.375rem] pl-[.5rem] rounded-[0.5rem] border-[0.1rem] border-[#ADB5BD] outline-[#888]' type="email" placeholder='Email' />

                    <input ref={password} className='w-[15rem] h-[2.375rem] pl-[.5rem] rounded-[0.5rem] border-[0.1rem] border-[#ADB5BD] outline-[#888]' type="password" placeholder='Password' />

                    <button className='inline-flex py-[0.4rem] px-[1.4rem] items-start gap-[0.5rem] rounded-[0.375rem] bg-[#7749F8] text-[#fff] w-[5.437rem] h-[2.375rem]'>Login</button>
                </form>
            </div>

        </div>
    )
}

export default login
