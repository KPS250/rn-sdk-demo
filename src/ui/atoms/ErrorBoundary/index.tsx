import React, { Component, ComponentType, ReactNode } from 'react';
import ErrorScreen from '../../../ui/templates/ErrorScreen';
export interface ErrorBoundaryProps {
  fallback: () => ReactNode;
  children: ReactNode;
}

export function withErrorBoundary<P extends string | number | object>(
  WrappedComponent: ComponentType<P>,
  fallback: ErrorBoundaryProps['fallback']
) {
  return function ComponentWithBoundary(props: any) {
    //console.log('Error Props1', props.navigation);
    return (
      <ErrorBoundary fallback={fallback}>
        <WrappedComponent {...props} />
      </ErrorBoundary>
    );
  };
}

class ErrorBoundary extends Component<ErrorBoundaryProps> {
  state: { error: Error | undefined } = {
    error: undefined,
  };

  componentDidCatch(error: any, errorInfo: any) {
    this.setState({ error });
    console.log('Error Props', error, errorInfo);
  }

  resetError = () => {
    this.setState({ error: undefined });
  };

  render() {
    console.log('ERRORSTATE', this.state.error);
    if (!this.state.error) {
      return this.props.children;
    }

    return <ErrorScreen onPress={this.resetError} />;
  }
}

export default ErrorBoundary;
