import React, { MouseEventHandler, ChangeEventHandler,ChangeEvent } from 'react'

//Interfaces
import { IItems } from '../utils/interfaces'

type Props = {
    options:IItems,
    itemId:number,
    changeHandle(e:ChangeEvent<HTMLSelectElement>,itemId:number):void,
    boxName:string
    

}

const ProblemBox = ({options,itemId,changeHandle,boxName}: Props) => {
    

  return (
    <div className='w-48'>
            <h6 className='text-center font-semibold'>{boxName} #{itemId+1}</h6>
            <div className='bg-zinc-300 p-2 flex flex-col space-y-2 border border-zinc-400'>
                {
                    Object.keys(options).map((type,index)=>(
                        <select style={{textTransform:'capitalize'}}  data-ypos={type} name="" id="" key={index} onChange={(e:ChangeEvent<HTMLSelectElement>)=>{changeHandle(e,itemId)}}>
                            <option value="null"></option>
                            {
                                Object.keys(options[type]).map((item:any)=>{
                                    if(options[type][item].available){
                                        return <option style={{textTransform:'capitalize'}} value={item} key={item}>{item}</option>
                                    }else{
                                        return <option style={{textTransform:'capitalize'}} disabled={true} value={item} key={item}>{item}</option>
                                    }
                                    
                                })
                                
                            }
                        </select>
                    ))
                }
            </div>
        </div>
  )
}

export default ProblemBox