import React, { Component } from 'react';

import Statistic from './StatistikItems/StatisticItemsSKMP';
import Section from './Section/SectionSKMP';
import FeedbackOptions from './StatistikButtons/StatisticButtonsSKMP';
import Notification from './Notificatio/NotificationSKMP';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    let sum = this.state.good + this.state.bad + this.state.neutral;
    return sum;
  };

  countPositiveFeedbackPercentage = () => {
    let persentage = (100 * this.state.good) / this.countTotalFeedback();
    return `${persentage.toFixed()} %`;
  };

  hendelCounter = ({ target }) => {
    this.setState(prevState => ({
      [target.innerText]: prevState[target.innerText] + 1,
    }));
  };

  render() {
    return (
      <>
        <Section title="Pleace leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.hendelCounter}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() ? (
            <Statistic
              dataState={this.state}
              total={this.countTotalFeedback()}
              positivePercentag={this.countPositiveFeedbackPercentage()}
            ></Statistic>
          ) : (
            <Notification message={'There is no feedback'} />
          )}
        </Section>
      </>
    );
  }
}
