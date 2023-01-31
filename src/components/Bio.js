import React from 'react';
function Bio({ onSubmit, isEditing }) {
    return (
        <div className='contactBase'> 
            <h2 className='contactH2'> Contact </h2>
        <form className="bioForm" onSubmit={onSubmit}>
            <label className='bioLabel'>
                Name
                <input className='bioInput' type="name" name="name" value="Enter Name" />
            </label>
            <hr style={{width:'25%'}}></hr>
            <label className='bioLabel'>
              Email  
                <input className='bioInput' type="email" name="email" value="Enter Email Address" /></label>
                <hr style={{width:'25%'}}></hr>
           
            <label className='bioLabel'>
               <p>  What it's about </p>
               <hr style={{width:'100%', marginBottom:'5px'}}></hr>
                <textarea className='bioInput2' type="comment" name="comment" value="Questions, Comments, Concerns?"  maxlength="3000" size="3000" style={{width:'300px', height:'300px'}}/>  <button className = "bioButton" type="submit">{isEditing } SEND </button>
            </label>
            
          
        </form></div>
    );
}
export default Bio;