import React, { useState } from 'react';
import '../styles/Dashboard.css';

function Dashboard() {
    const [transactions, setTransactions] = useState([]);
    const [formData, setFormData] = useState({
        description: '',
        amount: '',
        type: 'expense',
        category: '',
        date: new Date().toISOString().split('T')[0]
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTransaction = {
            ...formData,
            id: Date.now(),
            amount: parseFloat(formData.amount)
        };
        setTransactions([newTransaction, ...transactions]);
        setFormData({
            description: '',
            amount: '',
            type: 'expense',
            category: '',
            date: new Date().toISOString().split('T')[0]
        });
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="dashboard">
            <div className="transaction-form-container">
                <h2>Add New Transaction</h2>
                <form onSubmit={handleSubmit} className="transaction-form">
                    <div className="form-group">
                        <label>Description</label>
                        <input
                            type="text"
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Amount</label>
                        <input
                            type="number"
                            name="amount"
                            value={formData.amount}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Type</label>
                        <select
                            name="type"
                            value={formData.type}
                            onChange={handleChange}
                        >
                            <option value="expense">Expense</option>
                            <option value="income">Income</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label>Category</label>
                        <select
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select Category</option>
                            <option value="food">Food</option>
                            <option value="transport">Transport</option>
                            <option value="utilities">Utilities</option>
                            <option value="entertainment">Entertainment</option>
                            <option value="shopping">Shopping</option>
                            <option value="other">Other</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label>Date</label>
                        <input
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <button type="submit" className="submit-btn">Add Transaction</button>
                </form>
            </div>

            <div className="transaction-history">
                <h2>Transaction History</h2>
                <div className="transactions-list">
                    {transactions.map(transaction => (
                        <div
                            key={transaction.id}
                            className={`transaction-item ${transaction.type}`}
                        >
                            <div className="transaction-info">
                                <h3>{transaction.description}</h3>
                                <p>{transaction.category}</p>
                                <small>{transaction.date}</small>
                            </div>
                            <div className="transaction-amount">
                                {transaction.type === 'expense' ? '-' : '+'}${Math.abs(transaction.amount).toFixed(2)}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Dashboard;