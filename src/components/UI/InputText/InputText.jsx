import React from 'react'
import classes from './InputText.module.css'

const InputText = (props) => {
  return <input type="text" {...props} className={classes.input} />
}

export default InputText
