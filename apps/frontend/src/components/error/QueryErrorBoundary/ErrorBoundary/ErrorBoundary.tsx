import React, { ElementType, ReactNode } from 'react'
import { AxiosError } from 'axios'

interface ErrorBoundaryProps {
  onReset: () => void
  children?: ReactNode
  fallbackComponent: ElementType
}

interface ErrorBoundaryState {
  error: Error | AxiosError | null
  hasError: boolean
}

const initialState: ErrorBoundaryState = {
  error: null,
  hasError: false,
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { ...initialState }
  }

  static getDerivedStateFromError(error: Error | AxiosError) {
    return {
      error,
      hasError: true,
    }
  }

  componentDidCatch(error: Error | AxiosError) {
    console.log('ErrorBoundary componentDidCatch :', error)
  }

  resetErrorBoundary = () => {
    this.setState({
      ...initialState,
    })
    this.props.onReset()
  }

  render() {
    const { error, hasError } = this.state
    const { fallbackComponent: FallbackComponent, children } = this.props

    if (hasError) {
      return <FallbackComponent error={error} onReset={this.resetErrorBoundary} />
    }

    return children
  }
}

export default ErrorBoundary
