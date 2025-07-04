# Simple Banking System

This is a basic banking system built using Node.js, React.js, and MySQL. The system follows the MVC (Model-View-Controller) architecture and provides separate login portals for customers and bankers. Customers can deposit and withdraw funds, while bankers can monitor customer accounts.

## Tech Stack

- Backend: Node.js (Express)
- Frontend: React.js
- Database: MySQL
- Architecture: MVC
- Authentication: Access Token (36-character random string)

## Features

### Authentication
- Separate login pages for customers and bankers
- Generates a 36-character access token upon successful login
- Access token is required in the Authorization header for API requests

### Banker
- Secure login for bankers
- Dashboard listing all customer accounts
- Click on any customer to view their full transaction history

### Customer
- Secure login for customers
- Transaction dashboard displaying current balance and transaction history
- Deposit and Withdraw buttons with popup UI
- Popup shows:
  - Available balance
  - Numeric input for amount
  - Message if withdrawal exceeds available funds
