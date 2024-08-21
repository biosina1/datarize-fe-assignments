import styles from './NotFoundView.module.scss'

interface NotFoundViewProps {
  onGoHomeButtonClick: () => void
}

const NotFoundView = ({ onGoHomeButtonClick }: NotFoundViewProps) => {
  return (
    <div className={styles.notFound}>
      <h2>404 ERROR</h2>
      <p>페이지를 찾을 수 없습니다.</p>
      <button onClick={onGoHomeButtonClick}>홈으로 가기</button>
    </div>
  )
}

export default NotFoundView
