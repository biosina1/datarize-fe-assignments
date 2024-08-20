import styles from './ErrorFallbackView.module.scss'

interface ErrorFallbackProps {
  onReset?: React.MouseEventHandler<HTMLButtonElement>
}

const ErrorFallbackView = ({ onReset }: ErrorFallbackProps) => {
  return (
    <div className={styles.errorFallback}>
      <h2>오류 발생</h2>
      <p>오류 메시지</p>
      {onReset && <button onClick={onReset}>API 호출 재시도</button>}
    </div>
  )
}

export default ErrorFallbackView
