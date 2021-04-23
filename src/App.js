import React from 'react';
import userData from './json/user.json';
import statisticalData from './json/statistical-data.json';
import userFriendList from './json/friend-list.json';
import transactions from './json/transactions.json';
import Profile from './components/profile/Profile';
import Statistics from './components/statistics/Statistics';
import FriendList from './components/friendList/FriendList';
import Transaction from './components/transactions/Transactions';

function App() {
    const { name, tag, location, avatar, stats } = userData;
    return (
        <React.Fragment>
            <Profile
                name={name}
                tag={tag}
                location={location}
                avatar={avatar}
                stats={stats}
            />
            <Statistics title="Title" stats={statisticalData} />
            <Statistics stats={statisticalData} />
            <FriendList friends={userFriendList} />
            <Transaction transactions={transactions} />
        </React.Fragment>
    );
}

export default App;
