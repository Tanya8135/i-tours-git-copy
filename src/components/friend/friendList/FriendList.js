import PropTypes from "prop-types";

const FriendList = ({ avatar, name, isOnline }) => {
    const statusColor = isOnline ? "online" : "offline";

    return (
        <li className="friend-item">
            <span className={`friend-status ${statusColor}`}></span>
            <img className="friend-avatar" src={avatar} alt="User avatar" width="48" />
            <p className="friend-name">{name}</p>
        </li>
    );
};

FriendList.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}

export default FriendList;