// import { Component } from 'react';
import '../header/Header.css';
// import { DARK, LIGHT } from 'constans';

const Header = ({ theme, onChangeTheme }) => {
    return (
        <header>
            <p>logo</p>
            <button onClick={onChangeTheme}>Current Theme:{theme}</button>
        </header>
    );
};

// тобто, це замість коду вище типу альтернатива, але 
// тільки з більшим функціоналом

// class Header extends Component {
//     state = {
//         theme: DARK,
//         // foo: 123,
//     }

//     handleChangeTheme = () => {
//         console.log('work');

//         this.setState((currentState) => ({
//             theme: currentState.theme === DARK ? LIGHT : DARK
//         }))

//         // if (currentState.theme === DARK) {
//         //     return {
//         //         theme: LIGHT,
//         //     };
//         // }

//         // if (currentState.theme === LIGHT) {
//         //     return {
//         //         theme: DARK,
//         //     };
//         // }

//     };

//     render() {
//         const { theme } = this.state;
//         console.log('render', this.state)
//         return (
//             <header>
//                 <p>logo</p>
//                 {/* <p>{this.state.foo}</p> */}
//                 <button onClick={this.handleChangeTheme}>Current Theme {theme}</button>
//             </header >
//         );
//     }
// }

export default Header;