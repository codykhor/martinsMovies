'use client';

import React, {Component, ReactNode} from 'react';

interface Props {
    children: ReactNode;
}

interface State {
    hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {hasError: false};
    }

    static getDerivedStateFromError() {
        return {hasError: true};
    }

    componentDidCatch(error: Error) {
        console.error('Something went wrong:', error);
    }

    handleRetry = () => {
        this.setState({hasError: false});
    };

    render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-[400px] flex items-center justify-center p-8">
                    <div className="text-center">
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">
                            Oops! Something went wrong
                        </h2>

                        <div className="space-y-3">
                            <button
                                onClick={this.handleRetry}
                                className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark mr-3"
                            >
                                Try Again
                            </button>

                            <button
                                onClick={() => window.location.reload()}
                                className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300"
                            >
                                Refresh Page
                            </button>
                        </div>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}
