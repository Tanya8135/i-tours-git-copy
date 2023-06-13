import FriendList from './friendList';
import friends from '../data/friends.json';

const Friend = () => {
    return (
        <div className='friend-container'>
            <ul className="friend-list">
                {friends.map((listFriend) => (
                    <FriendList key={listFriend.id} {...listFriend} />
                ))
                }
            </ul>
        </div>
    )
}

export default Friend