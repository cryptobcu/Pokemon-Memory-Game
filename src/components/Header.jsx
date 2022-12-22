import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { motion } from "framer-motion"
import { triggerEnd, reload } from '../redux/cardsSlice'
import { BsQuestionOctagonFill } from 'react-icons/bs'

function Header() {

    const { score} = useSelector(state => state.cards);
    const dispatch = useDispatch();

    const handleReload = () => {
        dispatch(reload())
    }

    const handleSurprise = () => {
        dispatch(triggerEnd())
    }

    return (
        <div className='flex flex-col items-center py-5 text-lg sm:text-3xl sm:px-4 bg-emerald-400 rounded-lg'>
            <div className='w-full flex mb-3 text-2xl sm:text-5xl justify-center'>
                Pokemon Memory Game
            </div>
            <div className='w-full flex flex-row items-center justify-evenly'>
                <motion.span
                    key={score}
                    initial={{ scale: 1 }}
                    animate={{ scale: [1, 1.2, 1] }}
                >
                    Score : {score}
                </motion.span>
                <div className='flex items-center'>
                    <button
                        className='bg-blue-500 hover:bg-blue-400 text-white  border-blue-700 hover:border-blue-500
                          font-bold py-1 px-2 border-b-2 rounded cursor-pointer 
                          sm:py-2 sm:px-4 sm:border-b-4 '
                        onClick={handleReload}
                    >
                        Reload
                    </button>
                    <motion.button
                        animate={{ scale: [1, 1.4, 1] }}
                        transition={{ duration: 1, ease: "easeInOut", repeat: Infinity }}
                        className=' rounded-full flex items-center text-md ml-3 '
                        onClick={handleSurprise}>
                        <BsQuestionOctagonFill color='red' />
                    </motion.button>
                </div>

            </div>

        </div >
    )
}

export default Header