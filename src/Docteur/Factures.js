import React, { useState } from 'react';
import axios from 'axios';

const InvoiceForm = () => {
    const [invoiceNumber, setInvoiceNumber] = useState('');
    const [customerName, setCustomerName] = useState('');
    const [amount, setAmount] = useState('');

    const handleInvoiceNumberChange = (e) => {
        setInvoiceNumber(e.target.value);
    };

    const handleCustomerNameChange = (e) => {
        setCustomerName(e.target.value);
    };

    const handleAmountChange = (e) => {
        setAmount(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('/invoices', {
                invoiceNumber,
                customerName,
                amount,
            });

            // Clear the form fields
            setInvoiceNumber('');
            setCustomerName('');
            setAmount('');

            // Show success message
            alert('Invoice created successfully.');
        } catch (error) {
            if (error.response && error.response.data && error.response.data.message) {
                // Show error message from the server
                alert(error.response.data.message);
            } else {
                // Show a generic error message
                alert('An error occurred while creating the invoice.');
            }
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="invoiceNumber">Invoice Number:</label>
                <input
                    type="text"
                    id="invoiceNumber"
                    value={invoiceNumber}
                    onChange={handleInvoiceNumberChange}
                />
            </div>
            <div>
                <label htmlFor="customerName">Customer Name:</label>
                <input
                    type="text"
                    id="customerName"
                    value={customerName}
                    onChange={handleCustomerNameChange}
                />
            </div>
            <div>
                <label htmlFor="amount">Amount: ( $ )</label>
                <input
                    type="text"
                    id="amount"
                    value={amount}
                    onChange={handleAmountChange}
                />
            </div>
            <button type="submit">Create Invoice</button>
        </form>
    );
};

export default InvoiceForm;