// AppNav View
import React, { } from 'react';
import styles from './styles';

// Destructuring styled components
const {AppNavStyled, MenuIcon, Menu} = styles;

const View = ({ AppTitle, showMenu, handleShowMenu }) => {
  return (
    <div>
      <AppNavStyled>
        <MenuIcon
          className={'material-icons'}
          onClick={() => handleShowMenu()}
        >
          menu
        </MenuIcon>
        {AppTitle}
      </AppNavStyled>
      <Menu showMenu={showMenu} clicked></Menu>
    </div>
  )
}

export default View;