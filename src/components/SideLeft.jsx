import React from 'react'
import SortSect from './SortSect.jsx'
import classes from '../styles/SideLeft.module.css'
import ContentSectLeft from './ContentSectLeft.jsx'
import Button from './UI/Button/Button.jsx'

const SideLeft = (props) => {
  const [sortByName, setSortByName] = React.useState('')

  return (
    <aside {...props}>
      <header>
        <h1 className={classes.headerH1}>Menu</h1>
      </header>

      <SortSect sortByName={sortByName} setSortByName={setSortByName} />

      <ContentSectLeft
        sortByName={sortByName}
        setContentMid={props.setContentMid}
        contentRight={props.contentRight}
        setContentRigth={props.setContentRigth}
      />

      <Button onClick={() => props.createTask()}>Create</Button>
    </aside>
  )
}

export default SideLeft
