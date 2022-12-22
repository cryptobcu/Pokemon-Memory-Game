import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { openCard, compare} from '../redux/cardsSlice'

import { motion } from "framer-motion"



function Card({ card }) {
    const dispatch = useDispatch()
    const { items, compareArea, isEnd } = useSelector(state => state.cards);


    const handleClick = () => {
        dispatch(openCard({ id: card.id }))
    }

    let randomX = Math.random() < 0.5 ? Math.random() * 1000 : Math.random() * -1000;
    let randomY = Math.random() < 0.5 ? Math.random() * 1000 : Math.random() * -1000;
 

    return (
        <motion.div
            key={isEnd}
            animate={isEnd ? {
                x: randomX,
                y: randomY,
            } : {}}
            transition={{
                duration: 2
            }}
        >
            <div className="relative w-16 p-1 sm:p-3 sm:w-32  " onClick={handleClick}>

                <motion.div
                    key={card.isMatch}
                    animate={{ scale: [1, 1.2, 1] }}
                    className="relative"
                    style={{ originX: 0.5, originY: 0.5 }}
                >
                    <img
                        className={`absolute transition-all ease-in duration-200 
                            ${card.isOpen ? "delay-200 rotate-y-0 " : " rotate-y-90 "}`}
                        src={card.src}
                        alt={card.name}
                    />
                </motion.div>
                <img
                    className={`transition-all ease-in duration-200
                           ${card.isOpen ? "rotate-y-90 " : "delay-200 rotate-y-0 "}`}
                    src="https://www.freeiconspng.com/uploads/pokeball-transparent-png-2.png"
                    alt="cover"
                />

            </div>
        </motion.div>


    )
}

export default Card