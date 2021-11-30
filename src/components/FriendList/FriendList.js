import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import styles from './FriendList.module.css';

function FriendList({ friends }) {
  return (
    <ul className={styles.list}>
      {friends.map(friend => (
        <li key={friend.id} className={styles.item}>
          <FriendListItem
            isOnline={friend.isOnline}
            avatar={friend.avatar}
            name={friend.name}
          />
        </li>
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      name: PropTypes.string,
      avatar: PropTypes.string,
    }),
  ),
};

export default FriendList;
