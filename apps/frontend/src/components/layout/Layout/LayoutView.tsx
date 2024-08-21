import Header from '../Header'
import styles from './LayoutView.module.scss'
import { Outlet } from 'react-router-dom'

const LayoutView = () => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
    </>
  )
}

export default LayoutView
