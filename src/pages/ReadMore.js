import React from 'react'
import Navbaar from '@/components/Navbaar'
import Link from 'next/link'

const ReadMore = () => {
    return (
        <div>
            <Navbaar title="signup" />
            <div className='bg-[#F8F9FA] flex flex-col w-full pb-[5rem]'>
                <div className='bg-[#FFF] w-full h-[7rem] flex px-[10rem] py-[2rem] flex-col justify-center items-start'>
                    <Link href="/" className='text-[2.5rem] font-bold leading-normal text-[#7749F8]'>&lt; Back to all blogs</Link>
                </div>


                <div className='mt-[2.5rem]'>
                    <h1 className='text-[1.75rem] font-medium pl-[10rem]'>All from Elon Musk</h1>
                    <div className='rounded-[0.5rem] w-[55.0625rem] h-[18.625rem] bg-white ml-[10.38rem] mt-[1.81rem] shadow-2xl flex flex-col gap-[] pl-[1.5rem]'>

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
                        </div>


                    </div>
                </div>

                <div className='mt-[2.5rem]'>
                    <div className='rounded-[0.5rem] w-[55.0625rem] h-[38.625rem] bg-white ml-[10.38rem] mt-[1.81rem] shadow-2xl flex flex-col gap-[] pl-[1.5rem]'>

                        <div className='w-[95%] mt-5'>

                            <div className='flex w-[40%] justify-between gap-4'>
                                <div><img src="./img/profile 2.png" alt="" className='w-[5rem]' /></div>
                                <div>
                                    <h2 className='text-[1.2rem] font-semibold'>

                                        Introducing ChatGPT</h2>
                                    <p className='text-[#888]'>Elon Musk - November 23rd, 2022</p>
                                </div>
                            </div>
                            <br />
                            <p className='text-[1rem] text-[#888]'>We’ve trained a model called ChatGPT which interacts in a conversational way. The dialogue format makes it possible for ChatGPT to answer followup questions, admit its mistakes, challenge incorrect premises, and reject inappropriate requests. <br />
                                We’ve trained a model called ChatGPT which interacts in a conversational way. The dialogue format makes it possible for ChatGPT to answer followup questions, admit its mistakes, challenge incorrect premises, and reject inappropriate requests. <br />
                                <br />
                                Methods:
                                <br />
                                We trained this model using Reinforcement Learning from Human Feedback (RLHF), using the same methods as InstructGPT, but with slight differences in the data collection setup. We trained an initial model using supervised fine-tuning: human AI trainers provided conversations in which they played both sides—the user and an AI assistant. We gave the trainers access to model-written suggestions to help them compose their responses. We mixed this new dialogue dataset with the InstructGPT dataset, which we transformed into a dialogue format. <br /> <br />
                                To create a reward model for reinforcement learning, we needed to collect comparison data, which consisted of two or more model responses ranked by quality. To collect this data, we took conversations that AI trainers had with the chatbot. We randomly selected a model-written message, sampled several alternative completions, and had AI trainers rank them. Using these reward models, we can fine-tune the model using Proximal Policy Optimization. We performed several iterations of this process.
                            </p>
                        </div>


                    </div>
                </div>
            </div>

            <div className='absolute right-[5rem] top-[15rem] h-[10rem] flex flex-col gap-5 items-end'>
                <p className='text-[#152536] text-[1.25rem] underline'>elon@openai.com</p>
                <h2 className='text-[#7749F8] text-[2.5rem] font-bold'>Elon Musk</h2>
                <img src="./img/profile 3.png" alt="" />
            </div>

        </div>
    )
}

export default ReadMore