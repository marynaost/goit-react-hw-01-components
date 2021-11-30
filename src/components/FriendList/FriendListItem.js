import PropTypes from 'prop-types';
import styles from './FriendListItem.module.css';

function FriendListItem({ isOnline, avatar, name }) {
  return (
    <>
      <span
        className={styles.status}
        style={{ backgroundColor: isOnline ? isOnline : 'red' }}
      >
        {isOnline}
      </span>
      <img
        className={styles.avatar}
        src={avatar}
        alt="User avatar"
        width="48"
      />
      <p className={styles.name}>{name}</p>
    </>
  );
}

FriendListItem.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default FriendListItem;
