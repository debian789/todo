import './TodoItem.css'

function TodoItem (props) {

const onComplete = () => {
    alert('Ya se completo '+ props.text)
}


const onDelete = () => {
    alert('Se borro '+ props.text)
}

return (
    <li className={`itemList ${props.completed ?   'doneItemList' : 'openItemList'  }`} > 
        <span 
            onClick={onComplete} 
            className={`itemCheck ${props.completed ? 'doneItem': 'openItem'   }`}> 
                { props.completed ? '√': '' }
        </span>        
        <label className={` ${props.completed ?  'doneItemText' :  'openItemText'  }`}>
            {props.text}
        </label> 
        <button className='deleteItem' onClick={onDelete}>X</button>
    </li>
    )
}

export {TodoItem};