import Head from 'next/head'
import TodoHeader from '../components/Todo/TodoHeader'
import TodoBody from '../components/Todo/TodoBody'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Todo Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.todo}>
        <div className='todo'>
          <TodoHeader />
          <TodoBody />
        </div>
      </div>
    </>
  )
}
