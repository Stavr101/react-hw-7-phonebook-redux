import { Component } from "react";
import "./App.css";
import Statistic from "./Component/Feedback/Statistic/Statistic";
import FeedbackOptions from "./Component/Feedback/FeedbackOptions/FeedbackOptions";
import Section from "./Component/Feedback/Section/Section";
import Notification from "./Component/Feedback/Notification/Notification";

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    const values = Object.values(this.state);
    const total = values.reduce((sum, value) => sum + value, 0);

    return total;
  };
  handlerFeedback = (event) => {
    const name = event.target.name;
    this.setState((prevState) => ({ [name]: prevState[name] + 1 }));
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    const { good } = this.state;
    if (!total) {
      return 0;
    }

    const result = (good / total) * 100;
    return Math.round(result);
  };

  render() {
    const total = this.countTotalFeedback();
    return (
      <>
        <Section title="Please leave feedback">
          <div className="card">
            <FeedbackOptions
              options={this.state}
              onLeaveFeedback={this.handlerFeedback}
            />
          </div>
        </Section>
        <Section title="Statistic">
          {total ? (
            <Statistic
              options={this.state}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </>
    );
  }
}

export default Feedback;
