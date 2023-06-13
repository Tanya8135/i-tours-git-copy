
const Profile = ({ avatar, username, tag, location, stats }) => {
    return (
        <div className='profile'>
            <div className="profile-description">
                <img
                    src={avatar}
                    alt="User avatar"
                    className="profile-avatar"
                />
                <p className="profile-text profile-name">{username}</p>
                <p className="profile-text profile-tag">@{tag}</p>
                <p className="profile-text profile-location">{location}</p>
            </div>

            <ul className="profile-stats">
                <li className="profile-stats-item">
                    <span className="profile-label">Followers</span>
                    <span className="profile-quantity">{stats.followers}</span>
                </li>
                <li className="profile-stats-item">
                    <span className="profile-label">Views</span>
                    <span className="profile-quantity">{stats.views}</span>
                </li>
                <li className="profile-stats-item">
                    <span className="profile-label">Likes</span>
                    <span className="profile-quantity">{stats.likes}</span>
                </li>
            </ul>
        </div>
    )
}

/* добавить propTyps */

export default Profile