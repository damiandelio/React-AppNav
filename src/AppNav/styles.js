// AppNav styles
import styled, { css, keyframes } from 'styled-components';

const AppNavStyled = styled.header`
  position: fixed;
  display: flex;
  align-items: center;
  width: 100%;
  height: 4rem;
  padding: 0 1rem 0 1rem;
  background: #ff4a4a;
  font-family: 'Roboto', sans-serif;
  font-size: 16pt;
  font-weight: 500;
  color: #fff;
  z-index: 1500;
`

const MenuIcon = styled.i`
  font-size: 18pt;
  margin-right: 1rem;
  cursor: pointer;
`

const Menu = styled.nav`
  position: relative;
  width: 80%;
  max-width: 18rem;
  height: 100vh;
  background: #fff;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  transform: translateX(-110%);

  /* Se muestra el menu*/
  ${props => (props.showMenu === 'shown') && css`
    animation: ${showMenuAnimation} 0.2s;
    transform: translateX(0);
  `}

  /* Se oculta el menu*/
  ${props => (props.showMenu === 'hidden') && css`
    animation: ${hiddenMenuAnimation} 0.2s;
    transform: translateX(-110%);
  `} 
`

// Animaciones del menu
const showMenuAnimation = keyframes`
    from {
      transform: translateX(-110%);
    }
    to {
      transform: translateX(0);
    }
  `;
  const hiddenMenuAnimation = keyframes`
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-110%);
    }
  `;

// Obejto para exportar componentes
const styles = {
  AppNavStyled,
  MenuIcon,
  Menu
}

export default styles;
