import React from 'react'
import CardBoard from './CardBoard'
import { motion } from "framer-motion"

import { useSelector } from 'react-redux'


function Content() {

    const { isEnd } = useSelector(state => state.cards);

    return (
        <div className='flex justify-center relative'>
            <CardBoard />
            {isEnd &&
                <motion.div className='absolute place-self-center flex flex-col justify-center items-center'
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1, duration: 2 }}
                >
                    <img className="w-100 "
                        src="img/ash-peace-sign.png" alt="" />
                    <p
                        className='text-xl sm:text-4xl'
                    > Congrats you got to catch them all!</p>
                </motion.div>
            }

        </div>
    )
}

export default Content