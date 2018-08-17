
import React from 'react';


const Result = (props) => {
    const {income,noOFMember,result} = props;
    return (
    
  <div className="form-row">
  <div className="form-group col-md-8">
  <div style={{fontWeight:"bold"}}> The income of family is Rs.{income}
  <br/>
  Saving when {noOFMember} in family : Rs.{result}
  <br/>
  Yearly Saving :{result * 12}
</div>
</div>
</div>
    );
}
export default Result;