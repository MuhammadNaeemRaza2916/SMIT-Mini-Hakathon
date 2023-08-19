import Navbaar from '@/components/Navbaar'
import React, { useRef } from 'react'

const signup = () => {
    const fName = useRef()
    const lName = useRef()
    const email = useRef()
    const password = useRef()
    const rePassword = useRef()

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        const firstName = fName.current.value;
        const lastName = lName.current.value;
        const confirmEmail = email.current.value;
        const enterPassword = password.current.value;
        const comfirmPassword = rePassword.current.value;

        console.log(firstName, lastName, confirmEmail, enterPassword, comfirmPassword)
        try {
            const response = await fetch("/api/auth/signup", {
                method: "POST",
                body: JSON.stringify({ firstName, lastName, confirmEmail, enterPassword, comfirmPassword }),
                headers: {
                    "Content-Type": "application/json"
                }
            });
            if (response.ok) {
                alert("Sign Up SuccessFully")
            }
        } catch (error) {
            console.error(error);
        }


    }
    return (
        <div className='bg-[#F8F9FA] flex flex-col items-center w-full h-[100vh]'>
            <Navbaar title="signup" />
            <div className='bg-[#FFF] w-full h-[7rem] flex px-[10rem] py-[2rem] flex-col justify-center items-start'>
                <h1 className='text-[2.5rem] font-bold leading-normal'>Signup</h1>
            </div>

            <div className='rounded-[1rem] w-[28.5rem] h-[28.0625rem] bg-white mt-[6.44rem] shadow-2xl	flex justify-center items-center'>

                <form onSubmit={onSubmitHandler} className='w-[15rem] h-[20rem] flex flex-col items-center justify-between'>

                    <input ref={fName} className='w-[15rem] h-[2.375rem] pl-[.5rem] rounded-[0.5rem] border-[0.1rem] border-[#ADB5BD] outline-[#888] border-[]' type="text" placeholder='First Name' />

                    <input ref={lName} className='w-[15rem] h-[2.375rem] pl-[.5rem] rounded-[0.5rem] border-[0.1rem] border-[#ADB5BD] outline-[#888] border-[]' type="text" placeholder='Last Name' />

                    <input ref={email} className='w-[15rem] h-[2.375rem] pl-[.5rem] rounded-[0.5rem] border-[0.1rem] border-[#ADB5BD] outline-[#888] border-[]' type="email" placeholder='Email' />

                    <input ref={password} className='w-[15rem] h-[2.375rem] pl-[.5rem] rounded-[0.5rem] border-[0.1rem] border-[#ADB5BD] outline-[#888] border-[]' type="password" placeholder='Password' />

                    <input ref={rePassword} className='w-[15rem] h-[2.375rem] pl-[.5rem] rounded-[0.5rem] border-[0.1rem] border-[#ADB5BD] outline-[#888] border-[]' type="password" placeholder='Repeat Password' />

                    <button className='inline-flex py-[0.4rem] px-[1.2rem] items-start gap-[0.5rem] rounded-[0.375rem] bg-[#7749F8] text-[#fff] w-[5.437rem] h-[2.375rem]'>Signup</button>
                </form>
            </div>

        </div>
    )
}

export default signup