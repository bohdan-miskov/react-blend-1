import { FaRegThumbsUp } from 'react-icons/fa';
import { MdPeople, MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { GiTreeDoor } from 'react-icons/gi';
import StatisticsItem from '../StatisticsItem/StatisticsItem';
import style from './Statistics.module.css';

const icons = [
  <FaRegThumbsUp key={1} />,
  <MdPeople key={2} />,
  <MdOutlineProductionQuantityLimits key={3} />,
  <GiTreeDoor key={4} />,
];

const Statistics = ({ title, stats }) => {
  return (
    <>
      {title && <h3>{title}</h3>}
      <ul className={style.list}>
        {stats.map((stat, index) => (
          <li key={stat.id} className={style.item}>
            {
              <StatisticsItem
                total={stat.total}
                title={stat.title}
                icon={icons[index]}
              />
            }
          </li>
        ))}
      </ul>
    </>
  );
};

export default Statistics;
