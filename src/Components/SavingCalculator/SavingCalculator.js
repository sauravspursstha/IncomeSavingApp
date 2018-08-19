import React, { Component } from 'react';
import Button from '../Button';

class SavingCalulator extends Component{

    constructor(props)
    {
        super(props)
        this.state = {

            income : 0,
            numberOfFamilyMembers:0,
            result:0,
            savingPercent:'',
            error:''

        }
        
    }

    onClick = () => 
    {
        const {income,numberOfFamilyMembers} = this.state;
        console.log("Clicked");
        console.log(income,numberOfFamilyMembers);
        
        
        if(numberOfFamilyMembers >= 1 &&  numberOfFamilyMembers <= 2)
        {
          if(income >= 100000 && income <= 300000)
          {
            let saving = Math.round((income/100) * 10); 
            this.setState({result:saving,savingPercent:'10%'});
          }
          else if( income > 300000 && income <= 2000000)
          {
            let saving = Math.round((income/100) * 20); 
            this.setState({result:saving,savingPercent:'20%'});
                }
        
          else if( income > 2000000)
          {
            let saving = Math.round((income/100) * 40); 
            this.setState({result:saving,savingPercent:'40%'});
          }
          else if(income<100000)
          {
            this.setState({error:"Entered Salary Should be more than 1 lakh "});
          }
        
        
        }
        else if(numberOfFamilyMembers >2)
        {
          
          if(income >= 100000 && income <= 300000)
          {
            let saving = Math.round((income/100) * 15);
            this.setState({result:saving,savingPercent:'15%'});
          }
          else if( income > 300000 && income <= 2000000)
          {
            let saving = Math.round((income/100) * 25);
            this.setState({result:saving,savingPercent:'25%'});
                }
        
          else if( income > 2000000)
          {
            let saving = Math.round((income/100) * 50); 
            this.setState({result:saving,savingPercent:'50%'});
          }
          else if(income<100000)
          {
              this.setState({error:"Entered Salary Should be more than 1 lakh "});
          }
        
        }
    
    }
    
    render()
    {
        const {result,savingPercent,income} = this.state;
        return(
            <div>
            <div className="form-row">
            <div className="form-group col-md-8">
            <label htmlFor="inputfamily">Enter Family Income</label>
            <input className="form-control" placeholder="Enter Income" type="number" onChange={(event)=>{this.setState({income:event.target.value})}}/>
            </div>
            </div>

            <div className="form-row">
            <div className="form-group col-md-8">
            <label htmlFor="inputfamily">Number of Members</label>
            <input className="form-control" placeholder="Enter Family Member" type="number" onChange={(event)=>{this.setState({numberOfFamilyMembers:event.target.value})}}/>
            </div>
            </div>

            <Button onCalculate = {this.onClick}/>
            <div className="form-row">
            <div className="form-group col-md-8">
            <p style={{fontWeight:"bold"}}> 
             Total Saving :Rs.{result}  Saving Percent:{savingPercent}
            
            </p>
            <br/>
            <p style={{fontWeight:"bold",color:"red"}}> 
          
             {income<100000?this.state.error:null}
            </p>
            </div>
            </div>

            </div>
        )
    }
}

export default SavingCalulator;