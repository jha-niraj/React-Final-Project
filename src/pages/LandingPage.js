import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/LandingPage.css';

function LandingPage() {
    const navigate = useNavigate();

    return (
        <div className="landing-page">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-content">
                    <h1 className="animate-text">Smart Financial Management</h1>
                    <p className="animate-text-delay">Your all-in-one solution for expense tracking, currency exchange, and financial planning</p>
                    <button
                        className="cta-button"
                        onClick={() => navigate('/expense-tracker')}
                    >
                        Get Started
                    </button>
                </div>
                <div className="hero-stats">
                    <div className="stat-item">
                        <span className="stat-number">10K+</span>
                        <span className="stat-label">Active Users</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-number">150+</span>
                        <span className="stat-label">Countries</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-number">$1M+</span>
                        <span className="stat-label">Tracked Monthly</span>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="features-section">
                <h2>Why Choose Our Platform?</h2>
                <div className="features-grid">
                    <div className="feature-card">
                        <div className="feature-icon">📊</div>
                        <h3>Smart Analytics</h3>
                        <p>Advanced insights into your spending patterns with AI-powered analysis</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">🔒</div>
                        <h3>Bank-Grade Security</h3>
                        <p>Your financial data is protected with state-of-the-art encryption</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">📱</div>
                        <h3>Cross-Platform</h3>
                        <p>Access your finances anywhere, anytime, on any device</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">🎯</div>
                        <h3>Goal Setting</h3>
                        <p>Set and track financial goals with personalized recommendations</p>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="services-section">
                <h2>Our Financial Services</h2>
                <div className="services-grid">
                    <div className="service-card">
                        <div className="service-content">
                            <h3>Expense Tracker</h3>
                            <p>Track your daily expenses, create budgets, and get insights into your spending habits.</p>
                            <ul className="service-features">
                                <li>Categorized spending analysis</li>
                                <li>Budget planning tools</li>
                                <li>Custom reports and exports</li>
                            </ul>
                            <button onClick={() => navigate('/expense-tracker')} className="service-btn">
                                Try Expense Tracker
                            </button>
                        </div>
                    </div>

                    <div className="service-card">
                        <div className="service-content">
                            <h3>Currency Exchange</h3>
                            <p>Real-time currency conversion rates and multi-currency expense tracking.</p>
                            <ul className="service-features">
                                <li>Live exchange rates</li>
                                <li>Multi-currency support</li>
                                <li>Historical rate charts</li>
                            </ul>
                            <button onClick={() => navigate('/currency-exchange')} className="service-btn">
                                Try Currency Exchange
                            </button>
                        </div>
                    </div>

                    <div className="service-card">
                        <div className="service-content">
                            <h3>Bill Reminders</h3>
                            <p>Never miss a payment with automated bill tracking and reminders.</p>
                            <ul className="service-features">
                                <li>Payment scheduling</li>
                                <li>Email notifications</li>
                                <li>Recurring bill tracking</li>
                            </ul>
                            <button onClick={() => navigate('/bill-reminders')} className="service-btn">
                                Try Bill Reminders
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQs Section */}
            <section className="faqs-section">
                <h2>Frequently Asked Questions</h2>
                <div className="faq-grid">
                    <div className="faq-item">
                        <h3>Is my financial data secure?</h3>
                        <p>Yes, we use bank-level encryption and never store sensitive banking credentials.</p>
                    </div>
                    <div className="faq-item">
                        <h3>What currencies are supported?</h3>
                        <p>We support 150+ currencies with real-time exchange rates.</p>
                    </div>
                    <div className="faq-item">
                        <h3>Is there a mobile app?</h3>
                        <p>Yes, our apps are available for both iOS and Android devices.</p>
                    </div>
                    <div className="faq-item">
                        <h3>Can I export my data?</h3>
                        <p>Export your data anytime in CSV, PDF, or Excel formats.</p>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="testimonials-section">
                <h2>What Our Users Say</h2>
                <div className="testimonials-grid">
                    <div className="testimonial-card">
                        <div className="testimonial-rating">★★★★★</div>
                        <p>"The best financial management platform I've ever used. The currency exchange feature is a game-changer!"</p>
                        <div className="testimonial-author">
                            <img src="https://i.pravatar.cc/150?img=1" alt="Sarah J." className="author-image" />
                            <div className="author-details">
                                <h4>Sarah Johnson</h4>
                                <p>Digital Nomad</p>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial-card">
                        <div className="testimonial-rating">★★★★★</div>
                        <p>"Finally got my finances under control. The expense tracking and budgeting tools are exceptional."</p>
                        <div className="testimonial-author">
                            <img src="https://i.pravatar.cc/150?img=2" alt="Mike R." className="author-image" />
                            <div className="author-details">
                                <h4>Mike Rodriguez</h4>
                                <p>Small Business Owner</p>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial-card">
                        <div className="testimonial-rating">★★★★★</div>
                        <p>"The bill reminder feature has saved me from late payments multiple times. Highly recommended!"</p>
                        <div className="testimonial-author">
                            <img src="https://i.pravatar.cc/150?img=3" alt="Lisa M." className="author-image" />
                            <div className="author-details">
                                <h4>Lisa Martinez</h4>
                                <p>Financial Advisor</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default LandingPage;