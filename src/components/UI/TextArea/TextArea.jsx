import classes from './TextArea.module.css'

const TextArea = ({ children, ...props }) => {
  return (
    <textarea className={classes.textArea} {...props}>
      {children}
    </textarea>
  )
}

export default TextArea
