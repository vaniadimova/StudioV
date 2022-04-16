import React from 'react';
import Member from './member';

const AboutUs: React.FC = () => {
return (
    <section className={'flex flex-col bg-white py-20 text-3xl md:text-4xl'}>
        <div className='container mx-auto px-11'>
            <p className='leading-tight max-w-5xl mx-auto text-4xl  tracking-tight '>
                <strong>We can build your apps and create amazing content </strong> 
                Our team of experts can create the best user  experience for your business.
            </p>
        </div>
        <div className='container mx-auto px-11 text-center mt-28 '>
            <h2>Our Team</h2>
            <div className='mt-2'>the &ldquo;spec-ops&rdquo;</div>
            <div className='mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 lg:gap-20'>
                <Member 
                id="marc"
                 name='Marc' 
                 socialId='@mrousavy' 
                 link='https://github.com'/>
                <Member 
                id="szymon"
                 name='Szymon' 
                 socialId='@szymon2000' 
                 link='https://github.com'/>
                <Member 
                id="thomas"
                 name='Thomas' 
                 socialId='@thomas-m' 
                 link='https://github.com'/>
                <Member 
                id="akinn"
                 name='Akinn' 
                 socialId='@akinncar' 
                 link='https://github.com'/>
                <Member 
                id="christoph"
                 name='Christoph' 
                 socialId='@christoph' 
                 link='https://github.com'/>
                <Member 
                id="janic"
                 name='Janic' 
                 socialId='@janicudplessis' 
                 link='https://github.com'/>
                <Member 
                id="mo"
                 name='Mo' 
                 socialId='@gorhom' 
                 link='https://github.com'/>
                <Member 
                id="eric"
                 name='Eric' 
                 socialId='@ericvicenti' 
                 link='https://github.com'/>
                
            </div>
        </div>
    </section>
)
}

export default AboutUs;