import React, { useState } from "react";

const CurrencyConverter = () => {
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [amount, setAmount] = useState("");
  const [convertedAmount, setonvertedAmount] = useState("0.00");

  const calculateCurr = () => {
    if (fromCurrency == toCurrency) {
      setonvertedAmount((amount * 1).toFixed(2));
    } else if (fromCurrency == "USD" && toCurrency == "INR") {
      setonvertedAmount((amount * 84.07).toFixed(2));
    } else if (fromCurrency == "USD" && toCurrency == "EUR") {
      setonvertedAmount((amount * 0.92).toFixed(2));
    } else if (fromCurrency == "USD" && toCurrency == "GBP") {
      setonvertedAmount((amount * 0.77).toFixed(2));
    } else if (fromCurrency == "INR" && toCurrency == "USD") {
      setonvertedAmount((amount * 0.012).toFixed(2));
    } else if (fromCurrency == "INR" && toCurrency == "EUR") {
      setonvertedAmount((amount * 0.011).toFixed(2));
    } else if (fromCurrency == "INR" && toCurrency == "GBP") {
      setonvertedAmount((amount * 0.0092).toFixed(2));
    } else if (fromCurrency == "EUR" && toCurrency == "USD") {
      setonvertedAmount((amount * 1.09).toFixed(2));
    } else if (fromCurrency == "EUR" && toCurrency == "INR") {
      setonvertedAmount((amount * 91.36).toFixed(2));
    } else if (fromCurrency == "EUR" && toCurrency == "GBP") {
      setonvertedAmount((amount * 0.84).toFixed(2));
    } else if (fromCurrency == "GBP" && toCurrency == "USD") {
      setonvertedAmount((amount * 1.29).toFixed(2));
    } else if (fromCurrency == "GBP" && toCurrency == "INR") {
      setonvertedAmount((amount * 108.63).toFixed(2));
    } else if (fromCurrency == "GBP" && toCurrency == "EUR") {
      setonvertedAmount((amount * 1.19).toFixed(2));
    }
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 p-4">
      <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8  md:w-2/5">
        <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-gray-800">
          Currency Converter
        </h1>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Amount
          </label>
          <input
            type="number"
            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>

        <div className="flex space-x-4 mb-4">
          <div className="w-1/2">
            <label className="block text-sm font-medium text-gray-700">
              From
            </label>
            <select
              value={fromCurrency}
              onChange={(e) => setFromCurrency(e.target.value)}
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="GBP">GBP</option>
              <option value="INR">INR</option>
            </select>
          </div>

          <div className="w-1/2">
            <label className="block text-sm font-medium text-gray-700">
              To
            </label>
            <select
              value={toCurrency}
              onChange={(e) => setToCurrency(e.target.value)}
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="GBP">GBP</option>
              <option value="INR">INR</option>
            </select>
          </div>
        </div>

        <button
          className="w-full bg-blue-500 text-white font-semibold py-3 rounded-md hover:bg-blue-600 transition duration-300"
          onClick={() => calculateCurr(fromCurrency, toCurrency, amount)}
        >
          Convert
        </button>

        <div className="mt-6 text-center">
          <p className="text-gray-600">Conversion Result</p>
          <p className="text-2xl font-bold text-gray-800">
            {convertedAmount} {toCurrency}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CurrencyConverter;
