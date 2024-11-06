import React, { useState } from 'react';
import '../styles/CurrencyExchange.css';

function CurrencyExchange() {
    const [amount, setAmount] = useState('');
    const [fromCurrency, setFromCurrency] = useState('USD');
    const [toCurrency, setToCurrency] = useState('EUR');
    const [result, setResult] = useState(null);

    // Mock exchange rates (in a real app, these would come from an API)
    const exchangeRates = {
        USD: { EUR: 0.85, GBP: 0.73, JPY: 110.25, AUD: 1.35 },
        EUR: { USD: 1.18, GBP: 0.86, JPY: 129.71, AUD: 1.59 },
        GBP: { USD: 1.37, EUR: 1.16, JPY: 150.83, AUD: 1.85 },
        JPY: { USD: 0.0091, EUR: 0.0077, GBP: 0.0066, AUD: 0.012 },
        AUD: { USD: 0.74, EUR: 0.63, GBP: 0.54, JPY: 81.67 }
    };

    const currencies = Object.keys(exchangeRates);

    const handleConvert = (e) => {
        e.preventDefault();
        if (fromCurrency === toCurrency) {
            setResult(parseFloat(amount));
            return;
        }
        const rate = exchangeRates[fromCurrency][toCurrency];
        const converted = parseFloat(amount) * rate;
        setResult(converted);
    };

    return (
        <div className="currency-exchange">
            <div className="exchange-container">
                <h1>Currency Exchange</h1>
                <div className="exchange-card">
                    <form onSubmit={handleConvert}>
                        <div className="form-group">
                            <label>Amount</label>
                            <input
                                type="number"
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                                placeholder="Enter amount"
                                required
                                min="0"
                                step="0.01"
                            />
                        </div>

                        <div className="currency-selectors">
                            <div className="form-group">
                                <label>From</label>
                                <select
                                    value={fromCurrency}
                                    onChange={(e) => setFromCurrency(e.target.value)}
                                >
                                    {currencies.map(currency => (
                                        <option key={currency} value={currency}>{currency}</option>
                                    ))}
                                </select>
                            </div>

                            <button type="button" className="swap-button" onClick={() => {
                                setFromCurrency(toCurrency);
                                setToCurrency(fromCurrency);
                            }}>
                                ⇄
                            </button>

                            <div className="form-group">
                                <label>To</label>
                                <select
                                    value={toCurrency}
                                    onChange={(e) => setToCurrency(e.target.value)}
                                >
                                    {currencies.map(currency => (
                                        <option key={currency} value={currency}>{currency}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <button type="submit" className="convert-btn">Convert</button>
                    </form>

                    {result !== null && (
                        <div className="result">
                            <h2>Result</h2>
                            <div className="conversion-result">
                                <p>
                                    {parseFloat(amount).toFixed(2)} {fromCurrency} =
                                </p>
                                <p className="converted-amount">
                                    {result.toFixed(2)} {toCurrency}
                                </p>
                            </div>
                            <p className="rate-info">
                                1 {fromCurrency} = {exchangeRates[fromCurrency][toCurrency].toFixed(4)} {toCurrency}
                            </p>
                        </div>
                    )}
                </div>

                <div className="exchange-rates">
                    <h2>Current Exchange Rates</h2>
                    <div className="rates-grid">
                        {currencies.map(from => (
                            <div key={from} className="rate-card">
                                <h3>{from}</h3>
                                <div className="rate-list">
                                    {currencies.filter(to => to !== from).map(to => (
                                        <div key={`${from}-${to}`} className="rate-item">
                                            <span>{to}:</span>
                                            <span>{exchangeRates[from][to].toFixed(4)}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CurrencyExchange;