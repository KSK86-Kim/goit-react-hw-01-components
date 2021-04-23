import React from 'react';
import PropTypes from 'prop-types';
import styles from '../statistics/Statistics.module.css';
import random_rgba from '../additional/randomRGBA';

const Statistics = ({ title, stats }) => {
    return (
        <section className={styles.statistics}>
            {title && <h2 className={styles.title}>{title}</h2>}
            <ul className={styles.statList}>
                {stats.map(item => (
                    <li
                        key={item.id}
                        className={styles.item}
                        style={{ backgroundColor: random_rgba() }}
                    >
                        <span className={styles.label}>{item.label}</span>
                        <span className={styles.percentage}>
                            {item.percentage + ' %'}
                        </span>
                    </li>
                ))}
            </ul>
        </section>
    );
};

Statistics.defaultProps = {
    title: null,
};

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string,
            percentage: PropTypes.number,
        }),
    ),
};

export default Statistics;
