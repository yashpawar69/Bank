# **App Name**: BankBook

## Core Features:

- Customer Login: Customer login page with username/email and password fields. Access token (36-character alphanumeric string) generated upon successful login, and used as header (Authorization) for subsequent API requests.
- Transaction Page: Transactions page for customers, displaying all transaction records. Has Deposit and Withdraw buttons. Clicking a button opens a popup showing the available balance and a numeric input field.
- Balance Logic: Customer Balance Update. Deduct or add to balance based on user input. Display a message ("Insufficient Funds") if the withdrawal amount exceeds the available balance.
- Banker Login: Banker login page.
- Accounts Page: Accounts page for bankers displaying all customer accounts. Bankers can click on a user to view their transaction history.

## Style Guidelines:

- Primary color: HSL(210, 67%, 47%) – a moderate blue suggests stability, trust, and responsibility. Hex: #388BF2
- Background color: HSL(210, 20%, 95%) – a very light, desaturated blue (almost white) that complements the primary color and provides a clean backdrop. Hex: #F0F4F8
- Accent color: HSL(180, 50%, 50%) – a balanced cyan that contrasts with the primary color to draw attention to important actions. Hex: #40BFBF
- Body font: 'Inter' (sans-serif) - a modern, neutral font for clear, readable text.
- Headline font: 'Space Grotesk' (sans-serif) - a techy, scientific font for headlines and titles, for a contrast with the body font.
- Simple, clear icons for transactions (deposits/withdrawals) and account-related actions.
- Clean and intuitive layout for transaction pages and account overviews.
- Subtle animations for balance updates and transaction confirmations to provide smooth user feedback.