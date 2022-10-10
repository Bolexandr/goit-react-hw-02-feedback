
import StatisticOneItem from "components/StatisticOneItem/StatisticOneItem"

import css from "./StatisticItems.module.css"

function Statistics ({obj ,fuTotal,fuPersentage}){
  const keys = Object.keys(obj)
  const values = Object.values(obj)

  const elMarking = keys.map((el, index )=>{
return  <li key={el +1}  className={css.LI} >
  {StatisticOneItem(el, values[index])}
  </li>}
  )
  return <ul className={css.List}>
    {[...elMarking ,
  <li className={css.LI}  key={'Total'}>{StatisticOneItem('Total',fuTotal())}</li>, 
  <li  className={css.LI} 
  key={'Positive feedback'}>{StatisticOneItem('Positive feedback',fuPersentage())}</li>]}
  </ul>
}
export default Statistics