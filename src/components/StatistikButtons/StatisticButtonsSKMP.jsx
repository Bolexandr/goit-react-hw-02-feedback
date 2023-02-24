import styled from 'styled-components';
import PropTypes from 'prop-types';

const StatisticOneButton = styled.button`
  font-size: larger;
  background-color: aquamarine;
  color: rgb(179, 88, 190);

  font-weight: 600;

  outline: 2px solid yellowgreen;
  border: none;
  padding: 5px;
`;
const StatisticButtonsList = styled.ul`
  list-style: none;
  display: flex;
  gap: 10px;
`;
const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <StatisticButtonsList>
    {options.map(option => (
      <li key={option}>
        <StatisticOneButton onClick={onLeaveFeedback}>
          {option}
        </StatisticOneButton>
      </li>
    ))}
  </StatisticButtonsList>
);
export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func.isRequired,
};
