'use client'
import React from 'react';
import { motion } from "framer-motion"

type Props = {}

const ExpCard = (props: Props) => {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
        <motion.img
            initial={{ opacity:0, y:-100 }}
            transition={{ duration:1.5, }}
            whileInView={{ opacity:1,y:0 }}
            className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
            src = "https://static.wixstatic.com/media/4859e3_e29a30f6c60d42bb8065ca3f7977bf2c~mv2.png/v1/fill/w_149,h_149,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Calybre%20Logo%20(WM)%20White%20on%20Steel%20Blue.png"
        />

        <div className='px-0 md:px-10'>
            <h4 className='uppercase text-4xl font-light'>Data engineer Associate</h4>
            <p className='uppercase font-bold text-2xl mt-1'>CALYBRe</p>
            <div className='flex space-x-2 my-2'>
                <img className='h-10 w-10 rounded-full'
                    src = "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Microsoft_Azure.svg/1200px-Microsoft_Azure.svg.png" 
                />
                <img className='h-10 w-10 rounded-full  object-cover'
                    src = "https://www.ctelecoms.com.sa/ui/Blogs%202022/databricks1.png" 
                />

                <img className='h-10 w-10 rounded-full  object-cover'
                    src = "https://www.freecodecamp.org/italian/news/content/images/2023/05/typeinpython.png" 
                />

                <img className='h-10 w-10 rounded-full  object-cover'
                    src = "https://root-it.uk/wp-content/uploads/2023/02/com037-scaled-1.jpg" 
                />
                {/*techused*/}
            </div>
            <p className='uppercase py-5 text-gray'>started : 01 Dec 2022 -- Current:</p>

            <ul className='list-disc space-y-4 ml-5 text-lg'>
                <li>summary</li>
                <li>summary</li>
                <li>summary</li>
            </ul>
        </div>
    </article>
  )
}

export default ExpCard