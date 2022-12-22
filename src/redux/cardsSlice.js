/* eslint-disable array-callback-return */
import { createSlice } from '@reduxjs/toolkit'

import { cardList, shuffle } from '../data/data';

export const cardsSlice = createSlice({
  name: 'cards',
  initialState: {
    items: cardList,
    compareArea: [],
    isEnd: false,
    score: 0,
  },
  reducers: {
    openCard: (state, action) => {
      let selectedId = action.payload.id;
      let selectedCard = state.items.find(item => item.id === selectedId)

      let isAlreadyArea = state.compareArea.find(item => item.id === selectedCard.id)
      if (!isAlreadyArea && state.compareArea.length < 2 && !selectedCard.isMatch) {
        selectedCard.isOpen = true;
        state.compareArea.push(selectedCard);
      }
    },
    compare: (state, action) => {
      let cardFirst = state.compareArea[0];
      let cardSecond = state.compareArea[1];

      let itemFirst = state.items.find(item => item.id === cardFirst.id);
      let itemSecond = state.items.find(item => item.id === cardSecond.id);

      if (cardFirst.name === cardSecond.name) {
        itemFirst.isMatch = true;
        itemSecond.isMatch = true;
        state.score += 50;
      } else {
        itemFirst.isOpen = false;
        itemSecond.isOpen = false;
        state.score -= 10;
      }
      state.compareArea = [];

      let unMatchedCard = state.items.find(item => item.isMatch === false);
      if (!unMatchedCard) {
        state.isEnd = true;
      }
    },

    triggerEnd: (state, action) => {
      state.items.map(item => item.isOpen = true)
      state.isEnd = true
    },

    reload: (state, action) => {
      let list = shuffle([...state.items]);
      state.items = list;
      state.items.map(item => {
        item.isOpen = false;
        item.isMatch = false;
      })
      state.isEnd = false;
      state.compareArea = [];
      state.score = 0;
    }

  }
})

export const { compare, openCard, triggerEnd, reload } = cardsSlice.actions

export default cardsSlice.reducer