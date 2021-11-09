import React, {ErrorInfo} from "react";
import styled from "styled-components";
import colors from "consts/colors";

const ErrorContainer = styled.div`
  margin: 0 0 2rem;
`;

const ErrorTitle = styled.h2`
  color: ${colors.white}
`;

const ErrorDetails = styled.details`
  color: ${colors.white}
`;

interface IState {
    error: Error,
    errorInfo: ErrorInfo
}

interface IProps {

}

class ErrorBoundary extends React.Component<IProps, IState> {
    constructor(props: IProps) {
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
                    <ErrorTitle>Whooops! Something went wrong...</ErrorTitle>
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
