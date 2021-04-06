import React from 'react'
import { useRouter } from 'next/router'
import { wrapper } from '../store'

function TodoDetail({data}) {
    const router = useRouter()
    return (
        <div className='detail'>
            <h1>Detail: </h1> {data}
        </div>
    )
}

export default TodoDetail

export async function getStaticPaths() {
    return {
        paths: [
            { params: { id: '0' } },
            { params: { id: '1' } },
            { params: { id: '2' } }
        ],
        fallback: false
    }
}

export const getStaticProps = wrapper.getStaticProps(async ({ store, params }) => {
    const userId = params.id
    const user = store.getState().user.users[userId]
    return {
        props: {
            data: user
        }
    }
})