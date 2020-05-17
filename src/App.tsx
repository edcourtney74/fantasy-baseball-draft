import React from "react";
import { Container } from "reactstrap";
import DraftBoard from "./components/DraftBoard";
import "./App.css";

type AppProps = {};
type AppState = {};

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
  }

  render() {
    return (
      <Container>
        <DraftBoard />
      </Container>
    );
  }
}

export default App;
