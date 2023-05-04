import { Component } from 'react';
import './Header.css';


class Header extends Component {
state = {clicked: false};
handleClick = () => {
    this.setState({clicked: !this.state.clicked})
}

render() {
    return ( 
        <div className='Header'>

            <div className="header-name">
                <h1>Sandra Joaquim</h1>
                <p>Solicitadora</p>
            </div>
            <div >
                <ul id="header-options" className= { this.state.clicked ? "#header-options active" : "#header-options"}>
                    <li><a className='active' href='/'>Inicio</a></li>
                    <li><a href='/'>Sobre</a></li>
                    <li><a href='/'>Serviços</a></li>
                    <li><a href='/'>Onde Estamos</a></li>
                    <li><a href='/'>Contactos</a></li>
                    
                </ul>

            </div>

            <div id="mobile" onClick={ this.handleClick }>
                <i id='bar' className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                
            </div>
            
        </div>
     );
    }
}
 
export default Header;