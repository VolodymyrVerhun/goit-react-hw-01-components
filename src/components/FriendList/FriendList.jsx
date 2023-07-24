import PropTypes from 'prop-types';
import style from './FriendList.module.css';

export const FriendList = ({friends}) => {
    return (
        <ul className={style.friend__list}>
            {friends.map(({id, isOnline, avatar, name}) => {
                return <li key={id} className={style.item}>
                            <span className={`${style.status} ${isOnline ? style.online : style.ofline}`}>{isOnline}</span>
                            <img className={style.avatar} src={avatar} alt="User avatar" width="48" />
                            <p className={style.name}>{name}</p>
                        </li>
            })}
        </ul>
    )
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        isOnline: PropTypes.bool.isRequired,
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
    }))
    
};