import PropTypes from 'prop-types';

function StatisticsItem({ label, percentage }) {
  return (
    <>
      <span>{label}</span>
      <span>{percentage}%</span>
    </>
  );
}

StatisticsItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default StatisticsItem;
