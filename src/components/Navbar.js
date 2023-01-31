import React from 'react';
function Navbar() {
    return (
      <nav className='navContainer'>
        <div className='navLeft'>
            <img src='DPORTLOGO.png'alt='LOGO' className='navImg' style={{width:'100px', height:'100px'}}></img>
        <span  className='navBrand' style={{color:'rgb(30, 30, 73)', }}> D </span>
        <a href='/home' className='navBrand' style={{color:'red', fontWeight: '800', textDecoration:'none'}}> + </a>
        <span className='navBrand' style={{color:'rgb(211, 144, 0)'}}> P </span>
        <span className='navBrand' style={{color:'rgb(211, 144, 0)'}}> O </span>
        <span className='navBrand' style={{color:'rgb(211, 144, 0)'}}> R </span>
        <span className='navBrand' style={{color:'rgb(211, 144, 0)'}}> T </span>
        
        </div>

        <div className='navRight'>
         <a   className='navLinks' href='/home'> <div id='navHome'></div>Home </a>
        <a   className='navLinks' href='/contact'> <div id='navCont'></div> Contact </a>
        <a   className='navLinks' href='/portfolio'><div id='navPort'></div> Portfolio</a>
        <a  className='navLinks' href='/resume'>  <div  id='navResume'></div>Resume </a>
        </div>
      </nav>
    );
}
export default Navbar;