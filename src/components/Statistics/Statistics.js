import PropTypes from 'prop-types';
import StatisticsItem from './StatisticsItem';
import styles from './StatisticsItem.module.css';

function onGetRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

function Statistics({ title, stats }) {
  return (
    <section className={styles.statistics}>
      <h2 className={styles.title}>{title ?? 'Upload stats'}</h2>
      <ul className={styles.list}>
        {stats.map(stat => (
          <li
            key={stat.id}
            className={styles.item}
            style={{ backgroundColor: onGetRandomColor() }}
          >
            <StatisticsItem label={stat.label} percentage={stat.percentage} />
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propType = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};

export default Statistics;
