import PropTypes from 'prop-types';
import style from './FriendList.module.css';

export const FriendListItem = ({isOnline, avatar, name}) => {
    return (<li className={style.item}>
                            <span className={`${style.status} ${isOnline ? style.online : style.ofline}`}>{isOnline}</span>
                            <img className={style.avatar} src={avatar} alt="User avatar" width="48" />
                            <p className={style.name}>{name}</p>
                        </li>)
}


FriendListItem.propTypes = {
        isOnline: PropTypes.bool.isRequired,
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
    
};