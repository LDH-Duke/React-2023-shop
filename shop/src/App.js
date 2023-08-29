import './App.css';
import { Button, Nav, Navbar, Container } from 'react-bootstrap';
import data from './data.js'
import { useState } from 'react';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import Main from './components/Main';
import Detail from './components/Detail';
import Cart from './components/Cart';
import axios from 'axios'

function App() {
  let [shoes, setShoes] = useState(data);
  let [count, setCount] = useState(1)
  let [loading, setLoding] = useState(0);

  const getData = async () => {
    setLoding(1)
    setCount(count + 1)
    console.log(count)
    const url1 = 'https://codingapple1.github.io/shop/data2.json'
    const url2 = 'https://codingapple1.github.io/shop/data3.json'

    if (count == 1) {
      await axios.get(url1)
        .then((res) => {
          let newShoes = [...shoes, ...res.data];
          setShoes(newShoes)
          setLoding(0)
        })
        .catch(() => {
          console.log('get request error')
          setLoding(0)
        })
    }
    else if (count == 2) {
      await axios.get(url2)
        .then((res) => {
          let newShoes = [...shoes, ...res.data];
          setShoes(newShoes)
          setLoding(0)
        })
        .catch(() => {
          console.log('get request error')
          setLoding(0)
        })
    }
    else {
      setLoding(0)
      return (alert('데이터가 없습니다.'))
    }
  }



  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main shoes={shoes} getData={getData} loading={loading} />} />
        <Route path='/detail/:id' element={<Detail shoes={shoes} />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='*' element={<div>없는페이지</div>} />
      </Routes>
    </div >
  );
}

export default App;
