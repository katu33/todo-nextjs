import { useRef } from "react"
import { useDispatch } from 'react-redux'
import { UserActions } from './../../../store/actions/user'

export default function TodoHeader() {
    const dispatch = useDispatch()
    const inputRef = useRef()

    const handleAdd = () => {
        const txt = inputRef.current.value
        if (!txt || txt === '') return;
        
        dispatch({type: UserActions.USER_ADD, payload: txt})
        inputRef.current.value = ''
    }
    return (
        <div className='todo__header'>
            <input type='text' ref={inputRef} />
            <button type='button' onClick={handleAdd}>Add</button>
        </div>
    )
}