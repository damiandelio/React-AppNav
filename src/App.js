import React, { Component } from 'react';
import AppNav from './AppNav';

export default class App extends Component {
  state = {
    AppTitle: 'AppStyled'
  }

  render() {
    const { AppTitle } = this.state;

    return (
      <div>
        <AppNav AppTitle={AppTitle} />
      </div>
    );
  }
}
