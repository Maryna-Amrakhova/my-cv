import React from 'react';
 
const Experience = () => {
    return (
        <div className='work-experience'>
            <h2>Work Experience</h2>
            <div>
                <p className='time-experience'>December 2019 - January 2023</p>
                <p className='place-experience'>Web designer | Freelance</p>
                <ul>
                    <li>project work on creating websites, creating landing pages, responsive layout (HTML / CSS, JS)</li>
                    <li>design and redesign of websites, landing pages, banners (Figma, Photoshop)</li>
                    <li>prototyping for websites, web, mobile applications (Edobe XD) </li>
                    <li>creating adaptive layouts, landing pages, filling with content, etc. (Figma, VS code)</li>
                </ul>
            </div>
            <div>
                <p className='time-experience'>February 2012  - July 2018</p>
                <p className='place-experience'>Head of Sales Insurance company | Kyiv</p>
                <ul>
                    <li>control and introduction of new products</li>
                    <li>monitoring compliance with company rules</li>
                    <li>experience and testing of the database in 1C</li>                    
                </ul>
            </div>
            <div className='detail-skills'>
                <div>
                    <h2>My Skills</h2>
                    <p className='place-experience'>Tech Skills</p>
                        <ul>
                            <li>HTML 5 / SCC3 / SAAS</li>
                            <li>basic JavaScript</li>
                            <li>knowledge React</li>
                            <li>basic Git</li>
                            <li>responsive layout</li>
                            <li>Figma, Photoshop, Adobe XD</li>
                        </ul>
                </div>
                <div>
                    <p className='place-experience'>Soft Skills</p>
                        <ul>
                            <li>passionate</li>
                            <li>responsible</li>
                            <li>ditail-oriented</li>
                            <li>time managment</li>
                            <li>communication</li>
                            <li>team-player</li>
                        </ul>
                </div>
                
            </div>
            <p className='place-experience'>Languages</p>
                <ul>
                    <li>Ukrainian - Native</li>
                    <li>English - Upper-Intermediate</li>                            
                </ul>
        </div>
    );
};
 
export default Experience;