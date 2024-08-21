import { ErrorMessage } from '../../../constants/error'
import styles from './ErrorFallbackView.module.scss'

interface ErrorFallbackProps {
  errorMessage: ErrorMessage
  onButtonClick: React.MouseEventHandler<HTMLButtonElement>
}

const ErrorFallbackView = ({ errorMessage, onButtonClick }: ErrorFallbackProps) => {
  return (
    <div className={styles.errorFallback}>
      <h2>{errorMessage.title}</h2>
      <p>{errorMessage.message}</p>
      {errorMessage.buttonName && <button onClick={onButtonClick}>{errorMessage.buttonName}</button>}
    </div>
  )
}

export default ErrorFallbackView
