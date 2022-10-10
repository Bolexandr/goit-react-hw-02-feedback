import PropTypes from 'prop-types';

import css from './StatisticOneItem.module.css'

function StatisticOneItem ({first, second}) {
  return(
    <>
 <div>
      <span className={css.item}>{first} : </span>
      <span className={css.item}>{second}</span>
      </div>
      </>
  )
};

export default StatisticOneItem;

// StatisticOneItem.propTypes={
//   first : PropTypes.string.isRequired,
//   second : PropTypes
// }