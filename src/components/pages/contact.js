import React from 'react';
 
const Contact = () => {
    return (
        <div className='contacts'>            
            <p className='mail-contact'>If you require any further information, please <a href="mailto:mamrakhova@gmail.com" className='mail'>mail me</a> </p>
            <p>also</p>
            <p className='social'>My social-media links:</p>
            <div className='social-media'>
                <a href='https://www.linkedin.com/in/maryna-amrakhova-a81b10177/' className='social-links'> LinkedIn</a>
                <a href='https://github.com/Maryna-Amrakhova?tab=repositories' className='social-links'> GitHub</a>
                <a href='skype:seagull800' className='social-links'> Skype</a>
            </div>
        </div>
        
    );
};
 
export default Contact;