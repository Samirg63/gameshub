"use client"

import Image from 'next/image'
import './animations.css'

type Props = {
    mouseHandler:boolean
}

const CoinIcon = ({mouseHandler}: Props) => {

  return (
    <div style={{animationName:(mouseHandler)?'flipCoin':''}} className='w-25 h-25 relative transform-3d flex items-center justify-center coin'>
        <div className="caraCoin absolute backface-hidden ">
            <Image width={80} height={80} src="/assets/flipCoin/heads.svg" alt=""/>
        </div>
        <div className="coroaCoin rotate-x-180 absolute backface-hidden">
            <Image width={80} height={80} src="/assets/flipCoin/tails.svg" alt=""/>
        </div>
    </div>
  )
}

export default CoinIcon