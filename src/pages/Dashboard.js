import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Dashboard.css';

function Dashboard() {
    const navigate = useNavigate();

    const services = [
        {
            name: 'Expense Tracker',
            description: 'Track your daily, weekly, and monthly expenses to manage your finances better.',
            motives: [
                'To help you save by providing an overview of your spending.',
                'To allow budgeting and tracking against monthly goals.',
                'To gain insights into spending habits over time.',
            ],
            link: '/expense-tracker',
        },
        {
            name: 'Currency Exchange',
            description: 'Get the latest exchange rates and convert between different currencies with ease.',
            motives: [
                'Provide accurate, real-time exchange rates.',
                'Enable easy conversions for travelers and businesses.',
                'Support financial planning with currency fluctuations.',
            ],
            link: '/currency-exchange',
        },
        {
            name: 'Bills Management',
            description: 'Set reminders for upcoming bills, categorize them, and track payments.',
            motives: [
                'Avoid late payments with timely reminders.',
                'Help you keep an organized record of all bills.',
                'Provide insights into monthly recurring payments.',
            ],
            link: '/bill-reminders',
        },
    ];

    return (
        <div className="dashboard">
            <h1>SmartFinance Dashboard</h1>
            <p>Welcome to SmartFinance! Explore our financial utilities below to take control of your finances.</p>
            <div className="services-section">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="service-card"
                        onClick={() => navigate(service.link)}
                    >
                        <h2>{service.name}</h2>
                        <p>{service.description}</p>
                        <h3>Motives</h3>
                        <ul>
                            {service.motives.map((motive, i) => (
                                <li key={i}>{motive}</li>
                            ))}
                        </ul>
                        <button className="explore-btn">Explore {service.name}</button>
                    </div>
                ))}
            </div>

            <div className="coming-soon">
                <h2>More Utilities Coming Soon!</h2>
                <p>Stay tuned for additional features to help you manage your finances even better.</p>
            </div>
        </div>
    );
}

export default Dashboard;
