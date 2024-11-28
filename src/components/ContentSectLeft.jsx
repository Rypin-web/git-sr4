import React from 'react'
import classes from '../styles/ContentSectLeft.module.css'

const ContentSectLeft = ({
  sortByName,
  setContentMid,
  setContentRigth,
  contentRight,
}) => {
  function openToDo(id) {
    setContentRigth(id)
    setContentMid(id)
  }

  return (
    <div className={classes.content}>
      {JSON.parse(localStorage.getItem('TaskManager'))
        .filter((item) =>
          item.title.toLowerCase().includes(sortByName.toLowerCase())
        )
        .map((item) => (
          <div
            className={contentRight === item.id ? 'todoCardActive' : 'todoCard'}
            key={item.id}
            onClick={() => openToDo(item.id)}
          >
            <h3>{item.title}</h3>
            <p>{item.simpleDescription}</p>
          </div>
        ))}
    </div>
  )
}

export default ContentSectLeft
