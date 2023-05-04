"use client";

import React,{useState} from 'react'


type BookingField = {
    [key:string] : string | undefined, 
    fullname:string |undefined,
    email: string | undefined,
    tel: string | undefined,
    date: string | undefined,
    time: string | undefined,
    duration: string | undefined,
    style: string | undefined,
    attendance: string | undefined,
    location: string | undefined,
}

type ErrorBookingField = {
    fullname:boolean,
    email: boolean,
    tel: boolean,
    date: boolean,
    time: boolean,
    duration: boolean,
    style: boolean,
    attendance: boolean,
    location: boolean,
}

export default function BookNowForm() {
    
    const initialBookingState:BookingField = {
        fullname: '',
        email:'',
        tel:'',
        date:'',
        time:'',
        duration:'',
        style:'',
        attendance:'',
        location:'',
    }

    const initialErrorState:ErrorBookingField = {
        fullname: false,
        email:false,
        tel:false,
        date:false,
        time:false,
        duration:false,
        style:false,
        attendance:false,
        location:false,
    }

    const initialCheckedState: React.SetStateAction<any[]> = [];

    const [dataSend,setDataSend]= useState<BookingField>(initialBookingState);

    const [checked, setChecked] = useState(initialCheckedState);

    const handleCheckBox = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name } = e.target;
        if (checked.find((item) => item === name)) {
            setChecked(checked.filter((item) => item !== name));
        } else {
            setChecked([...checked, name]);
        }
    };

    const [other,setOther] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const [error,setError]= useState<ErrorBookingField>(initialErrorState);
    const[status, setStatus] = useState<Boolean>(false);
    const[success, setSuccess] = useState<Boolean>(false);
    const[result, setResult] = useState('');

    const handleSubmit = async(e:any)=> {
        e.preventDefault();

        setError(initialErrorState);

        let hasErr = false;

        await Object.keys(initialErrorState).map((err)=> {
            if(dataSend[err] == "" || dataSend[err] == undefined) {
            setError({...error, [err]:true});
            hasErr=true
            }
        });

        if (hasErr) return;

        setStatus(true);
        const newdata = {
            fullname: dataSend.fullname,
            email: dataSend.email,
            tel:dataSend.tel,
            date:dataSend.date,
            time:dataSend.time,
            duration:dataSend.duration,
            style:dataSend.style,
            attendance:dataSend.attendance,
            location:dataSend.location,
            checked:checked,
            other:other,
            message: message
        }


        const response = await fetch("/api/bookings/booking", {
            method:"POST",
            body: JSON.stringify(newdata)
        });

        const delay =(ms:number)=> new Promise(
        resolve => setTimeout(resolve,ms)
        );

        const data = await response.json();
        setResult(data.message);
        setSuccess(true);
        setStatus(false);
        setDataSend(initialBookingState);
        setChecked(initialCheckedState);
        setMessage('')
        setOther('')
        setError(initialErrorState);

        await delay(7000);
        setSuccess(false);
    }

return (
    <div className="mt-8">
        <form>
            <div className="shadow shadow-slate-800 overflow-hidden sm:rounded-md">
            <div className="px-4 py-5 bg-peach sm:p-6">
                <div className="grid grid-cols-6 gap-6">
                  {/* Full Name Field */}
                <div className="col-span-6 sm:col-span-3">
                    <label  className="block text-sm font-medium text-black">Full Name</label>
                    <input type="text" value={dataSend.fullname ?? ''} 
                    onBlur={() =>setError({...error, fullname:true})}
                    onChange={(e)=> setDataSend({...dataSend, fullname:e.target.value})}
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-md sm:text-sm border-gray-300 rounded-md p-3" required/>
                    {error.fullname && !dataSend.fullname && <span className='mx-6 my-2 text-pink-500 text-sm'>Please write your fullname</span>}
                </div>

                  {/* Email Field */}
                <div className="col-span-6 sm:col-span-3">
                    <label className="block text-sm font-medium text-black">Email Address</label>
                    <input type="text" value={dataSend.email ?? ''} 
                    onBlur={()=> setError({...error, email:true})}
                    onChange={(e)=> setDataSend({...dataSend, email:e.target.value})}
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-md sm:text-sm border-gray-300 rounded-md p-3" required/>
                    {error.email && (!dataSend.email || !/\S+@\S+\S+\.\S+/.test(dataSend.email)) && <span className='mx-6 my-2 text-pink-500 text-sm'>Please write a valid email</span>}
                </div>

                {/* Phone Number Field*/}
                <div className="col-span-6 sm:col-span-3">
                    <label  className="block text-sm font-medium text-black">Phone number</label>
                    <input type="tel" value={dataSend.tel ?? ''} 
                    onBlur={()=> setError({...error, tel:true})}
                    onChange={(e)=> setDataSend({...dataSend, tel:e.target.value})}
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-md sm:text-sm border-gray-300 rounded-md p-3" required/>
                    {error.tel && !dataSend.tel && <span className='mx-6 my-2 text-pink-500 text-sm'>Please write your phone number</span>}
                </div>

                  {/* Date Field */}
                <div className="col-span-6 sm:col-span-3">
                    <label  className="block text-sm font-medium text-black">Date</label>
                    <input type="date" value={dataSend.date ?? ''} 
                    onBlur={()=> setError({...error, date:true})}
                    onChange={(e)=> setDataSend({...dataSend, date:e.target.value})}
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-md sm:text-sm border-gray-300 rounded-md p-3" required/>
                    {error.date && !dataSend.date && <span className='mx-6 my-2 text-pink-500 text-sm'>Please give a date for booking</span>}
                </div>

                  {/* Time Field */}
                <div className="col-span-6 sm:col-span-3">
                    <label  className="block text-sm font-medium text-black">Preferred Time</label>
                    <input type='time' value={dataSend.time ?? ''} 
                    onBlur={()=> setError({...error, time:true})}
                    onChange={(e)=> setDataSend({...dataSend, time:e.target.value})}
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-md sm:text-sm border-gray-300 rounded-md p-3" required/>
                    {error.time && !dataSend.time && <span className='mx-6 my-2 text-pink-500 text-sm'>Please give us time for booking date</span>}
                </div>

                {/* Hours to reserve Field dropdown*/}
                <div className="col-span-6 sm:col-span-3">
                    <label  className="block text-sm font-medium text-black">Hours of Picnic</label>
                    <select value={dataSend.duration ?? ''} 
                    onBlur={()=> setError({...error, duration:true})}
                    onChange={(e)=> setDataSend({...dataSend, duration:e.target.value})} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-md sm:text-sm border-gray-300 rounded-md p-3">
            <option value=""></option>
            <option value="2 hours">2</option>
            <option value="2 1/2 hours">2 1/2(+$30)</option>
            <option value="3 hours">3 (+$60)</option>
                    </select>
                    {error.duration && !dataSend.duration && <span className='mx-6 my-2 text-pink-500 text-sm'>Please tell us how long you plan to stay</span>}
                </div>

                {/* Picnic Selection dropdown*/}
                <div className="col-span-6 sm:col-span-3">
                    <label  className="block text-sm font-medium text-black">Choose Your Picnic Style</label>
                    <select value={dataSend.style ?? ''} 
                    onBlur={()=> setError({...error, style:true})}
                    onChange={(e)=> setDataSend({...dataSend, style:e.target.value})} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-md sm:text-sm border-gray-300 rounded-md p-3">
            <option value=""></option>
            <option value="Classic Boho">Classic Boho $100</option>
            <option value="Pretty in Pink">Pretty in Pink $120</option>
            <option value="Love is in the Air">Love is in the Air $120</option>
            <option value="Green Dream">Green Dream $120</option>
            <option value="Spring Pastels">Spring Pastels $120</option>
                    </select>
                    {error.style && !dataSend.style && <span className='mx-6 my-2 text-pink-500 text-sm'>Please select a style of Picnic</span>}
                </div>

                {/* Attendance Field dropdown*/}
                <div className="col-span-6 sm:col-span-3">
                    <label  className="block text-sm font-medium text-black"># of Attendance</label>
                    <select  value={dataSend.attendance ?? ''}
                    onBlur={()=> setError({...error, attendance:true})}
                    onChange={(e)=> setDataSend({...dataSend, attendance:e.target.value})} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-md sm:text-sm border-gray-300 rounded-md p-3">
            <option value=""></option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
            <option value='6'>6</option>
                    </select>
                    {error.attendance && !dataSend.attendance && <span className='mx-6 my-2 text-pink-500 text-sm'>Please tell us how many are attending</span>}
                </div>
                
                {/* Location Field dropdown*/}
                <div className="col-span-6 sm:col-span-3">
                    <label  className="block text-sm font-medium text-black">Location</label>
                    <input type='text' value={dataSend.location ?? ''} 
                    onBlur={()=> setError({...error, location:true})}
                    onChange={(e)=> setDataSend({...dataSend, location:e.target.value})}
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-md sm:text-sm border-gray-300 rounded-md p-3" required/>
                    {error.location && !dataSend.location && <span className='mx-6 my-2 text-pink-500 text-sm'>Please give us location</span>}
                </div>

                {/* Extras Field checkbox with OTHERS*/}
                <div className="col-span-6 sm:col-span-3">
                    <label className="block text-sm font-medium text-black">Would you like anything extra?</label>
                    
                    <label className='text-sm font-medium text-black'>
                    <input type='checkbox' name='Charcuterie Board' checked={checked.find((item)=> item === "Charcuterie Board") || ''}
                    onChange={(e)=> handleCheckBox(e)}  className=' p-3 m-1'/>
                    Charcuterie Board $15-$40
                    </label>
                    <br />

                    <label className='text-sm font-medium text-black'>
                    <input type='checkbox'  name='Speaker' checked={checked.find((item)=> item === "Speaker") || ''}
                    onChange={(e)=>  handleCheckBox(e)}  className=' p-3 m-1'/>
                    Speaker (upon request)
                    </label>
                    <br />

                    <label className='text-sm font-medium text-black'>
                    <input type='checkbox'  name='Cake'  checked={checked.find((item)=> item === "Cake") || ''}
                    onChange={(e)=>  handleCheckBox(e)}  className=' p-3 m-1'/>
                    Mini Cake $20
                    </label>
                    <br />

                    <label className='text-sm font-medium text-black'>
                    <input type='checkbox'  name='Paintings'  checked={checked.find((item)=> item === "Paintings") || ''}
                    onChange={(e)=>  handleCheckBox(e)}  className=' p-3 m-1'/>
                    Paintings (prices may vary)
                    </label>

                    <br />
                    
                    <label className='text-sm font-medium text-black'>
                    <input type='checkbox'  name='Umbrella' checked={checked.find((item)=> item === "Umbrella") || ''}
                    onChange={(e)=> handleCheckBox(e)}  className=' p-3 m-1'/>
                    Umbrella Rental $20
                    </label>
                    
                    <input type='text' value={other ?? ''} 
                    onChange={(e)=> setOther(e.target.value)} placeholder='Other' className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-md sm:text-sm border-gray-300 rounded-md p-3"/>
                    
                </div>

                </div>

                  {/* Message area */}
            <label className='className="block text-sm font-medium text-gray-700"'>Message</label>
            <textarea value={message ?? ''} 
                    // onBlur={()=> setError({...error, message:true})}
                    onChange={(e)=> setMessage(e.target.value)} 
                    placeholder='Any additional questions or suggestions?' 
                    className='border shadow-md p-3 block w-full' />

            <button onClick={handleSubmit} type='submit' className="relative p-3 w-full overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group">
        <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-[#d6b0a3] group-hover:w-full ease"></span>
        <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-[#d6b0a3] group-hover:w-full ease"></span>
        <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-[#d6b0a3] group-hover:h-full ease"></span>
        <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-[#d6b0a3] group-hover:h-full ease"></span>
        <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-[#d6b0a3] opacity-0 group-hover:opacity-100"></span>
        <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">Submit Booking</span>
        </button>

        {status && <div className='my-8 text-center text-xl transition ease-in-out duration-300'>Sending...</div>}
        {success && <div className={`${success ?"text-sky-500" : "text-pink-500"} my-8 text-center text-xl`}>{result}</div>}
                </div>
                </div>
                </form>
    </div>
)
}