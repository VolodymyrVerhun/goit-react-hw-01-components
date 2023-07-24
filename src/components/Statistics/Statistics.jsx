import style from './Statistics.module.css'
import PropTypes from 'prop-types';

export const Statistics = ({ stats,  title}) => {
    return (
<section className={style.statistics}>
    {title &&
    <h2 className={style.title}>{title}</h2>
    }
     <ul className={style.stat__list}>
           {stats.map(({id, label, percentage}) => {
            return <li key={id} className={style.item} style={{ backgroundColor: `#${Math.floor(Math.random() * 16777215).toString(16)}` }}>
                        <span className={style.label}>{label}</span>
                        <span className={style.percentage}>{percentage}</span>
                    </li>
           })}        
    </ul>
</section>
    )
};

Statistics.propTypes = {
    title: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    }))
    
};