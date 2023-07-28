import PropTypes from 'prop-types';
import style from './FriendList.module.css';
import { FriendListItem } from './FriendListItem';



export const FriendList = ({friends}) => {
    return (
        <ul className={style.friend__list}>
            {friends.map((friend) => {
                return (
                    <FriendListItem 
                    key={friend.id}
                    isOnline={friend.isOnline}
                    avatar={friend.avatar}
                    name={friend.name}
                    />
                )
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