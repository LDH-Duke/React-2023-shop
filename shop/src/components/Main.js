import React, { useState } from 'react'
import { Button, Nav, Navbar, Container } from 'react-bootstrap';
import { Routes, Route, Link, Outlet } from 'react-router-dom';
import Navibar from './Navibar.js';
import Card from './Card.js';
import './style/Main.css'
import axios from 'axios'

function Main(props) {
    const { shoes, getData } = props

    return (
        <div className='Main'>
            {/* <Navibar /> */}

            <div className='main-bg' />
            <div className="container">
                <div className="row">
                    <Card shoes={props.shoes} />
                </div>
            </div>
            <button onClick={props.getData}>버튼</button>
            {
                props.loading ? <p>로딩중...</p> : null
            }
        </div>
    )
}

export default Main