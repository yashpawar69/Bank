import type { Customer, Account } from './types';

export const customers: Customer[] = [
  { id: '1', name: 'Yash', email: 'yash@example.com', username: 'yash' },
  { id: '2', name: 'Rahul', email: 'rahul@example.com', username: 'rahul' },
  { id: '3', name: 'Akash', email: 'akash@example.com', username: 'akash' },
];

export const accounts: Account[] = [
  {
    id: 'acc1',
    customerId: '1',
    balance: 5430.50,
    transactions: [
      { id: 't1', date: '2024-07-28', description: 'Salary', type: 'Deposit', amount: 3000.00 },
      { id: 't2', date: '2024-07-27', description: 'Groceries', type: 'Withdrawal', amount: 150.25 },
      { id: 't3', date: '2024-07-26', description: 'Online Shopping', type: 'Withdrawal', amount: 250.75 },
      { id: 't4', date: '2024-07-25', description: 'Initial Deposit', type: 'Deposit', amount: 2831.50 },
    ],
  },
  {
    id: 'acc2',
    customerId: '2',
    balance: 10250.00,
    transactions: [
      { id: 't5', date: '2024-07-29', description: 'Client Payment', type: 'Deposit', amount: 5000.00 },
      { id: 't6', date: '2024-07-28', description: 'Rent', type: 'Withdrawal', amount: 1200.00 },
      { id: 't7', date: '2024-07-20', description: 'Initial Deposit', type: 'Deposit', amount: 6450.00 },
    ],
  },
  {
    id: 'acc3',
    customerId: '3',
    balance: 850.75,
    transactions: [
        { id: 't8', date: '2024-07-29', description: 'Book Store', type: 'Withdrawal', amount: 49.25 },
        { id: 't9', date: '2024-07-28', description: 'Cash Deposit', type: 'Deposit', amount: 900.00 },
    ],
  },
];
