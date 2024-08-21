import { QueryErrorResetBoundary } from '@tanstack/react-query'
import ErrorFallback from '../ErrorFallback'
import ErrorBoundary from '../ErrorBoundary'

interface QueryErrorBoundary {
  children: React.ReactNode
  fallbackComponent?: React.ElementType
}

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
