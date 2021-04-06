import { useState, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import styles from '../../../styles/Home.module.css'
import { UserActions } from './../../../store/actions/user'
export default function TodoItem({ idx, txt }) {
    const [isChecked, setIsChecked] = useState(false);
    const [isForm, setIsForm] = useState(false);
    const dispatch = useDispatch()
    const router = useRouter()
    const inputRef = useRef()

    const handleDelete = () => {
        if(!isChecked) {
            alert('check the box to delete')
            return;
        }
        dispatch({ type: UserActions.USER_DELETE, payload: idx })
    }

    const handleUpdate = () => {
        const inputVal = inputRef.current.value
        if (!inputVal || inputVal === '') return;
        dispatch({ type: UserActions.USER_EDIT, payload: { idx, txt: inputVal } })
        setIsForm(false)
    }

    const goToDetail = () => {
        router.push(`/${idx}`)
    }
    return (
        <div className={`${styles.todoItem} ${isChecked && styles.disabled}`}>
            <input type='checkbox' value={isChecked} onChange={() => setIsChecked(!isChecked)} />
            {
                isForm ? <input type='text' ref={inputRef} defaultValue={txt} /> : <p onClick={goToDetail}>{txt}</p>
            }
            <div className='actions'>
                {
                    isForm ? 
                        <button type='button' onClick={handleUpdate}>Save</button> : 
                        <button type='button' onClick={() => setIsForm(true)}>Edit</button>
                }
                <button type='button' onClick={handleDelete}>Delete</button>
            </div>
        </div>
    )
}