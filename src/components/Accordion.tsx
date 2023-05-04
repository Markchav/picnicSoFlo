import React, {Dispatch, SetStateAction,useRef, useEffect } from 'react'
import { FaPlus, FaMinus } from 'react-icons/fa'

type Props = {
    question:string,
    answer:string,
    turn:boolean[],
    setTurn:Dispatch<SetStateAction<boolean[]>>,
    idx:number
}



export default function Accordion({question,answer,turn,setTurn,idx}: Props) {

    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(()=> {
        if(contentRef.current) {
            contentRef.current.style.maxHeight = turn![idx] ? `${contentRef.current.scrollHeight}px` : '0px'
        }
    }, [contentRef, turn, idx])

    const toggleAccordion= ()=> {
        let newTurn = [...turn!]
        newTurn[idx] = !newTurn[idx]
        setTurn!(newTurn)
    }


  return (
    <div className='flex flex-col items-center justify-center w-full px-2 text-lg pt-4 lg:text-base'>
        <button onClick={toggleAccordion} className={`bg-transparent px-5 shadow cursor-pointer w-full h-full ${turn![idx]}`}>
            <div className='py-3'>
                <div className='flex items-center justify-between h-14 text-left'>
                    <span className='ml-2 font-medium lg:font-semibold lg:text-lg text-sm text-black'>{question}</span>
                    <div>
                        {turn![idx] ? <FaMinus width={20} height={20}/> :
                            <FaPlus width={20} height={20}/>}
                    </div>
                </div>
                <div ref={contentRef} className='mx-4 overflow-hidden text-left transition-all duration-500 h-full'>
                    <p className='py-1 font-normal leading-normal text-justify whitespace-pre-line text-xs lg:text-lg text-gray-500'>
                        {answer}
                    </p>
                </div>
            </div>
        </button>
    </div>
  )
}