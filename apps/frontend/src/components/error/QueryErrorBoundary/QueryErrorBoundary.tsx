import { QueryErrorResetBoundary } from '@tanstack/react-query'
import ErrorFallback from '../ErrorFallback'
import ErrorBoundary from '../ErrorBoundary'

interface QueryErrorBoundary {
  children: React.ReactNode
  fallbackComponent?: React.ElementType
}

// QueryErrorBoundary 컴포넌트는 react-query로 API 요청 후 에러가 발생하는 경우에 에러를 전달받아 처리합니다.
// QueryErrorResetBoundary 컴포넌트는 에러를 리셋하고 API를 재요청할 수 있는 reset 함수를 제공합니다.
// FallbackComponent 컴포넌트에서 reset 함수를 전달받아 버튼 클릭 시 에러가 발생한 API를 재요청합니다.
const QueryErrorBoundary = ({ children, fallbackComponent: FallbackComponent = ErrorFallback }: QueryErrorBoundary) => {
  return (
    <QueryErrorResetBoundary>
      {({ reset }) => (
        <ErrorBoundary onReset={reset} fallbackComponent={FallbackComponent}>
          {children}
        </ErrorBoundary>
      )}
    </QueryErrorResetBoundary>
  )
}

export default QueryErrorBoundary
