import React, { useState, useEffect } from 'react'
import BusinessInfo from './BusinessInfo'
import ProductInquiry from './ProductInquiry'
import ProductInfo from './ProductInfo'
import Review from './Review'
import './style/DetailInfo.css'

function DetailInfo(props) {
    let [fade, setFade] = useState('')

    useEffect(() => {
        const a = setTimeout(() => { setFade('end') }, 10) //automatic batching으로 시간줘야함

        return () => {
            clearTimeout(a)
            setFade('')

        }
    }, [props.tab])


    const tab = [<ProductInfo />, <Review />, <ProductInquiry />, <BusinessInfo />][props.tab]

    return (<div className={'start ' + fade} >{tab}</div >)

}

export default DetailInfo