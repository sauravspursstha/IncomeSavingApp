import React, { Component } from 'react';
import Navigation from '../Components/Navigation';
import FamilyDropDown from '../Components/FamilyDropDown';
import FamilyMemberDropDown from '../Components/FamilyMemberDropDown';
import Button from '../Components/Button';
import Result from '../Components/Result';
import SavingCalculator from '../Components/SavingCalculator/SavingCalculator'
import Particles from 'react-particles-js';

import './App.css';


const particlesOptions = {
  particles: {
    number:{
      value:10,
      density:{
        enable:true,
        value_area:800
      }
    }
  }
}

class App extends Component {

  constructor()
  {
    super()
    this.state = {
      numberofMemebers : '',
      income : 0,
      result : 0,
      route : 'old',
      hasClicked : false
    }
  }

  // calculateSaving = () =>
  // {
   


  // }

  onButtonClick = () =>
  {
    
    const {numberofMemebers, income}  = this.state;

    if(numberofMemebers === "2 person")
    {
      if(income > 100000 && income < 300000)
      {
        let saving = (income/100) * 1; 
        this.setState({result:saving});
      }
      else if( income > 300000 && income < 2000000)
      {
        let saving = (income/100) * 5; 
        this.setState({result:saving});
            }
      else if( income === 2000000)
      {
        let saving = (income/100) * 25; 
        this.setState({result:saving});
      }
      else if( income > 2000000)
      {
        let saving = (income/100) * 50; 
        this.setState({result:saving});
      }
    
    }
    else if(numberofMemebers==="More than 2 person")
    {
      if(income > 100000 && income < 350000)
      {
        let saving = (income/100) * 1; 
        this.setState({result:saving});
      }
      else if( income > 350000 && income < 2000000)
      {
        let saving = (income/100) * 5; 
        this.setState({result:saving});
      }
      else if( income === 2000000)
      {
        let saving = (income/100) * 24; 
        this.setState({result:saving});
      }
      else if( income > 2000000)
      {
        let saving = (income/100) * 45; 
        this.setState({result:saving});
      }
    
    }
    
  }

  onFamilyChange = (event) => 
  {
    console.log(event.target.value);
    this.setState({income:event.target.value});

  }

  onFamilyMemeberChange = (event) =>
  {
    console.log(event.target.value);
    this.setState({numberofMemebers:event.target.value});
    this.onButtonClick();
  }

  onPageChange = (route) =>
  {
    if(route ==="new")
    {
      this.setState({hasClicked:true})
    }
    else
    {
      this.setState({hasClicked:false})
    }
    this.setState({route: route })
  }

  render() {
      
    
    const {numberofMemebers, income, result,route,hasClicked}  = this.state;
    
     
    return (
      <div>
      <Particles className='particle' params={particlesOptions} />
      <Navigation onPageChange = {this.onPageChange} hasClicked = {hasClicked}/>
   
      <div className="container" style={{paddingLeft:"14%"}}>
    { 
      route==="old" ?
    
        <div>
         <FamilyDropDown selectChange = {this.onFamilyChange} />
    

         <FamilyMemberDropDown selectChange ={this.onFamilyMemeberChange}/>
     

         <Button onCalculate = {this.onButtonClick}/>
       

         <Result income = {income} noOFMember = {numberofMemebers} result = {result}/>
         </div>
           :(route==="new"?

           <SavingCalculator route = {route}/>

           :console.log("Sorry")
           )
         
    }
      </div>
      </div>

    );
  }
}

export default App;
