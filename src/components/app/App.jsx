import { useState } from 'react';
import FeedbackOptions from '../feedback-options/FeedbackOptions';
import Statistics from '../statistics/Statistics';
import Section from '../section/Section';
import Notification from '../notification/Notification';

const App = () => {
  const [goodFeedback, setGoodFeedback] = useState(0);
  const [neutralFeedback, setNeutralFeedback] = useState(0);
  const [badFeedback, setBadFeedback] = useState(0);

  const handleClick = option => {
    switch (option) {
      case 'good':
        setGoodFeedback(goodFeedback + 1);
        break;
      case 'neutral':
        setNeutralFeedback(neutralFeedback + 1);
        break;
      case 'bad':
        setBadFeedback(badFeedback + 1);
        break;
      default:
        return;
    }
  };

  const totalFeedback = goodFeedback + neutralFeedback + badFeedback;
  const positiveFeedbackPercentage = Number(
    ((goodFeedback / totalFeedback) * 100).toFixed(2)
  );
  const feedbackOptions = ['good', 'neutral', 'bad'];

  return (
    <>
      <Section
        title={'Please leave feedback'}
        component={
          <FeedbackOptions
            options={feedbackOptions}
            onLeaveFeedback={handleClick}
          />
        }
      />
      <Section
        title={'Statistics'}
        component={
          totalFeedback > 0 ? (
            <Statistics
              good={goodFeedback}
              neutral={neutralFeedback}
              bad={badFeedback}
              total={totalFeedback}
              positivePercentage={positiveFeedbackPercentage}
            />
          ) : (
            <Notification message={'There is no feedback'} />
          )
        }
      />
    </>
  );
};

export default App;
