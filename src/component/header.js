import React from 'react';
import ReactDOM from 'react-dom';
import logo from './img/Truewave (1)-Photoroom.png';

import './body.css';
export default function Header(){
    return(
        <div className="header">
            <div className='tag-1'>
                <img src={logo}  className='logo-img'></img>
            </div>
            <div className='tag-2'>
                <div className='World-tag'>
                    <p className='bar'></p>
                    <a>World</a>
                </div>
                <div className='India-tag'>
                <p className='bar'></p>
                <a>India</a>
                </div>
                <div className='Movie-tag'>
                <p className='bar'></p>
                <a>Movie</a>
                </div>
                <div className='technology-tag'>
                <p className='bar'></p>
                <a>Technology</a>
                </div>
                <div className='ePaper-tag'>
                <p className='bar'></p>
                <a>ePaper</a>
                </div>
            </div>
            <br></br>
            <div className='tag-3'>
                <div className='option-1'>
                    <a className='sub-a-tag'>Science /</a>
                    <a  className='sub-a-tag'>Health /</a>
                    <a  className='sub-a-tag'>Media /</a>
                    <a  className='sub-a-tag'>Search </a>
                </div>
                <div className='option-2'>
                    <div className='freetrail'>
                        <button className='freetrail-btn'><b>Free Trail</b></button>
                        
                    </div>
                    <div className='Subs'>
                        <button className='subs-btn' ><b>Subscribe</b></button>
                    </div>
                    <div className='login'>
                        <button className='login-btn'><b>Login</b></button>
                    </div>
                    
                </div>
            </div>
            <div> <p className='para-dis'>helllo </p></div>
        </div>
        
    )
}