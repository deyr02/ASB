import React from 'react';
import { Container } from 'semantic-ui-react';
import Register from '../../features/register/Register';
import NavBar from './NavBar';
import './Style.css';

function App() {
  return (
    <>
     <NavBar/>
     <Container className='main-container'>
     <Register/>
       
     </Container>
    </>
   
  )
}

export default App;
