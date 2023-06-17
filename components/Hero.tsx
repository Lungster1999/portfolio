
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import Link from 'next/link'

type Props = {}

const Hero = (props: Props) => {
    const [text,count] = useTypewriter({
        words: ["Hello, Hope you are well today",
                "My name is Lungile",
                "Welcome to my portfolio",
                "I am a Data engineer"],
        loop:true,
        delaySpeed:2000,
    });
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
       <BackgroundCircles />
       <img 
            className='relative rounded-full h-32 w-32 mx-auto object-cover'
            src="https://lh3.googleusercontent.com/pw/AJFCJaVIx9lmMKIfd5rE4QMRjYE0vAsGxcB8SmgZaJoYyVfKAcQUu2z-_iMvP4wexy-pUzAxVqrjh1J1-NSktIRxpaE4hPhO86Zx_gaSRAU12i65l9bK7ldYACezQWIOjB20cPTn_Z57h8-oPSBZUsl03fvQc8JYlppS0BdkGFF_niqrqp2HVyHoQWDuYlGMJUVjiz4jjvrmfgLODZ39YI2ULFSDGiF562PvWnwxtXLzPUTqMufGegx2KDrviNsHnUj9kfffVDeshxy2EaIF8k2QhjBYLIOoKFp_ayH7hXeB2YjV8kg9gbZAFQJMSYH53HWcPWDSceFJF-Lb_LNC3eAzmKKR4BaCjknul91Edrgmbh2S6FYzhe4qHz4UVIkXKxWtdmbFwXpKX4f_g8s0MU7dYtLBSCyrWaTBHirReDswkwbuuua4pH8zYqVvhhcC0vgTMSm84llLge6IFKNuh72gB56w0YkW8Mw0YVDQNYOyvLhWh4nXy_pJGWTgBjT69TgV-AaBtv5tLZqEwinYzDnW4qW66J6tUeNNx_fj2o5ffGUEMbeFrBT7cR-Y8saswCUIxzsgi1hFqycu1E2YjomkVUijMZ2Eg8y_WRjTFDYkJT_hnZaPFqNoKAQV3wm3P-4dgsI0Zwj2rRhb6A2Bs0tIvGS7PTUplMVe7iJ6xyOlhEMwOKJ-ZrEDq6hpm8KUAHkicrY_o1MI_t8uToXU0Xjem1EKd1Db7FB0d91ro3UMd2KpN_57o3DguM5tckM25GZZskkmMG6mWY4LN-YIr_Zp31Lxv_szRy811f4sX3WPs17uJYTmHg8LJFVONlocc3I_cmgwuhFTb9DUc4oL2GAHNEqz-vgO2MIl41tPhbWUK9VQjzFYVdzQHqUw0PiG1pwWcW9xePsWZGD2sIdNZlsvocw=w697-h929-s-no?authuser=0" alt="image"
        />
    
        <div className='z-20'>
            <h2 className='uppercase text-sm text-gray0500 pb-2 tracking-[15px]'>Data Engineer</h2>
            <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
                <span className='mr-3'>{text}</span>
                <Cursor cursorColor='red'/>
            </h1>
        <div className='p-5'>
            <Link href="#about">
                <button className='heroButton'>About</button>
            </Link>
            <Link href="#experience">
                <button className='heroButton'>Experience</button>
            </Link>
            <Link href="#skills">
                <button className='heroButton'>Skills</button>
            </Link>
            <Link href="#projects">
                <button className='heroButton'>Projects</button>
            </Link>
            
        </div>
        
        </div>

    </div>

    
  );
}

export default Hero