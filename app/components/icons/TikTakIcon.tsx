"use client"

import './animations.css'

type Props = {
    mouseHandler:boolean
}


const TikTakIcon = ({mouseHandler}:Props) => {

    

  return (
    <div 
    
    className=" w-25 h-25  grid grid-cols-3 relative overflow-hidden">
        
        <div style={{animationName:(mouseHandler)?'FadeLine':''}} className='absolute w-[120%] [animation-delay:800ms] h-1 bg-red-600 rounded-full rotate-45 -translate-1/2 top-[-45%] left-[-45%] z-10 line'></div>

            <div className="box overflow-hidden  text-center border border-t-0 border-l-0 relative ">
                <div style={{animationName:(mouseHandler)?'XFadeLeft':''}} className="xLeft   [animation-delay:200ms] w-0.75 h-6 bg-blue-700 absolute rotate-45 left-[130%] top-[-30%] -translate-1/2 rounded-full"></div>
                <div style={{animationName:(mouseHandler)?'XFadeRight':''}} className="xRight   [animation-delay:200ms] w-0.75 h-6 bg-blue-700 absolute -rotate-45 left-[-30%] top-[-30%] -translate-1/2 rounded-full"></div>
            </div>
            <div className="box text-center border border-t-0 relative">
            <svg className='absolute top-1/2 left-1/2 -translate-1/2 ' width="23" height="23" viewBox="0 0 120 120">
                <circle
                    style={{animationName:(mouseHandler)?'drawCircle':''}}
                    className="circle -rotate-90 origin-center"
                    cx="60"
                    cy="60"
                    r="50"
                />
            </svg>
            </div>
            <div className="box overflow-hidden text-center border border-t-0 border-r-0 relative">
                <div style={{animationName:(mouseHandler)?'XFadeLeft':''}} className="xLeft  [animation-delay:400ms] w-0.75 h-6 bg-blue-700 absolute rotate-45 left-[130%] top-[-30%] -translate-1/2 rounded-full"></div>
                <div style={{animationName:(mouseHandler)?'XFadeRight':''}} className="xRight  [animation-delay:400ms] w-0.75 h-6 bg-blue-700 absolute -rotate-45 left-[-30%] top-[-30%] -translate-1/2 rounded-full "></div>
            </div>
        
        
            <div className="box text-center border border-l-0 relative">
                <svg className='absolute top-1/2 left-1/2 -translate-1/2' width="23" height="23" viewBox="0 0 120 120">
                <circle
                    style={{animationName:(mouseHandler)?'drawCircle':''}}
                    className="circle -rotate-90 origin-center [animation-delay:300ms] "
                    cx="60"
                    cy="60"
                    r="50"
                />
                </svg>
            </div>
            <div className="box overflow-hidden text-center border relative">
                <div style={{animationName:(mouseHandler)?'XFadeLeft':''}} className="xLeft  w-0.75 h-6 bg-blue-700 absolute rotate-45 left-[130%] top-[-30%] -translate-1/2 rounded-full"></div>
                <div style={{animationName:(mouseHandler)?'XFadeRight':''}} className="xRight  w-0.75 h-6 bg-blue-700 absolute -rotate-45 left-[-30%] top-[-30%] -translate-1/2 rounded-full "></div>
            </div>
            <div className="box text-center border border-r-0 relative">
                <svg className='absolute top-1/2 left-1/2 -translate-1/2' width="23" height="23" viewBox="0 0 120 120">
                <circle
                    style={{animationName:(mouseHandler)?'drawCircle':''}}
                    className="circle -rotate-90 origin-center [animation-delay:600ms]"
                    cx="60"
                    cy="60"
                    r="50"
                />
                </svg>
            </div>
        
        
            <div className="box text-center border border-b-0 border-l-0"></div>
            <div className="box text-center border border-b-0"></div>
            <div className="box overflow-hidden text-center border border-b-0 border-r-0 relative">
                <div style={{animationName:(mouseHandler)?'XFadeLeft':''}} className="xLeft  [animation-delay:600ms]  w-0.75 h-6 bg-blue-700 absolute rotate-45 left-[130%] top-[-30%] -translate-1/2 rounded-full"></div>
                <div style={{animationName:(mouseHandler)?'XFadeRight':''}} className="xRight  [animation-delay:600ms] w-0.75 h-6 bg-blue-700 absolute -rotate-45 left-[-30%] top-[-30%] -translate-1/2 rounded-full "></div>
            </div>
        
    </div>
  )
}

export default TikTakIcon