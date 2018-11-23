// AppNav
import React, { Component } from 'react';
import View from './View';

export default class AppNav extends Component {
  state = {
    showMenu: '',
  }

// Muestra y oculta el menu
handleShowMenu = () => {
  switch (this.state.showMenu) {
    case 'shown':
      this.setState({showMenu: 'hidden'});
      break;
    default:
     this.setState({showMenu: 'shown'});
     break;
  }
}

  render() {
    return (
      <View {...this.props} {...this.state} handleShowMenu={this.handleShowMenu}/>
    )
  }
}