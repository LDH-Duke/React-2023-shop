import React, { useEffect, useState } from 'react'
import { useParams, useLocation, redirect, Link } from 'react-router-dom'
import styled from 'styled-components'
import Nav from 'react-bootstrap/Nav';
import Navibar from './Navibar'
import './style/Detail.css'
import DetailInfo from './DetailInfo';
import { useDispatch } from 'react-redux';
import { addCart } from '../store/cartSlice';


function Detail(props) {
    const { id } = useParams();
    const item = props.shoes[id]
    const [hide, setHide] = useState(1)
    const [tab, setTab] = useState(0)
    const [fade, setFade] = useState('')

    let dispatch = useDispatch();

    useEffect(() => {
        let a = setTimeout(() => { setFade('end') }, 10)

        return () => {
            clearTimeout(a);
            setFade('')
        }
    }, [])

    const addBucket = () => {
        let data = {
            id: item.id,
            name: item.title,
            count: 1
        }
        dispatch(addCart(data))
    }

    return (
        <div className={'detail_start ' + fade}>
            {/* <Navibar /> */}
            {
                hide ? <div id='timebox' style={{ background: 'yellow' }}>
                    <p>2초 후 사라짐</p>
                </div> : null
            }
            <div className='detail-item'>
                <div className='de-img'>
                    <img src={item.url} alt='이미지'></img>
                </div>
                <div className='de-info'>
                    <h4>{item.title}</h4>
                    <span>{item.content}</span><br />
                    <span>{item.price}</span>
                    <button onClick={addBucket}>구매하기</button>
                    <Link to='/cart'>장바구니</Link>
                </div>

            </div>

            <Nav justify variant="tabs" defaultActiveKey="/home" style={{ margin: '0 101px 0 101px' }}>
                <Nav.Item>
                    <Nav.Link eventKey="0" onClick={() => { setTab(0) }}>제품정보</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="1" onClick={() => { setTab(1) }}>상품평</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="2" onClick={() => { setTab(2) }}>상품문의</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="3" onClick={() => { setTab(3) }}>안내</Nav.Link>
                </Nav.Item>
            </Nav>
            <DetailInfo tab={tab} />
        </div >
    )
}

export default Detail