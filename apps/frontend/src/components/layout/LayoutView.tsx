import styles from './LayoutView.module.scss'
import { Outlet } from 'react-router-dom'
import Header from './Header'

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
