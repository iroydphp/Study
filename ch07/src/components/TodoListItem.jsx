import './css/TodoListItem.css'
import { IoMdRemoveCircleOutline } from 'react-icons/io'
import { MdCheckBox, MdCheckBoxOutlineBlank } from 'react-icons/md'
import classnames from 'classnames'

function TodoListItem({ todo, onRemove }) {
   const { id, text, checked } = todo
   return (
      <div className="TodoListItem">
         <div className={classnames('checkbox', { checked })}>
            {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
            <div className="text">{text}</div>
         </div>
         <div className="remove" onClick={() => onRemove(id)}>
            <IoMdRemoveCircleOutline />
         </div>
      </div>
   )
}
export default TodoListItem
