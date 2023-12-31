'use client'
import React from 'react';
import { motion } from "framer-motion"

type Props = {}

const ExpCard2 = (props: Props) => {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
        <motion.img
            initial={{ opacity:0, y:-100 }}
            transition={{ duration:1.5, }}
            whileInView={{ opacity:1,y:0 }}
            className='w-32 h-32 xl:w-[200px] xl:h-[200px] object-cover object-center'
            src = "data:image/jpeg;base64,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"
        />

        <div className='px-0 md:px-10'>
            <h4 className='uppercase text-4xl font-light'>Junior Mechanical Engineer</h4>
            <p className='uppercase font-bold text-2xl mt-1'>RULA BULK MATERIALS HANDLING</p>
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
            <p className='uppercase py-5 text-gray'>started : 01 Jan 2022 -- end: 31 Nov 2022 </p>

            <ul className='list-disc space-y-4 ml-5 text-lg'>
                <li>summary</li>
                <li>summary</li>
                <li>summary</li>
            </ul>
        </div>
    </article>
  )
}

export default ExpCard2