import './TodoItem.css'

function TodoItem (props) {
return (
    <li className={`itemList ${props.completed ?   'doneItemList' : 'openItemList'  }`} > 
        <span className={`itemCheck ${props.completed ? 'doneItem': 'openItem'   }`}> 
            { props.completed ? '√': '' }
        </span>        
        <label className={` ${props.completed ?  'doneItemText' :  'openItemText'  }`}>
            {props.text}
        </label> 
        <button className='deleteItem'>X</button>
    </li>
    )
}

export {TodoItem};