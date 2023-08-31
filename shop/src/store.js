import { configureStore, createSlice } from '@reduxjs/toolkit'
import cartItem from './store/cartSlice'


let user = createSlice({ //useState랑 비슷 -> 등록해야 사용가능
    name: 'user',
    initialState: 'kim',
    reducers: { //함수 만들수있음

    }


})

// let cartItem = createSlice({
//     name: 'cartItem',
//     initialState: [
//         { id: 0, name: 'White and Black', count: 2 },
//         { id: 2, name: 'Grey Yordan', count: 1 }
//     ],
//     reducers: {
//         addCount(state, action) {
//             const idx = state.findIndex((element) => { return element.id === action.payload })
//             state[idx].count
//         }
//     }
// })

// export let { addCount } = cartItem.actions


export default configureStore({
    reducer: { //등록
        user: user.reducer,
        cartItem: cartItem.reducer,
    }
})