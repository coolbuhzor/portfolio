import React from "react";
import styled from "styled-components";

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  color: red;
  font-size: 2rem;
`;

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <ErrorContainer>
          Loading failed! <br /> Something Went Wrong. <br /> Please Contact
          coolbuhzor@gmail.com
        </ErrorContainer>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
