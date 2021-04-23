import React from 'react';
import PropTypes from 'prop-types';
import styles from '../transactions/Transaction.module.css';

const Transactions = ({ transactions }) => {
    return (
        <section className={styles.transactions}>
            <table className={styles['transaction-history']}>
                <thead className={styles['table-header']}>
                    <tr>
                        <th>Type</th>
                        <th>Amount</th>
                        <th>Currency</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map(transaction => {
                        return (
                            <tr key={transaction.id}>
                                <td>{transaction.type}</td>
                                <td>{transaction.amount}</td>
                                <td>{transaction.currency}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </section>
    );
};

Transactions.propTypes = {
    transactions: PropTypes.arrayOf(
        PropTypes.shape({
            type: PropTypes.string,
            amount: PropTypes.string,
            currency: PropTypes.string,
        }),
    ),
};

export default Transactions;
