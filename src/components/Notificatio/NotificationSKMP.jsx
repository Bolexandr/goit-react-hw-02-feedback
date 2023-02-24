import styled from 'styled-components';
import PropTypes from 'prop-types';

const NotificationSKMP = styled.span`
  font-size: 19px;
  color: #ff0077;
  padding: 9px;
  border: 2px solid aqua;
  border-radius: 5px;
  background-color: #a0e0c8;
  font-weight: bold;
`;

const Notification = ({ message }) => (
  <NotificationSKMP>{message}</NotificationSKMP>
);
export default Notification;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
