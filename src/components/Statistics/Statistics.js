import PropTypes from 'prop-types';
import StatisticsItem from './StatisticsItem';

function Statistics({ title, stats }) {
  return (
    <section className="statistics">
      <h2 className="title">{title ?? 'Upload stats'}</h2>
      <ul className="stat-list">
        {stats.map(stat => (
          <li key={stat.id} className="item">
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
