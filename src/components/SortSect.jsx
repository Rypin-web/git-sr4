import React from 'react'
import InputText from './UI/InputText/InputText.jsx'

const SortSect = ({ sortByName, setSortByName }) => {
  return (
    <div>
      <InputText
        placeholder="Sort by title"
        value={sortByName}
        onChange={(e) => setSortByName(e.target.value)}
      />
    </div>
  )
}

export default SortSect
