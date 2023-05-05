import Image from 'next/image'
import React, {Dispatch, SetStateAction } from 'react'
import { FaArrowCircleDown} from 'react-icons/fa'
import Accordion from './Accordion'

type Props = {
    idx:number,
    question:string,
    answer:string
}

interface LayoutProps {
    handleClick: React.MouseEventHandler<HTMLButtonElement>,
    isSomeActive: any,
    turn: boolean[],
    setTurn: Dispatch<SetStateAction<boolean[]>>,
    data: Props[]
}

export default function Layout({handleClick, isSomeActive, data, turn, setTurn}:LayoutProps) {
  return (
    <div className='items-center flex flex-col lg:w-7/12 lg:mt-7 w-full my-5 px-4'>
        <span className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-black sm:text-4xl text-center'>
            Frequently Asked Questions
        </span>
        <div className='flex items-center justify-between w-full mb-6 lg:justify-end '>
            <button onClick={handleClick} className='flex items-center mr-3 space-x-1 text-sm font-bold lg:text-base lg:space-x-2 py-2 px-4 bg-slate-50 shadow'>
                <span className="text-black min-w-fit text-">
                    {!isSomeActive ? 'Open All' : 'Close All'}
                </span>
                <div className={'relative transition-all ease-in-out duration-200' +(isSomeActive ? ' rotate-180':'rotate-0')} >
                    <FaArrowCircleDown  width={40} height={40}/>
                </div>
            </button>
        </div>
        {data.map((el,i)=> {
            return (
                <div className='w-full' key={"questions"+ i}>
                    <Accordion
                    question={el.question}
                    answer={el.answer}
                    turn={turn}
                    setTurn={setTurn}
                    idx={el.idx}
                    />
                </div>
            )
        })}
    </div>
  )
}