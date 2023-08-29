import React from 'react'
import { useNavigate, Outlet } from 'react-router-dom'


function Card(props) {
    let navigate = useNavigate();

    return (
        <>
            {
                props.shoes.map((item, idx) => {
                    return (
                        <div className="col-md-4" key={idx} onClick={() => { navigate(`/detail/${item.id}`) }}>
                            <img src={item.url} width='80%' alt='이미지' />
                            <h4>{item.title}</h4>
                            <span>{item.price}</span>
                        </div>)
                })
            }
        </>
    )
}


export default Card