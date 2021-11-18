import React, {ErrorInfo} from "react";
import styled from "styled-components";
import colors from "consts/colors";
import errorMessages from "consts/errorMessages";

const ErrorContainer = styled.div`
  margin: 0 0 2rem;
`;

const ErrorTitle = styled.h2`
  color: ${colors.white}
`;

const ErrorDetails = styled.details`
  color: ${colors.white}
`;

interface IErrorBoundaryState {
    error: Error,
    errorInfo: ErrorInfo
}

interface IErrorBoundaryProps {

}

class ErrorBoundary extends React.Component<IErrorBoundaryProps, IErrorBoundaryState> {
    constructor(props: IErrorBoundaryProps) {
        super(props);
        this.state= { error: null, errorInfo: null };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        this.setState({
            error: error,
            errorInfo: errorInfo
        })
    }

    render() {
        if (this.state.errorInfo) {
            return (
                <ErrorContainer>
                    <ErrorTitle>{errorMessages.common}</ErrorTitle>
                    <ErrorDetails style={{ whiteSpace: 'pre-wrap' }}>
                        {this.state.error && this.state.error.toString()}
                        <br />
                        {this.state.errorInfo.componentStack}
                    </ErrorDetails>
                </ErrorContainer>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
