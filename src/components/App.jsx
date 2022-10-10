import React, { Component } from "react";

import FeedbackOptions from "./StatistikButtons/StatisticButtons";
import Statistics from "./StatistikItems/StatisticItems";
import Section from "./Section/Section";
import Notification from "./Notificatio/Notificatio";


export default class App  extends Component  {
  constructor() {
    super()
  this.state = {
    good: 0,
    neutral: 0,
    bad: 0
  }
}

  countTotalFeedback = () => {
    let sum = this.state.good + this.state.bad + this.state.neutral;
    console.log(sum);
return sum
  }

  countTotalFeedback = () => {
    let sum = this.state.good + this.state.bad + this.state.neutral;
    console.log(sum);
return sum
  }

  countPositiveFeedbackPercentage=()=>{

    let persentage = (100 * this.state.good / this.countTotalFeedback())
    console.log( persentage.toFixed(),'%')
    return `${persentage.toFixed()} %`
  }

hendelCounter = (e) => {
  if(e.target.localName === 'button'){
  let btnName = e.target.innerText
  this.setState((prevState) => ({ [btnName]: prevState[btnName] + 1 }))
  setTimeout(this.countTotalFeedback);
 setTimeout(this.countPositiveFeedbackPercentage)
  }
}

  
render(){
  return(
  < div onClick={ this.hendelCounter}>
<Section title='Pleace leave feedback'>
<FeedbackOptions options ={this.state}/>
</Section>
<Section 
title='Statistics'
>
{this.countTotalFeedback()> 0 ? 
<Statistics
obj = {this.state}
fuTotal = {this.countTotalFeedback}
fuPersentage ={this.countPositiveFeedbackPercentage}
/> 
:
 <Notification message={'There is no feedback'}/>
}
</Section>
  </div>
  )
}
  
};
