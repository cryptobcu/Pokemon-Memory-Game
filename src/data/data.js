import { nanoid } from "@reduxjs/toolkit";

const arr = [
    "bulbasaur",
    "butterfree",
    "charmander",
    "gastly",
    "jigglypuff",
    "meowth",
    "onix",
    "pidgeotto",
    "pikachu",
    "squirtle",
    "bulbasaur",
    "butterfree",
    "charmander",
    "gastly",
    "jigglypuff",
    "meowth",
    "onix",
    "pidgeotto",
    "pikachu",
    "squirtle",
];

const list = [];

for (var i = 0; i < arr.length; i++) {
    list.push({
        id: nanoid(),
        name: arr[i],
        src: "img/" + arr[i] + ".png ",
        isOpen: false,
        isMatch: false,
    });
}

export function shuffle(array) {
    let currentIndex = array.length,
        randomIndex;
    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex],
            array[currentIndex],
        ];
    }

    return array;
}

export const cardList = shuffle([...list]);
