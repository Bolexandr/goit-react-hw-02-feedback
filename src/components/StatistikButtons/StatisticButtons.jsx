import PropTypes from 'prop-types';


import css from './StatistikButtons.module.css'

function FeedbackOptions ({options}){

  const keyArr = Object.keys(options)

  return(
    <ul>
    { keyArr.map(el=>{
    return (<li key={el} className={css.item}>
      <button className={css.itemButton}>{el}</button>
      </li>)
  })}
    </ul>
  )
  
}

export default FeedbackOptions

// FeedbackOptions.propTypes={
//   options:PropTypes.objectOf(PropTypes.number)
// }