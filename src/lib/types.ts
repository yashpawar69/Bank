export type Transaction = {
  id: string;
  date: string;
  description: string;
  type: 'Deposit' | 'Withdrawal';
  amount: number;
};

export type Account = {
  id: string;
  customerId: string;
  balance: number;
  transactions: Transaction[];
};

export type Customer = {
  id: string;
  name: string;
  email: string;
  username: string;
};
