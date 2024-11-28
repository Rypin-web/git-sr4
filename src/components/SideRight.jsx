import React, { useEffect } from 'react'
import InputText from './UI/InputText/InputText.jsx'
import Button from './UI/Button/Button.jsx'
import classes from '../styles/SideRight.module.css'

const SideRight = ({
  contentRigth,
  setContentRigth,
  saveTask,
  contentRemake,
  deleteTask,
  ...props
}) => {
  const [title, setTitle] = React.useState('')
  const [simpleDescription, setSimpleDescription] = React.useState('')

  let contentId = 0
  let contentObject = {}
  if (contentRigth) {
    contentId = contentRigth
    contentObject = JSON.parse(localStorage.getItem('TaskManager')).find(
      (item) => item.id === contentId
    )
  }

  useEffect(() => {
    setTitle(contentObject.title)
    setSimpleDescription(contentObject.simpleDescription)
  }, [contentRigth])

  return (
    <aside {...props}>
      {contentRigth && (
        <>
          <div className={classes.redactorContent}>
            <div className={classes.refactorDiv}>
              <h1 className={classes.h1}>{title ? title : `No title`}</h1>
              <InputText
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title"
                maxlength="20"
              />
              <InputText
                value={simpleDescription}
                onChange={(e) => setSimpleDescription(e.target.value)}
                placeholder="Simple description"
                maxlength="50"
              />
            </div>
            <div className={classes.redactorContentButtonSect}>
              <Button
                onClick={() =>
                  deleteTask(
                    JSON.parse(localStorage.getItem('TaskManager')),
                    contentObject
                  )
                }
              >
                Delete
              </Button>
              <Button
                onClick={() =>
                  saveTask(
                    title,
                    simpleDescription,
                    contentRemake,
                    JSON.parse(localStorage.getItem('TaskManager')),
                    contentObject
                  )
                }
              >
                Save
              </Button>
            </div>
          </div>
        </>
      )}
    </aside>
  )
}

export default SideRight
