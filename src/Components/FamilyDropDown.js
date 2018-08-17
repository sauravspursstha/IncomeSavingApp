import React from 'react';
import {family} from '../family';

const FamilyDropDown = ({selectChange}) => {
    
    const allfamily = family.map((fam, i)=> <option key={i} value={family[i].income}>{family[i].name}</option>);

    return (
    
        <div className="form-row">
        <div className="form-group col-md-8">
          <label htmlFor="inputfamily">Family</label>
          
          <select id="inputState" className="form-control" onChange={selectChange}>
          <option value="0">Select</option>
            {allfamily}
          </select>
        </div>
       </div>
 
    );
}


export default FamilyDropDown; 