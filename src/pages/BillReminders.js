import React, { useState } from 'react';
import '../styles/BillReminders.css';

function BillReminders() {
    const [bills, setBills] = useState([]);
    const [formData, setFormData] = useState({
        name: '',
        amount: '',
        dueDate: '',
        category: '',
        recurring: 'no',
        frequency: 'monthly'
    });

    const categories = [
        'Utilities',
        'Rent/Mortgage',
        'Insurance',
        'Subscriptions',
        'Credit Card',
        'Phone/Internet',
        'Other'
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        const newBill = {
            ...formData,
            id: Date.now(),
            status: 'pending',
            amount: parseFloat(formData.amount)
        };
        setBills([...bills, newBill]);
        setFormData({
            name: '',
            amount: '',
            dueDate: '',
            category: '',
            recurring: 'no',
            frequency: 'monthly'
        });
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const toggleBillStatus = (id) => {
        setBills(bills.map(bill =>
            bill.id === id
                ? { ...bill, status: bill.status === 'pending' ? 'paid' : 'pending' }
                : bill
        ));
    };

    const deleteBill = (id) => {
        setBills(bills.filter(bill => bill.id !== id));
    };

    const sortedBills = [...bills].sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));

    const getDaysUntilDue = (dueDate) => {
        const today = new Date();
        const due = new Date(dueDate);
        const diffTime = due - today;
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return diffDays;
    };

    return (
        <div className="bill-reminders">
            <div className="bills-container">
                <div className="add-bill-section">
                    <h2>Add New Bill</h2>
                    <form onSubmit={handleSubmit} className="bill-form">
                        <div className="form-row">
                            <div className="form-group">
                                <label>Bill Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="Enter bill name"
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
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label>Due Date</label>
                                <input
                                    type="date"
                                    name="dueDate"
                                    value={formData.dueDate}
                                    onChange={handleChange}
                                    required
                                />
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
                                    {categories.map(cat => (
                                        <option key={cat} value={cat.toLowerCase()}>{cat}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label>Recurring</label>
                                <select
                                    name="recurring"
                                    value={formData.recurring}
                                    onChange={handleChange}
                                >
                                    <option value="no">No</option>
                                    <option value="yes">Yes</option>
                                </select>
                            </div>

                            {formData.recurring === 'yes' && (
                                <div className="form-group">
                                    <label>Frequency</label>
                                    <select
                                        name="frequency"
                                        value={formData.frequency}
                                        onChange={handleChange}
                                    >
                                        <option value="weekly">Weekly</option>
                                        <option value="monthly">Monthly</option>
                                        <option value="yearly">Yearly</option>
                                    </select>
                                </div>
                            )}
                        </div>

                        <button type="submit" className="add-bill-btn">Add Bill</button>
                    </form>
                </div>

                <div className="bills-list-section">
                    <h2>Upcoming Bills</h2>
                    <div className="bills-list">
                        {sortedBills.map(bill => {
                            const daysUntilDue = getDaysUntilDue(bill.dueDate);
                            return (
                                <div
                                    key={bill.id}
                                    className={`bill-item ${bill.status} ${daysUntilDue <= 3 ? 'urgent' : ''}`}
                                >
                                    <div className="bill-info">
                                        <h3>{bill.name}</h3>
                                        <p className="amount">${bill.amount.toFixed(2)}</p>
                                        <p className="due-date">
                                            Due: {new Date(bill.dueDate).toLocaleDateString()}
                                            {daysUntilDue <= 3 && (
                                                <span className="urgent-tag">Due Soon!</span>
                                            )}
                                        </p>
                                        <p className="category">{bill.category}</p>
                                        {bill.recurring === 'yes' && (
                                            <p className="recurring">Recurring: {bill.frequency}</p>
                                        )}
                                    </div>
                                    <div className="bill-actions">
                                        <button
                                            className={`status-btn ${bill.status}`}
                                            onClick={() => toggleBillStatus(bill.id)}
                                        >
                                            {bill.status === 'pending' ? 'Mark as Paid' : 'Mark as Pending'}
                                        </button>
                                        <button
                                            className="delete-btn"
                                            onClick={() => deleteBill(bill.id)}
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            );
                        })}
                        {bills.length === 0 && (
                            <div className="no-bills">
                                <p>No bills added yet</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BillReminders;
