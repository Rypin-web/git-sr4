import TextArea from './UI/TextArea/TextArea.jsx'
import { useEffect } from 'react'

const SideMid = ({
  contentMid,
  setContentMid,
  contentRemake,
  setContentRemake,
  ...props
}) => {
  let contentId = 0
  let contentObject = {}

  useEffect(() => {
    if (contentMid) {
      contentId = contentMid
      contentObject = JSON.parse(localStorage.getItem('TaskManager')).find(
        (item) => item.id === contentId
      )
      setContentRemake(contentObject.content)
    }
  }, [contentMid])

  return (
    <aside {...props}>
      <TextArea
        value={contentRemake}
        onChange={(e) => setContentRemake(e.target.value)}
      ></TextArea>
      <p className="saveAtention">
        Be sure to save before moving to another tab
      </p>
      <hr />
      <div className="rootDiv"></div>
    </aside>
  )
}

export default SideMid
