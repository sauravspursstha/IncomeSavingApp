import React from 'react';


const FamilyMemberDropDown = ({selectChange}) => {
    
    return (
    
        <div className="form-row">
        <div className="form-group col-md-8">
          <label htmlFor="inputState">Number of Family Members</label>
          
          <select id="inputState" className="form-control" onChange={selectChange}>
            <option value="">Select</option>
            <option>2 person</option>
            <option>More than 2 person</option>
          </select>
        </div>
        </div>
 
    );
}


export default FamilyMemberDropDown; 