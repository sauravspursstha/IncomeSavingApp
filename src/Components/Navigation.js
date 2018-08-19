import React from 'react';

const Navigation = ({onPageChange,hasClicked}) => {
    return (
    <div style={{width:"100%", height:"auto", paddingBottom:"15px",textAlign:"center"}}>
         <h1 style={{textAlign:"center"}} >Save Family Income</h1>
         {(!hasClicked)?
            <p style={{fontWeight:"bold",cursor:"pointer"}} onClick={()=>onPageChange('new') } > Next Page </p>
         :
         <p style={{fontWeight:"bold",cursor:"pointer"}} onClick={()=>onPageChange('old')} > Previous Page </p>
        
         }
         
         
    </div>
       
 
    );
}


export default Navigation; 

