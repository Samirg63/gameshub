"use client"
import Image from "next/image"
import Link from "next/link"
import React, { useState } from "react"


type Props = {
  name:string,
  link:string,
  icon?:React.ComponentType<any> | string
}

const Card = ({name,link,icon:CustomIcon}:Props) => {

  const [mouseOver,setMouseOver] = useState<boolean>(false)
  
  function renderIcon(){
    if(!CustomIcon){
      return;
    }

    if(typeof CustomIcon === 'string'){
      return <Image width={85} height={85} alt="Icon" src={CustomIcon}/>
    }else{
      return <CustomIcon mouseHandler={mouseOver}/>
    }
  }

  return (
    <Link
    onMouseOver={()=>{setMouseOver(true)}}
    onMouseOut={()=>{setMouseOver(false)}}
    href={link} className="bg-yellow h-45 p-2 rounded-lg cursor-pointer hover:scale-105 duration-200">
      <div className="w-full h-30 bg-white/30 rounded-[inherit] mb-3 flex items-center justify-center overflow-hidden">
      {
        renderIcon()
      }
      </div>

      <h3 className="font-semibold uppercase text-xl text-center">{name}</h3>
    </Link>
  )
}

export default Card