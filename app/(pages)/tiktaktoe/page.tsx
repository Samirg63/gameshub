"use client"

import { useState,useRef } from "react"


const Page = () => {

  const [isPlaying,setIsPlaying] = useState<boolean>(false)
  const [gameMode,setGameMode] = useState<'IA'|'multiplayer'>()
  const [actPlayer,setActPlayer] = useState<'x' | 'o'>('x')
  const actPlayerRef = useRef<'x' | 'o'>('x')
  const movesRef = useRef<number>(0)
  const [xPoints,setXPoints] = useState<number>(0)
  const [oPoints,setOPoints] = useState<number>(0)
  
  
  function startGame(mode:'IA'|'multiplayer'){
    setIsPlaying(true);
    setGameMode(mode)
  }

  function changePlayer(){
    if(actPlayerRef.current == 'x'){
      setActPlayer('o')
      actPlayerRef.current = 'o'
    }else{
      setActPlayer('x')
      actPlayerRef.current = 'x'
    }
  }

  function doMove(e:React.MouseEvent<HTMLDivElement>){
    const target:HTMLElement = e.target as HTMLElement
    let endGame = false;

    if(target.innerHTML === ''){
      target.innerHTML = `<span class="select-none font-[roboto] lowercase ${actPlayerRef.current == 'x'? 'text-green-700' : 'text-red-700'}">${actPlayer}</span>`
    }

    
    movesRef.current = movesRef.current+1


    if(movesRef.current >= 5){
      endGame = validateVictory()
    }
    console.log(movesRef.current)
    if(!endGame){
      changePlayer();

      if(gameMode == 'IA' && (movesRef.current) < 9){
        IAPlay();
      }
    }

  }

  function validateVictory(){
    const boxes:NodeListOf<HTMLElement> = document.querySelectorAll('.box')
    const gameStatus:string[] = [];
    let end:boolean = false
    let draw:boolean = false;


    boxes.forEach((item:HTMLElement,index:number)=>{
      
      if(item.children[0] !== undefined){
        gameStatus.push(item.children[0].innerHTML)
      }else{
        gameStatus.push('null'+index)
      }
    })

    //horizontal winning

    if(gameStatus[0] == gameStatus[1] && gameStatus[1] == gameStatus[2]){
        end = true
    }else if(gameStatus[3] == gameStatus[4] && gameStatus[4] == gameStatus[5]){
        end = true
    }else if(gameStatus[6] == gameStatus[7] && gameStatus[7] == gameStatus[8]){
        end = true
    }

    //vertical winning

    if(gameStatus[0] == gameStatus[3] && gameStatus[3] == gameStatus[6]){
        end = true
    }else if(gameStatus[1] == gameStatus[4] && gameStatus[4] == gameStatus[7]){
        end = true
    }else if(gameStatus[2] == gameStatus[5] && gameStatus[5] == gameStatus[8]){
        end = true
    }

    //Diagonal winning

    if(gameStatus[0] == gameStatus[4] && gameStatus[4] == gameStatus[8]){
        end = true
    }else if(gameStatus[2] == gameStatus[4] && gameStatus[4] == gameStatus[6]){
        end = true
    }

    //draw
    if(movesRef.current === 9 && end === false){
        end = true
        draw = true;
    }

    if(end){
        if(!draw){
            addPoint()
        }

        showWinning(draw)
    }

    return end;
  }

  function IAPlay(){
    let IAPlayIndex;
    let validePlay:boolean = false;
    const boxes:NodeListOf<HTMLElement> = document.querySelectorAll('.box')
    const gameStatus:string[] = [];
    boxes.forEach((item:HTMLElement,index:number)=>{
      
      if(item.children[0] !== undefined){
        gameStatus.push(item.children[0].innerHTML)
      }else{
        gameStatus.push('null'+index)
      }
    })

    while(!validePlay){
      IAPlayIndex = Math.floor(Math.random() * 8);
      if(gameStatus[IAPlayIndex] !== 'x' && gameStatus[IAPlayIndex] !== 'o'){
          validePlay = true
      }
    }

    boxes[IAPlayIndex!].innerHTML = `<span class="select-none lowercase">${actPlayerRef.current}</span>`
    
    
    movesRef.current = movesRef.current+1
    validateVictory()
    changePlayer();
  }

  function addPoint(){
    if(actPlayerRef.current == 'x'){
      setXPoints(xPoints+1)
    }else{
      setOPoints(oPoints+1)
    }
  }

  function showWinning(draw:boolean){
    const modal:HTMLElement = document.querySelector('#modal')!
    modal.style.display = 'flex'

    if(draw){
      modal.children[0].innerHTML = 'Empate!'
    }else{
      modal.children[0].innerHTML = `o jogador ${actPlayerRef.current} ganhou!`
    }

    setTimeout(() => {
      modal.style.display = 'none'
      reset();
    }, 1500);

  }

  function reset(){
    const boxes:NodeListOf<HTMLElement> = document.querySelectorAll('.box')

    boxes.forEach((item:HTMLElement)=>{
      item.innerHTML = ''
    })

    setActPlayer('x');
    movesRef.current = 0
  }


  return (
    <div className="text-center mt-1.5 w-full">
        <h1 className='text-3xl uppercase'>Jogo da Velha</h1>
        <div id='options' className={`${isPlaying? 'hidden' : 'flex'} justify-center my-2 mx-auto gap-4 `}>
            <button onClick={()=>{startGame('multiplayer')}} className="two_players  rounded-md cursor-pointer text-gray bg-yellow px-4 py-2 text-lg">2 Jogadores</button>
            <button onClick={()=>{startGame('IA')}} className="IA  rounded-md cursor-pointer text-gray bg-yellow px-4 py-2 text-lg">Contra IA</button>
        </div>

        <div id='game' className={`${isPlaying? 'block' : 'hidden'} mt-2 font-light`}>
            <div className="justify-center flex">
                <div onClick={(e)=>{doMove(e)}} className="box border-2 text-[5em] border-gray w-31.25 h-31.25 cursor-pointer flex justify-center items-center border-t-0 border-l-0"></div>
                <div onClick={(e)=>{doMove(e)}} className="box border-2 text-[5em] border-gray w-31.25 h-31.25 cursor-pointer flex justify-center items-center border-t-0"></div>
                <div onClick={(e)=>{doMove(e)}} className="box border-2 text-[5em] border-gray w-31.25 h-31.25 cursor-pointer flex justify-center items-center border-t-0 border-r-0"></div>
            </div>
            <div className="justify-center flex">
                <div onClick={(e)=>{doMove(e)}} className="box border-2 text-[5em] border-gray w-31.25 h-31.25 cursor-pointer flex justify-center items-center border-l-0"></div>
                <div onClick={(e)=>{doMove(e)}} className="box border-2 text-[5em] border-gray w-31.25 h-31.25 cursor-pointer flex justify-center items-center"></div>
                <div onClick={(e)=>{doMove(e)}} className="box border-2 text-[5em] border-gray w-31.25 h-31.25 cursor-pointer flex justify-center items-center border-r-0"></div>
            </div>
            <div className="justify-center flex">
                <div onClick={(e)=>{doMove(e)}} className="box border-2 text-[5em] border-gray w-31.25 h-31.25 cursor-pointer flex justify-center items-center border-b-0 border-l-0"></div>
                <div onClick={(e)=>{doMove(e)}} className="box border-2 text-[5em] border-gray w-31.25 h-31.25 cursor-pointer flex justify-center items-center border-b-0"></div>
                <div onClick={(e)=>{doMove(e)}} className="box border-2 text-[5em] border-gray w-31.25 h-31.25 cursor-pointer flex justify-center items-center border-b-0 border-r-0"></div>
            </div>
        </div>

        <div id="placar" className={`${isPlaying? 'flex' : 'hidden'} my-1 mx-auto justify-end text-3xl pl-2 gap-4 pr-12`}>
            <div className="flex">
                <span className="text-red-800">X: </span>
                <span id="x_points">{xPoints}</span>
            </div>
            <div className="flex">
                <span className="text-green-800">O: </span>
                <span id="o_points">{oPoints}</span>
            </div>
        </div>

        <div id="modal" className="border-3 border-gray absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg w-125 h-50 justify-center items-center text-2xl uppercase hidden">
            <span id="winning_text"></span>
        </div>
    </div>
  )
}

export default Page