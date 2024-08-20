import { ErrorMessage } from '../../../constants/error'
import styles from './ErrorFallbackView.module.scss'

interface ErrorFallbackProps {
  errorMessage: ErrorMessage
  onReset: React.MouseEventHandler<HTMLButtonElement>
}

const ErrorFallbackView = ({ errorMessage, onReset }: ErrorFallbackProps) => {
  return (
    <div className={styles.errorFallback}>
      <h2>{errorMessage.title}</h2>
      <p>{errorMessage.message}</p>
      {errorMessage.buttonName && <button onClick={onReset}>{errorMessage.buttonName}</button>}
    </div>
  )
}

export default ErrorFallbackView
