import { observer } from 'mobx-react-lite';
import * as React from 'react';
import { Header } from 'semantic-ui-react';
interface Props {
    FirstName:string;
}

export default observer( function RegisterHeader({FirstName}:Props){
        
    return(
        <Header size="huge" as='h2' textAlign='center' >
          Welcome!
        </Header>
    )

})