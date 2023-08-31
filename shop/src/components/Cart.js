import React from 'react'
import { Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { addCount, deleteCount, deleteItem } from '../store/cartSlice'

function Cart() {

    //redux store 가져와줌
    let items = useSelector((state) => { return state.cartItem })
    let dispatch = useDispatch()


    return (
        <div>
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>상품명</th>
                        <th>수량</th>
                        <th>변경하기</th>
                        <th>삭제하기</th>
                    </tr>
                </thead>

                {
                    items.map((item, idx) => {
                        return (
                            <tbody key={idx}>
                                <tr>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.count}</td>
                                    <td>
                                        <button onClick={() => { dispatch(addCount(item.id)) }}>+</button>
                                        <button onClick={() => { dispatch(deleteCount(item.id)) }}>-</button>
                                    </td>
                                    <td>
                                        <button onClick={() => { dispatch(deleteItem(item.id)) }}>삭제</button>
                                    </td>

                                </tr>
                            </tbody>)
                    })
                }

            </Table>
        </div >
    )
}

export default Cart