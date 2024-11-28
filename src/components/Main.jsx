import classes from '../styles/Main.module.css'
import SideLeft from './SideLeft.jsx'
import SideMid from './SideMid.jsx'
import SideRight from './SideRight.jsx'
import { useState } from 'react'
import todoHistory from '/public/todo.history.json'

const Main = () => {
  const [contentMid, setContentMid] = useState(``)
  const [contentRigth, setContentRigth] = useState(``)
  const [contentRemake, setContentRemake] = useState(``)

  function saveTask(title, description, content, mainObj, targetObj) {
    targetObj.title = title ? title : 'No title'
    targetObj.simpleDescription = description ? description : 'No description'
    targetObj.content = content

    mainObj[mainObj.findIndex((item) => item.id === targetObj.id)] = targetObj
    console.log(targetObj)

    localStorage.setItem('TaskManager', JSON.stringify(mainObj))
    location.reload()
  }
  function deleteTask(mainObj, targetObj) {
    mainObj = mainObj.filter((item) => item.id !== targetObj.id)
    console.log(mainObj)

    localStorage.setItem('TaskManager', JSON.stringify(mainObj))
    location.reload()
  }

  function convertDate(date) {
    let arr = date.split('/')
    return `${arr[1].length === 1 ? '0' + arr[1] : arr[1]}.${
      arr[0].length === 1 ? '0' + arr[0] : arr[0]
    }.${arr[2]}`
  }

  function createTask() {
    let newId =
      Math.max(
        ...JSON.parse(localStorage.getItem('TaskManager')).map(
          (item) => item.id
        )
      ) + 1
    let dateCreate = convertDate(new Date().toLocaleDateString('en-US'))

    let newObj = todoHistory[1]
    newObj.id = newId
    newObj.dateCreate = dateCreate

    let foo = JSON.parse(localStorage.getItem('TaskManager'))
    foo[foo.length] = newObj

    localStorage.setItem('TaskManager', JSON.stringify(foo))
    setContentMid(newObj.id)
    setContentRigth(newObj.id)
  }

  return (
    <main className={classes.main}>
      <SideLeft
        className={classes.left}
        setContentMid={setContentMid}
        setContentRigth={setContentRigth}
        contentRight={contentRigth}
        createTask={createTask}
      />

      <SideMid
        className={classes.mid}
        contentMid={contentMid}
        setContentMid={setContentMid}
        contentRemake={contentRemake}
        setContentRemake={setContentRemake}
      />
      <SideRight
        className={classes.rigth}
        contentRigth={contentRigth}
        contentRemake={contentRemake}
        setContentRigth={setContentRigth}
        saveTask={saveTask}
        deleteTask={deleteTask}
      />
    </main>
  )
}

export default Main
