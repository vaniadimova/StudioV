import React, { useState, useCallback } from 'react';
import Image from 'next/image';
import axios from 'axios';

const ContactUs: React.FC = () => {
    const [status, setStatus] = useState ({
        submitted: false,
        submitting: false,
        info: { error: false, msg: null}
    })
    const [inputs, setInputs] = useState ({
        companyName: '',
        email: '',
        message: ''
    })

    const handleOnChange = useCallback(e => {
        e.persist()
        setInputs((prev) => ({
            ...prev,
            [e.target.id]: e.target.value
    }))
        setStatus({
            submitted: false,
            submitting: false,
            info: { error: false, msg: null}
        })
    }, [])

    const handleServerResponse = useCallback((ok: any, msg: any) => {
        if (ok) {
            setStatus({
                submitted: true,
                submitting: false,
                info: { error: false, msg: msg}
            })
        setInputs({
            companyName: '',
            email: '',
            message: ''
        })
    } else {
        setStatus({
            submitted: false,
            submitting: false,
            info: { error: true, msg: msg}
        })
    }       
}, [])

    const handleSubmit = useCallback( (e) => {
        e.preventDefault()
        setStatus(prevStatus => ({ ...prevStatus, submitting: true }))
        axios ({
            method: 'POST',
            url: process.env.NEXT_PUBLIC_CONTACT_FORM_ENDPOINT_URL ,
            data: inputs
        }).then (_response => {
            handleServerResponse(true,  'Thank you, your message has been sent successfully!')
        })
    }, [inputs, handleServerResponse])

    return (
        <div className='flex flex-col justify-center min-h-screen pt-10 text-white bg-black'>
            <div className='flex flex-col items-center justify-center flex-1 pt-10 lg:pt-6'>
            <div className='pb-10'>
                <Image src="/assets/logo-w.png" alt="logo" width={40} height={40} />
            </div>
            <h2 className='text-4xl font-bold '>Contact Us</h2>
            <form onSubmit={handleSubmit} 
            className='flex flex-col gap-4 mt-16 px-10 lg:mt-20 min-w-full lg:min-w-[500px]'>
                {status.info.error && (
                    <div className='px-4 py-3 text-red-600 bg-red-100 border border-red-400 rounded rgelative' 
                    role="alert">
                    <strong className='font-bold'>Error</strong>: {'  '}
                    <span className='block sm:inline'>{status.info.msg}</span>
                    </div>
     )}
     {status.submitted ? (
         <div className='relative px-4 py-3 text-xl font-bold rounded tetx-white'
         role="alert">
         Your message has been successfully sent. We will contact you  very soon.</div>
     ) : (
<>
<input id="companyName" name="companyName" required maxLength={128}  type="text" placeholder="Company Name"
className='px-8 py-2 text-white bg-black border-2 border-white outline-none rounded-3xl'
onChange={handleOnChange} 
value={inputs.companyName} 
/>
<input id="email" name="email" required maxLength={128} type="email" placeholder="Email" 
className='px-8 py-2 text-white bg-black border-2 border-white outline-none rounded-3xl'
onChange={handleOnChange} 
value={inputs.email} 
/>  
<textarea id='message' name='message'required maxLength={1048576} placeholder="Additional Information"
 className='bg-black text-white outline-none border-2 border-white rounded-3xl font-bold py-6 px-8 min-h-[16em]'
 onChange={handleOnChange} 
value={inputs.message} 
 ></textarea> 
<div className='mt-10 text-center '>
<button  
className='px-8 py-2 text-black bg-white rounded-3xl ' 
type='submit'>
   {!status.submitting ?  !status.submitted ? 'Submit' : 'Submitted' : 'Submitting...'}
    </button>
</div>
</>
)}
</form>
</div>
</div>
    )
}

export default ContactUs;