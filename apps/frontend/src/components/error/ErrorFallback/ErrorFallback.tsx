import { AxiosError, isAxiosError } from 'axios'
import ErrorFallbackView from './ErrorFallbackView'
import { ERROR_MESSAGES } from '../../../constants/error'
import { useNavigate } from 'react-router-dom'

interface ErrorFallbackProps {
  error: AxiosError | Error | null
  onReset?: () => void
}

// 에러 발생 시 보여줄 대체 컴포넌트
const ErrorFallback = ({ error, onReset }: ErrorFallbackProps) => {
  const navigate = useNavigate()

  // 발생한 에러가 AxiosError면, 상태 코드 별 에러 메시지 파싱
  // 발생한 에러가 Error면, 디폴트 에러 메시지 파싱
  const errorMessage = isAxiosError(error)
    ? ERROR_MESSAGES[error?.response?.status ?? 'default']
    : ERROR_MESSAGES.default

  const handleButtonClick = () => {
    onReset?.()
    errorMessage.routePath && navigate(errorMessage.routePath)
  }

  return <ErrorFallbackView errorMessage={errorMessage} onButtonClick={handleButtonClick} />
}

export default ErrorFallback
