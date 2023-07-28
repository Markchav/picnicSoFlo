"use client";
import React, { useState } from 'react'

type ContactFields = {
  [key: string]: string | undefined,
  fullname:string|undefined,
  email: string| undefined,
  subject:string | undefined,
  message: string|undefined
}
type ErrorField = {
  fullname: boolean,
  email:boolean,
  subject:boolean,
  message:boolean
 }
export default function ContactForm() {

  const initialContactState : ContactFields = {
    fullname:'',
    email:'',
    subject:'',
    message:''
  }

  const initialErrorState: ErrorField = {
    fullname:false,
    email:false,
    subject:false,
    message:false
  }

const [dataSend, setDataSend] = useState<ContactFields>(initialContactState);
const [error, setError] = useState<ErrorField>(initialErrorState);
const[status, setStatus] = useState<Boolean>(false);
const[success, setSuccess] = useState<Boolean>(false);
const[result, setResult] = useState('');

const handleSubmit = async(e:any)=> {
  e.preventDefault();

  setError(initialErrorState);
  let hasErr = false;
  await Object.keys(initialErrorState).map((err)=>{
    if(dataSend[err] == "" || dataSend[err] == undefined){
      setError({...error, [err]:true});
      hasErr=true
    }
  });
  
  if (hasErr) return;

  setStatus(true);

  const response = await fetch("/api/contacts/contact", {
    method:"POST",
    body: JSON.stringify(dataSend)
  });

  const delay =(ms:number)=> new Promise(
    resolve => setTimeout(resolve,ms)
  );


const data = await response.json();
setResult(data.message);
setSuccess(true);
setStatus(false);
setDataSend(initialContactState);
setError(initialErrorState);

await delay(7000);
setSuccess(false);
}

  return (
    <div className='max-w-[1240px] m-auto p-4 '>
    <form className='max-w-[600px] m-auto'>
        <div className=' grid grid-cols-2 gap-2'>

          {/* Full Name Field */}
        <input type='text'
        value={dataSend.fullname ?? ''}
        onBlur={()=> setError({...error, fullname:true})}
        onChange={(e)=>setDataSend({...dataSend, fullname:e.target.value})}
        required
        placeholder='Full Name'
        className='border shadow-md p-3' />
        {error.fullname && !dataSend.fullname && <span className='mx-6 my-2 text-pink-500 text-sm'>Please write your fullname</span>}

        {/* Email Field */}
        <input type='email'
        value={dataSend.email ?? ''}
        onBlur={()=>setError({...error,email:true})}
        onChange={(e)=>setDataSend({...dataSend,email:e.target.value})}
        required
        placeholder='Email Address'
        className='border shadow-md p-3' 
        />
        {error.email && (!dataSend.email || !/\S+@\S+\S+\.\S+/.test(dataSend.email)) && <span className='mx-6 my-2 text-pink-500 text-sm'>Please write a valid email</span>}
        </div>

        {/* Subject Field */}
        <input type='text'
        value={dataSend.subject ?? ''}
        onBlur={()=> setError({...error,subject:true})}
        onChange={(e)=>setDataSend({...dataSend,subject:e.target.value})}
        required
        placeholder='Subject'
        className='border shadow-md p-3 w-full my-2' />
        {error.subject && !dataSend.subject && <span className='mx-6 my-2 text-pink-500 text-sm'>Please write a subject for your topic of discussion</span>}

        {/* Message Field */}
        <textarea
        value={dataSend.message ?? ''}
        onBlur={()=> setError({...error,message:true})}
        onChange={(e)=>setDataSend({...dataSend,message:e.target.value})}
        required 
        rows={10} cols={30} 
        className=' border shadow-md p-3 w-full'
        placeholder='Message'/>
        {error.message && !dataSend.message && <span className='mx-6 my-2 text-pink-500 text-sm'>Please write a message</span>}

        <button onClick={handleSubmit} type='submit' className="relative p-3 w-full overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group">
        <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-[#d6b0a3] group-hover:w-full ease"></span>
        <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-[#d6b0a3] group-hover:w-full ease"></span>
        <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-[#d6b0a3] group-hover:h-full ease"></span>
        <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-[#d6b0a3] group-hover:h-full ease"></span>
        <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-[#d6b0a3] opacity-0 group-hover:opacity-100"></span>
        <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">Submit</span>
        </button>

        {status && <div className='my-8 text-center text-xl transition ease-in-out duration-300'>Sending...</div>}
        {success && <div className={`${success ?"text-sky-500" : "text-pink-500"} my-8 text-center text-xl`}>{result}</div>}

    </form>
    </div>
)
}