import React ,{useState, useEffect} from 'react'
import Link from 'next/link'
import {BsBagCheckFill} from 'react-icons/bs'
import { useStateContext } from '../context/StateContext'
import {runFireworks} from '../lib/utils'


const success = () => {
    const {setCartItems, setTotalQuantities, setTotalPrice} = useStateContext();
    useEffect(() => {
      localStorage.clear();
      setCartItems([]);
      setTotalQuantities(0);
      setTotalPrice(0);
      runFireworks();
    }, [])
  return (
    <div className='success-wrapepr'>
        <div className='success'>
            <p className='icon'>
                <BsBagCheckFill/>
            </p>
            <h2>Thank you for your order!!</h2>
            <p className='email-msg'>check your e-mail</p>
            <p className='description'>
                if you have questions then contact me
                <a className='email' href='mailto:foulenBenFoulen@gmail.com'> foulenBenFoulen</a>
            </p>
            <Link href='/'>
                <button type='button' className='btn' width='300px'>continue shopping</button>
            </Link>
        </div>
    </div>
  )
}

export default success