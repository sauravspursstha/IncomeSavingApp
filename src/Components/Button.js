import React from 'react';


const Button = ({onCalculate}) => {
    
    return (
    
<div className="form-row">
<div className="form-group col-md-8">
<button type="submit" className="btn btn-primary" onClick = {onCalculate} >Calculate</button>
</div>
</div>
    );
}

export default Button;