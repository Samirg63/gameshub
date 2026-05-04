

//Interfaces
import { IConditions } from '../utils/interfaces' 

type Props = {
  conditions:IConditions[]
}

const ProblemConditions = ({conditions}: Props) => {
  return (
    <div className='flex flex-wrap justify-between bg-zinc-200 p-4 mt-8'>
      {
        conditions.map((val,index)=>{
          if(val.status === 'default'){
            return <p key={index} className='px-4 py-1 w-[49%] border-b border-zinc-400 bg-opacity-50'>{val.hint}</p>
          }else if(val.status){
            return <p key={index} className='px-4 py-1 w-[49%] border-b border-zinc-400 bg-green-300 bg-opacity-50'>{val.hint}</p>
          }else{
            return <p key={index} className='px-4 py-1 w-[49%] border-b border-zinc-400 bg-red-300 bg-opacity-50'>{val.hint}</p>
          }
        })
      }
        
    </div>
  )
}

export default ProblemConditions