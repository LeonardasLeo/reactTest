import {createSlice} from "@reduxjs/toolkit";

export const playerSlice = createSlice({
    name: "player",
    initialState: {
        position: 1,
        bought: [],
        icon: 'https://cdn0.iconfinder.com/data/icons/board-card-games-iconez/64/Monopoly-Ship-256.png',
        money: 200
    },
    reducers: {
        movePlayer: (state, action) => {
            state.position += action.payload
            if (state.position > 16){
                state.money += 200
                const overload = state.position - 16
                state.position = 0
                state.position += overload
            }
        },
        buyStreet: (state, action) => {
                state.money -= action.payload.price
                state.bought = [...state.bought, action.payload]
                action.payload.price /= 2
        },
        sellStreet: (state, action) => {
            state.bought = state.bought.filter(item => item.index !== action.payload.index)
            state.money += action.payload.price
        },
        changeIconAndResetGame: (state, action) => {
            state.position = 1
            state.bought = []
            state.icon = action.payload
            state.money = 200
        }
    }
})

export const {movePlayer, buyStreet, sellStreet, changeIconAndResetGame } = playerSlice.actions

export default playerSlice.reducer;