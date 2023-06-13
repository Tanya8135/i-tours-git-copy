import Header from 'components/header';
import ToursPage from 'components/tours-page';
import Footer from 'components/footer';
import Profile from 'components/profile';
import user from 'components/data/user.json';
import data from 'components/data/data.json';
import friends from 'components/data/friends.json';
import transactions from 'components/data/transactions.json';
import Statistics from 'components/statistics';
import Friend from 'components/friend';
import Transaction from '../transaction';

// Підключення Ванільного CSS
// import 'components/app/App.css';

// Підключення Модульного CSS
import style from './App.module.css';

import { LIGHT } from 'constans';
import { DARK } from 'constans';

const App = () => {
    const theme = DARK;
    return <div className={style['app-container']}>
        <Header theme={theme} />
        <ToursPage theme={theme} />
        <Footer />
        <Profile
            username={user.username}
            tag={user.tag}
            location={user.location}
            avatar={user.avatar}
            stats={user.stats}
        />
        <Statistics title="Upload stats" stats={data} />
        {/* <Statistics stats={data} /> якщо розкомітити, то двоїть рендер */}
        <Friend friends={friends} />
        <Transaction items={transactions} />
    </div>
};

export default App;