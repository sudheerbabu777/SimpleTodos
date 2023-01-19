// Write your code here
import './index.css'

const TodoItem = props => {
  const {todoListDetails, onDeleteUser} = props
  const {title, id} = todoListDetails

  const onDelete = () => {
    onDeleteUser(id)
  }

  return (
    <div className="container">
      <li className="title-container">
        <p className="title">{title}</p>
        <div>
          <button type="button" className="button" onClick={onDelete}>
            Delete
          </button>
        </div>
      </li>
    </div>
  )
}

export default TodoItem
