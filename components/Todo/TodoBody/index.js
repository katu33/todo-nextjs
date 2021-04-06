import { useSelector } from 'react-redux'
import TodoItem from '../TodoItem'

export default function TodoBody() {
    const users = useSelector(state => state.user.users)

    return (
        <div className='todo__body'>
            {
                users && users.map((user, idx) => (
                    <TodoItem idx={idx} txt={user} key={idx} />
                ))
            }
        </div>
    )
}