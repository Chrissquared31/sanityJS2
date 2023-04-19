"use client"

import React, { useState } from 'react';

const NewsLetterForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    setMessage('');

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setEmail('');
        setStatus('success');
        setMessage ('Successfully subscribed!');
      } else {
        const { error } = await response.json();
        setStatus('error');
        setMessage(error || 'An error occurred. Please try again.');
      }
    } catch (error) {
      setStatus('error');
      setMessage('An error occurred. Please try again.');
    }
  };


  return (
    <div className="py-8">
      <h3 className="mb-3 px-20 font-bold ">Subscribe to our Newsletter</h3>
      {status === 'success' ? (
        <p>{message}</p>
      ) : (
        <form id="newsletter-form" onSubmit={handleFormSubmit} className="ml-20">
          <div className="flex items-center">
            <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600 h-10">
            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
            </span>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="rounded-md bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500  min-w-0 w-64 text-sm p-2.5 ml-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 h-10"
              required
            />
          </div>

          <button
            type="submit"
            disabled={status === 'sending'}
            className="px-4 py-3 font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-400 mx-auto mt-4"
          >
            {status === 'sending' ? 'Sending...' : 'Subscribe'}
          </button>
        </form>
      )}
      {status === 'error' && <p className="text-red-500">{message}</p>}
    </div>
  );
};

export default NewsLetterForm;
