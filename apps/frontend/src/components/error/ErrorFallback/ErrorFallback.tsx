import { AxiosError, isAxiosError } from 'axios'
import ErrorFallbackView from './ErrorFallbackView'
import { ERROR_MESSAGES } from '../../../constants/error'
import { useNavigate } from 'react-router-dom'

interface ErrorFallbackProps {
  error: AxiosError | Error | null
  onReset?: () => void
}

const ErrorFallback = ({ error, onReset }: ErrorFallbackProps) => {
  const navigate = useNavigate()

  const errorMessage = isAxiosError(error)
    ? ERROR_MESSAGES[error?.response?.status ?? 'default']
    : ERROR_MESSAGES.default

  const handleReset = () => {
    onReset?.()
    errorMessage.routePath && navigate(errorMessage.routePath)
  }

  return <ErrorFallbackView errorMessage={errorMessage} onReset={handleReset} />
}

export default ErrorFallback
