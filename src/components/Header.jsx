import '../App.css';
import React from 'react'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'


// Header программы. 
const Header = () => {
    return (
        <div>
            
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand className="header">
                        
                    
                        <h2 className='logo'>  <img src="./img/open-book.png" alt="альтернативный текст" className='logoImg' /> ЧИТАЙ-КНИГИ</h2>
                        
                        
                        
                        </Navbar.Brand>
                </Container>
            </Navbar>
        </div>
        
    )
}
export default Header