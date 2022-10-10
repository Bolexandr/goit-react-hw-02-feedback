import PropTypes from 'prop-types';

import StatisticOneItem from "components/StatisticOneItem/StatisticOneItem"

import css from "./StatisticItems.module.css"

function Statistics ({obj ,fuTotal,fuPersentage}){
  // const keys = Object.keys(obj)
  // const values = Object.values(obj)

  const elMarking = keys.map((el, index )=>{
return  <li key={el +1}  className={css.LI} >
  {<StatisticOneItem
  first={el} 
  second={values[index]}
  />}
  </li>}
  )

  return (<ul className={css.List}>
    {elMarking}

  <li className={css.LI}  key={'Total'}>
    {<StatisticOneItem 
    first ='Total'
    second={fuTotal()}  />}
    </li>

  <li  className={css.LI} key={'Positive feedback'}>
    {<StatisticOneItem
      first ='Positive feedback'
      second={fuPersentage()}/>}</li>
  </ul>)
}
export default Statistics

// StatisticOneItem.propTypes={
//   obj : PropTypes.objectOf(
//     PropTypes.number),
    
//   fuTotal: PropTypes.func,
//   fuPersentage:PropTypes.func
// }