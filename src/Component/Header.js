import React from "react";
import Fab from '@mui/material/Fab';

function Header(props) {
    const {onChangeHtml,onChangeCss,onChangeJs}=props;

    function onReset(value){
      onChangeHtml('');
      onChangeCss('');
      onChangeJs('');
    }
    return (
        <div className="heading">
            <div></div>
                <i className='fa fa-code logo' style={{fontSize:"1.7rem"}} ><span className="text"> Code Editor</span></i>  
               
                <Fab 
                className="logo"
                onClick={onReset} 
                 style={{backgroundColor:"white"}}>
                <i className='fa fa-sync' style={{fontSize:"20px"}} />
                 </Fab>   
               
        </div>
    )
}
export default Header;

