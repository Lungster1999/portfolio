'use client'
import React from 'react';
import Skill from './Skill';
import { motion } from "framer-motion";

type Props = {}

const Skills = (props: Props) => {
  return (
    <motion.div className='h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            Skills
        </h3>

        <h3 className='absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm'>
            Hover over for skills proficiency
        </h3>

        <div className='grid grid-cols-4 gap-5'>
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill /> 
            <Skill />
            <Skill />
            <Skill />

        </div>

    </motion.div>
  )
}

export default Skills