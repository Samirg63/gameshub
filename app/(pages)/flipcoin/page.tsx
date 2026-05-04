"use client"
import Image from 'next/image'
import {  useRef, useState } from 'react'
import './animations.css'




const Page = () => {

    const [caraPoints,setCaraPoints ] = useState<number>(0)
    const [coroaPoints,setCoroaPoints ] = useState<number>(0) 
    const coin = useRef<HTMLDivElement>(null)
    const flip = useRef<HTMLButtonElement>(null)
    

    function FlipCoin(){
        const animation:number = Math.floor(Math.random()*2)
        coin.current!.style.animation = 'none'
        flip.current!.disabled = true;

        if(animation){
            setTimeout(() => {
                coin.current!.style.animation = 'spin-cara 3s forwards'
            }, 100);
            setTimeout(() => {
                setCaraPoints(caraPoints+1)
                flip.current!.disabled = false;
            }, 3000);
        }else{
            setTimeout(() => {
                coin.current!.style.animation = 'spin-coroa 3s forwards'
            }, 100);
            setTimeout(() => {
                setCoroaPoints(coroaPoints+1)
                flip.current!.disabled = false;
            }, 3000);
            
        }
    }

    function handleReset(){
        setCoroaPoints(0)
        setCaraPoints(0)
    }

  return (
     <section className="flex flex-col justify-center items-center">
        <div className="stats ml-auto mr-8 text-right">
            <p  className='text-xl'>Cara:{caraPoints}</p>
            <p  className='text-xl'>Coroa:{coroaPoints}</p>
        </div>
        <div className="w-37.5 h-37.5 relative transform-3d" ref={coin}>
            <div className="caraCoin absolute backface-hidden">
                <Image width={150} height={150} src="/assets/flipCoin/heads.svg" alt=""/>
            </div>
            <div className="coroaCoin rotate-x-180 absolute backface-hidden">
                <Image width={150} height={150} src="/assets/flipCoin/tails.svg" alt=""/>
            </div>
        </div>

        <div className="buttons flex gap-4 mt-6">
            <button ref={flip} onClick={()=>{FlipCoin()}} className='bg-yellow py-2 px-4 w-30 rounded-md font-semibold cursor-pointer disabled:bg-yellow/60 disabled:cursor-progress' >Flip</button>
            <button onClick={()=>{handleReset()}} className='bg-yellow py-2 px-4 w-30 rounded-md font-semibold cursor-pointer'>Reset</button>
        </div>
    </section>
  )
}

export default Page