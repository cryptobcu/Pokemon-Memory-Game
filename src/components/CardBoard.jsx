import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { } from '../redux/cardsSlice'
import Card from './Card';

import { openCard, compare, close } from '../redux/cardsSlice'


function CardBoard() {

    const dispatch = useDispatch()

    const { items, compareArea } = useSelector(state => state.cards);


    useEffect(() => {
        if (compareArea.length === 2) {
            setTimeout(() => {
                dispatch(compare())
            }, 800);
        }
    }, [compareArea])



    return (
        <div
            style={{  }}
            className='flex flex-row flex-wrap w-72 justify-center rounded-lg
            bg-lime-300
            sm:w-full sm:max-w-6xl
            '
        >
            {
                items.map(card => (
                    <Card key={card.id} card={card} />
                ))
            }
        </div>
    )
}

export default CardBoard