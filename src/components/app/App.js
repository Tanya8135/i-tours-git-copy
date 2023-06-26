import { Component } from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from 'components/header';
import ToursPage from 'components/tours-page';
import Footer from 'components/footer';
// import Profile from 'components/profile';
// import user from 'components/data/user.json';
// import data from 'components/data/data.json';
// import friends from 'components/data/friends.json';
// import transactions from 'components/data/transactions.json';
// import Statistics from 'components/statistics';
// import Friend from 'components/friend';
// import Transaction from '../transaction';

// Підключення Ванільного CSS
// import 'components/app/App.css';

// Підключення Модульного CSS
import style from './App.module.css';

// import { LIGHT } from 'constans';
// import { DARK } from 'constans';
import { DARK, LIGHT } from 'constans';


// const App = () => {
//     let theme = DARK;

//     setTimeout(() => {
//         console.log('work timeout');
//         theme = LIGHT;
//         console.log('inside timeout', { theme });
//     }, 5000);

//     console.log('render', { theme });

//     return <div className={style['app-container']}>
//         <Header theme={theme} />
//         <ToursPage theme={theme} />
//         <Footer />
//         <Profile
//             username={user.username}
//             tag={user.tag}
//             location={user.location}
//             avatar={user.avatar}
//             stats={user.stats}
//         />
//         <Statistics title="Upload stats" stats={data} />
//         {/* <Statistics stats={data} /> якщо розкомітити, то двоїть рендер */}
//         <Friend friends={friends} />
//         <Transaction items={transactions} />
//     </div>
// };

class App extends Component {
    state = {
        theme: LIGHT,
    };

    handleChangeTheme = () => {
        this.setState((currentState) => ({
            theme: currentState.theme === DARK ? LIGHT : DARK
        }))
    }

    render() {
        const { theme } = this.state;
        return (
            <div className={style['app-container']}>
                <Header theme={theme} onChangeTheme={this.handleChangeTheme} />
                {/* <ToursPage theme={theme} /> */}
                <Routes>
                    <Route path='/' element={<ToursPage theme={theme} />} />
                    <Route path='/foo' element={<></>} />
                </Routes>
                <Footer />
            </div>
        );
    }
}

export default App;