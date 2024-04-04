import React from 'react';
import Member from './member';

const AboutUs: React.FC = () => {
return (
    <section className={'flex flex-col bg-white py-20 text-3xl md:text-4xl'}>
        <div className='container mx-auto px-11'>
            <p className='max-w-5xl mx-auto text-4xl leading-tight tracking-tight '>
                <strong>We can build fast blazing sites and create amazing content
                that will meet your needs. </strong> 
                Our team of experts can create the best user experience for your business.
            </p>
        </div>
        <div className='container mx-auto text-center px-11 mt-28 '>
            <h2>Da Team</h2>
            <div className='mt-2'>the &ldquo;spec-ops&rdquo;</div>
            <div className='grid grid-cols-2 gap-6 mt-10 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 lg:gap-20'>
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
                
                
            </div>
        </div>
    </section>
)
}

export default AboutUs;