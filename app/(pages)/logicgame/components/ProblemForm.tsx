import React, { Dispatch, SetStateAction } from 'react'

//Components
import ProblemBox from './ProblemBox'

//Interfaces
import { IConditions, IItems } from '../utils/interfaces'

type Props = {
  items:IItems,
  setItems:Dispatch<SetStateAction<IItems>>,
  setCondition:Dispatch<SetStateAction<IConditions[]>>,
  conditions:IConditions[],
  problemId:number,
  boxName:string,
  modalHandler:Dispatch<SetStateAction<boolean>>,
  timestampHandler:Dispatch<SetStateAction<number|undefined>>
}

//Check Conditions function

import { HandleConditions } from '../utils/CheckConditions'




const ProblemForm = ({items,setItems,setCondition,conditions,problemId,boxName,modalHandler,timestampHandler}: Props) => {
  

  const handleCondition = new HandleConditions(problemId);

  function changeHandle(e:React.ChangeEvent,itemId:number){
    const type = e.target.getAttribute('data-Ypos')
    const id = (e.target as HTMLInputElement).value
    
    if(type !== null && id != null){
      const newItems = {...items}   
      Object.keys(newItems[type]).map((val)=>{
            if(newItems[type][val].Xpos === itemId){
              newItems[type][val].available = true
              newItems[type][val].Xpos = 'null'
            }        
      })

  
      if( newItems[type][id] !== undefined){
        newItems[type][id].available = false
        newItems[type][id].Xpos = itemId
      }
      setItems(newItems)
      console.log(handleCondition.check(conditions,items,setCondition) )
      if(handleCondition.check(conditions,items,setCondition) ){
        timestampHandler(new Date().getTime())
        modalHandler(true)
      }
      
    }
  }

  

  return (
    <div className='flex mt-16 space-x-6 '>

        <div className="text-center flex flex-col justify-end pb-2 space-y-1">
          {
            Object.keys(items).map((val,index)=>(
              <p style={{textTransform:'capitalize'}} key={index}>{val}</p>
            ))
          }              
        </div>
        {

          Object.keys(items[Object.keys(items)[0]]).map((val,index)=>{
              return <ProblemBox boxName={boxName} key={index} itemId={index}  options={items} changeHandle={changeHandle}/>;          
          })
        }
    </div>
  )
}

export default ProblemForm