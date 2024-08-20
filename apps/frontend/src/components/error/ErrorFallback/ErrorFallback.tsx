import { AxiosError } from 'axios'
import ErrorFallbackView from './ErrorFallbackView'

interface ErrorFallbackProps {
  error: AxiosError | Error | null
  onReset: () => void
}

const ErrorFallback = ({ onReset }: ErrorFallbackProps) => {
  return <ErrorFallbackView onReset={onReset} />
}

export default ErrorFallback
