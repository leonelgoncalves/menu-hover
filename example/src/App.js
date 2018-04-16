import React, { Component } from "react";

import {
  MoheComponent,
  AdsilaComponent,
  SalalComponent,
  ExampleComponent
} from "menu-hover";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      title: {
        text: "Über uns",
        color: "#90ee90",
        hoverColor: "#6265fe"
      },
      description: {
        text: "eine kurze Beschreibung",
        color: "#6265fe",
        hoverColor: "#90ee90"
      }
    };
  }
  render() {
    return (
      <div>
        <ExampleComponent text="Modern React component module" />
        <AdsilaComponent
          title={this.state.title.text}
          description={this.state.description.text}
        />
        <MoheComponent
          title={this.state.title}
          description={this.state.description}
        />
        <SalalComponent
          title={this.state.title}
          description={this.state.description}
          backgroundColor="#222325"
        />
      </div>
    );
  }
}
