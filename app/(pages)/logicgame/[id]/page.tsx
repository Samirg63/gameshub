'use client'

//Style
import '../style.css'

//Components
import Container from "../components/Container"; 
import { FaEye } from "react-icons/fa";

//_components
import ProblemIntroduction from "../components/ProblemIntroduction"; 
import ProblemForm from "../components/ProblemForm";
import ProblemConditions from "../components/ProblemConditions";
import { Dialog } from '@radix-ui/themes';
import { ClickAwayListener } from 'click-away-listener';

//Interfaces
import { IItems,IConditions} from "../utils/interfaces";
import {  useState } from "react";

//Problem
import { problem } from "../utils/problems";
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const params = useParams<{id:string}>()
  const [conditions,setConditions] = useState<IConditions[]>((problem[Number(params.id)].condition as unknown) as IConditions[]);
  const [items,setItens] = useState<IItems>(problem[Number(params.id)].items as unknown as IItems)
  const [modalVisibility,setModalVisibility] = useState<boolean>(false)
  const [resolutionModalVisibility,setResolutionModalVisibility] = useState<boolean>(false)
  const [initTimestamp] = useState<number>(new Date().getTime())
  const [finalTimestamp,setFinalTimestamp] = useState<number>()

  
  function formatTime(time:number){  
    const ss = String(Math.floor((time / 1000) % 60)).padStart(2,'0');
    const mm = String(Math.floor((time / (1000 * 60)) % 60)).padStart(2,'0');
    const hh = String(Math.floor(time / (1000 * 60 * 60))).padStart(2,'0');
    
    return hh+":"+mm+":"+ss
  }
  


  
  if(Object.keys(items).length !== 0 && conditions.length !== 0){
    return (
      <Container>
        

        <Dialog.Root open={modalVisibility} >
            <Dialog.Content>
              <Dialog.Title></Dialog.Title>
              <ClickAwayListener onClickAway={()=>setModalVisibility(false)}>
                <div >
                  <h1 className='text-center font-semibold text-xl mb-4'>Parabens! Você conseguiu!</h1>
                  <p className='text-zinc-700'>Você concluiu esse problema em <span className='text-black font-semibold'>
                  {
                    (initTimestamp && finalTimestamp) && formatTime(finalTimestamp - initTimestamp)
                  }  
                  </span>.</p>
                  <p className='text-zinc-700'>Tente outros problemas em: <Link href={'/logicgame'} className='hover:underline'>Problemas de lógica</Link></p>
                </div>
              </ClickAwayListener>
            </Dialog.Content>
        </Dialog.Root>

        {/* Resolution dialog */}
        <Dialog.Root open={resolutionModalVisibility} >
            <Dialog.Content  minWidth={"800px"}>
              <Dialog.Title></Dialog.Title>
              <ClickAwayListener onClickAway={()=>setResolutionModalVisibility(false)}>
                <div>
                 <Image alt='Resolution' width={1280} height={500} src={`/assets/logicgame/solution${params.id}.png`}></Image>
                </div>
              </ClickAwayListener>
            </Dialog.Content>
        </Dialog.Root>
        <ProblemIntroduction name={problem[Number(params.id)].name} description={problem[Number(params.id)].descricao} />
        <ProblemForm modalHandler={setModalVisibility} timestampHandler={setFinalTimestamp} boxName={problem[Number(params.id)].boxName} problemId={Number(params.id)} items={items!} setItems={setItens} setCondition={setConditions} conditions={conditions!}/>
        <ProblemConditions conditions={conditions!} />
          
        <button onClick={()=>{setResolutionModalVisibility(true)}} title='Revelar resolução' className='fixed top-28 right-4 border-2 border-yellow rounded-full w-15 h-15 bg-gray/60 drop flex items-center justify-center cursor-pointer duration-200 hover:scale-110'>
            <FaEye color='rgb(200,200,200)' size={'1.6em'}/>
        </button>
      </Container>
    );
  }
}
