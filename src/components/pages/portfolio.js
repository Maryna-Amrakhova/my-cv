import React from 'react';
import {Project1, Project2, Project3, Project4, Project5, Project6, Project7, Project8 } from './projects';
 
const Portfolio = () => {
    return (
        <div className='title'>
            <div>
                <h2>My Projects on Github <span> /Frontent Developer/ </span></h2>
                <ul className='project-list'>
                    <li className='project-item'>
                        <a href='https://github.com/Maryna-Amrakhova?tab=repositories' className='project-link'>projects on Github</a>
                    </li>
                </ul>  
                <p>The last projects</p>                
                <img src={Project1} alt=""/>
                <img src={Project2} alt=""/>
                <img src={Project3} alt=""/>
                <img src={Project4} alt=""/>
            </div>
            <div>
                <h2>My Projects on Behance <span> /Web Designer/ </span></h2>
                <ul className='project-list'>
                    <li className='project-item'>
                        <a href='https://www.behance.net/seagull2309411' className='project-link'>projects on Behance</a>
                    </li>
                </ul>   
                <img src={Project5} alt=""/>
                <img src={Project6} alt=""/>
                <img src={Project7} alt=""/>
                <img src={Project8} alt=""/>
            </div>      
        </div>    
    );
};

export default Portfolio;