'use client'
import React from 'react';
import {motion} from "framer-motion";

type Props = {}

const About = (props: Props) => {
  return (
    <motion.div 
    initial={{ opacity:0, }}
    transition={{ duration:1.5, }}
    whileInView={{ opacity:1 }}
    
    className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            About
        </h3>

        <motion.img
        initial={{
            x:-200,
            opacity:0,
        }}
        transition={{
            duration:2.5,
        }}
        whileInView={{ opacity:1,x:0 }}
        viewport={{ once: true }}
        className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:h-[600px] xl:w-[500px]'
        src = "https://lh3.googleusercontent.com/pw/AJFCJaVIx9lmMKIfd5rE4QMRjYE0vAsGxcB8SmgZaJoYyVfKAcQUu2z-_iMvP4wexy-pUzAxVqrjh1J1-NSktIRxpaE4hPhO86Zx_gaSRAU12i65l9bK7ldYACezQWIOjB20cPTn_Z57h8-oPSBZUsl03fvQc8JYlppS0BdkGFF_niqrqp2HVyHoQWDuYlGMJUVjiz4jjvrmfgLODZ39YI2ULFSDGiF562PvWnwxtXLzPUTqMufGegx2KDrviNsHnUj9kfffVDeshxy2EaIF8k2QhjBYLIOoKFp_ayH7hXeB2YjV8kg9gbZAFQJMSYH53HWcPWDSceFJF-Lb_LNC3eAzmKKR4BaCjknul91Edrgmbh2S6FYzhe4qHz4UVIkXKxWtdmbFwXpKX4f_g8s0MU7dYtLBSCyrWaTBHirReDswkwbuuua4pH8zYqVvhhcC0vgTMSm84llLge6IFKNuh72gB56w0YkW8Mw0YVDQNYOyvLhWh4nXy_pJGWTgBjT69TgV-AaBtv5tLZqEwinYzDnW4qW66J6tUeNNx_fj2o5ffGUEMbeFrBT7cR-Y8saswCUIxzsgi1hFqycu1E2YjomkVUijMZ2Eg8y_WRjTFDYkJT_hnZaPFqNoKAQV3wm3P-4dgsI0Zwj2rRhb6A2Bs0tIvGS7PTUplMVe7iJ6xyOlhEMwOKJ-ZrEDq6hpm8KUAHkicrY_o1MI_t8uToXU0Xjem1EKd1Db7FB0d91ro3UMd2KpN_57o3DguM5tckM25GZZskkmMG6mWY4LN-YIr_Zp31Lxv_szRy811f4sX3WPs17uJYTmHg8LJFVONlocc3I_cmgwuhFTb9DUc4oL2GAHNEqz-vgO2MIl41tPhbWUK9VQjzFYVdzQHqUw0PiG1pwWcW9xePsWZGD2sIdNZlsvocw=w697-h929-s-no?authuser=0"
        />

        <div className='space-y-10 px-0 md:px-10'>
            <h4 className='text-4xl font-semibold'>
                A bit of <span className='underline decoration-[red]/50'> background </span> about me
            </h4>
            <p className='text-base'>
                asfdasfasdfdfbdfbfgvsdfsdfsdffhgdfgsdfgfgfgsdf
            </p>
        </div>

    </motion.div>
  )
}

export default About