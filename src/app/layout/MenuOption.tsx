import { observer } from 'mobx-react-lite';
import * as React from 'react';
import { List } from 'semantic-ui-react';
import { useStore } from '../stores/store';

export default observer( function MenuOption(){
    const {navStore} = useStore();
    return(
        <List size='large' link>
            <List.Item  onClick={()=> navStore.toggleMenu('RegisterCardForm')}  active>Register Card</List.Item>
            <List.Item  onClick={()=> navStore.toggleMenu('Credit Card List')}  >Credit Card List</List.Item>
        </List>

    )
})