import styled from 'styled-components';
import PropTypes from 'prop-types';

const StatisticDiv = styled.div`
  font-size: larger;
  color: blue;
  text-transform: capitalize;
`;
const StatisticSpan = styled.span`
  font-size: 17px;
  color: #ff0077;
  font-weight: bold;
`;
export const StatisticOneItemSKMP = ({ label, value }) => {
  return (
    <StatisticDiv>
      <StatisticSpan>{label}</StatisticSpan> :
      <StatisticSpan> {value}</StatisticSpan>
    </StatisticDiv>
  );
};
StatisticOneItemSKMP.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};
