import PropTypes from 'prop-types';


import css from './Notificatio.module.css'

export default function Notification  ({message}){
  return(
    <>
    <span className={css.item}>{message}</span>
    </>
  )
}
Notification.propTypes={
  message: PropTypes.string.isRequired
}