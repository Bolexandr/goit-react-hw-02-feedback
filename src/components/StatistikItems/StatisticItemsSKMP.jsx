import styled from 'styled-components';
import PropTypes from 'prop-types';

import { StatisticOneItemSKMP } from 'components/StatisticOneItem/StatisticOneItemSKMP';

const List = styled.ul`
  list-style: none;
  display: flex;
  gap: 10px;
  font-weight: 600;
  flex-wrap: wrap;
`;
const Item = styled.li`
  border: 2px solid tomato;
  background-color: rgb(171, 210, 30);
  padding: 5px;
  border-radius: 5px;
`;

const Statistic = ({ dataState, positivePercentag, total }) => {
  const keys = Object.keys(dataState);
  return (
    <List>
      {keys.map(keey => (
        <Item key={keey}>
          <StatisticOneItemSKMP label={keey} value={String(dataState[keey])} />
        </Item>
      ))}
      <Item>
        <StatisticOneItemSKMP label={'Total'} value={String(total)} />
      </Item>
      <Item>
        <StatisticOneItemSKMP
          label={'Positive Statistic '}
          value={String(positivePercentag)}
        />
      </Item>
    </List>
  );
};
export default Statistic;

Statistic.propTypes = {
  dataState: PropTypes.object.isRequired,
  positivePercentag: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
};
