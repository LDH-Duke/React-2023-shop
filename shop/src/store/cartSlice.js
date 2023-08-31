import { configureStore, createSlice } from '@reduxjs/toolkit'




let cartItem = createSlice({
    name: 'cartItem',
    initialState: [
        { id: 199, name: 'White and Black', count: 2 },
        { id: 200, name: 'Grey Yordan', count: 1 }
    ],
    reducers: {
        addCount(state, action) {
            const idx = state.findIndex((element) => { return element.id === action.payload })
            state[idx].count++
        },
        deleteCount(state, action) {
            const idx = state.findIndex((element) => { return element.id === action.payload })
            console.log(state[idx].count)
            if (state[idx].count == 0) {
                state[idx].count = 0
            } else {
                state[idx].count--
            }
        },

        addCart(state, action) {
            const idx = state.findIndex((element) => { return element.id === action.payload.id })
            if (idx == -1) {
                state.push(action.payload)
            } else {
                state[idx].count++
            }
        },

        deleteItem(state, action) {
            const idx = state.findIndex((element) => { return element.id === action.payload })
            const delItem = state[idx]
            state.splice(idx, 1)
            return alert(delItem.name + '을 삭제하였습니다.')
        }
    }
})

export let { addCount, addCart, deleteCount, deleteItem } = cartItem.actions

export default cartItem;