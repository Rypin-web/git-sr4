import './styles/style.css'
import Main from './components/Main.jsx'
import todoHistory from '/public/todo.history.json'

function App() {
  if (localStorage.getItem('TaskManager') === null) {
    localStorage.setItem('TaskManager', JSON.stringify(todoHistory))
  }

  return (
    <div>
      <Main />
    </div>
  )
}

export default App
