import { observer } from 'mobx-react-lite';
import * as React from 'react';
import { Container, Menu } from 'semantic-ui-react';
import { useStore } from '../stores/store';
import MenuOption from './MenuOption';

export default observer(  function NavBar(){
    const {navStore} = useStore();
    const {isMenuVisiable, toggleMenu} = navStore;
    return(
      <>
        <Menu fixed='top' floated >
            <Container>
               {!isMenuVisiable &&
                 <Menu.Item as="h2" > 
                    <i onClick= {()=>toggleMenu('Menu')}  className="bars icon"></i> 
                    <span className = "center-text"> {navStore.navTitle}</span>
                 </Menu.Item>}
               {isMenuVisiable &&
                 <Menu.Item as="h2" > 
                    <i onClick ={()=>toggleMenu("Register Card Form")}  className="arrow left icon"></i> 
                    <span className = "center-text">{navStore.navTitle}</span>
                 </Menu.Item>}
            </Container>
        </Menu>

        {isMenuVisiable &&        
        <Container   className ='menu-options'>
              <MenuOption/>
        </Container>}

        
        </>
    )
})