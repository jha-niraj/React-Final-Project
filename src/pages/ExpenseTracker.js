import React, { useState } from 'react';
import '../styles/ExpenseTracker.css';

function ExpenseTracker() {
    const [transactions, setTransactions] = useState([]);
    const [formData, setFormData] = useState({
        description: '',
        amount: '',
        type: 'expense',
        category: '',
        date: new Date().toISOString().split('T')[0]
    });

    const categories = {
        expense: ['Food', 'Transport', 'Utilities', 'Entertainment', 'Shopping', 'Healthcare', 'Other'],
        income: ['Salary', 'Freelance', 'Investments', 'Other']
    };

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

    const calculateTotal = (type) => {
        return transactions
            .filter(t => t.type === type)
            .reduce((acc, curr) => acc + curr.amount, 0);
    };

    const totalExpenses = calculateTotal('expense');
    const totalIncome = calculateTotal('income');
    const balance = totalIncome - totalExpenses;

    return (
        <div className="expense-tracker">
            <div className="summary-cards">
                <div className="summary-card income">
                    <h3>Total Income</h3>
                    <p>${totalIncome.toFixed(2)}</p>
                </div>
                <div className="summary-card expenses">
                    <h3>Total Expenses</h3>
                    <p>${totalExpenses.toFixed(2)}</p>
                </div>
                <div className="summary-card balance">
                    <h3>Balance</h3>
                    <p>${balance.toFixed(2)}</p>
                </div>
            </div>

            <div className="main-content">
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
                                placeholder="Enter description"
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
                                placeholder="Enter amount"
                                step="0.01"
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
                                {categories[formData.type].map(cat => (
                                    <option key={cat} value={cat.toLowerCase()}>{cat}</option>
                                ))}
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
                        {transactions.length === 0 && (
                            <div className="no-transactions">
                                <p>No transactions yet</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ExpenseTracker;