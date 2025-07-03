'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { ArrowDownCircle, ArrowUpCircle, DollarSign } from 'lucide-react';
import { accounts as mockAccounts } from '@/lib/mock-data';
import type { Account, Transaction } from '@/lib/types';
import { TransactionDialog } from '@/components/customer/TransactionDialog';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';

export default function CustomerDashboardPage() {
  // We'll use the first account for this demo
  const [account, setAccount] = useState<Account>(mockAccounts[0]);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [transactionType, setTransactionType] = useState<'Deposit' | 'Withdrawal'>('Deposit');
  const { toast } = useToast();

  const handleOpenDialog = (type: 'Deposit' | 'Withdrawal') => {
    setTransactionType(type);
    setDialogOpen(true);
  };
  
  const handleTransaction = (amount: number) => {
    const newBalance = transactionType === 'Deposit' ? account.balance + amount : account.balance - amount;
    
    const newTransaction: Transaction = {
      id: `t${new Date().getTime()}`,
      date: new Date().toISOString().split('T')[0],
      description: `${transactionType} via App`,
      type: transactionType,
      amount: amount,
    };

    setAccount({
      ...account,
      balance: newBalance,
      transactions: [newTransaction, ...account.transactions],
    });

    toast({
        title: "Transaction Successful",
        description: `Your ${transactionType.toLowerCase()} of $${amount.toFixed(2)} has been processed.`,
    });
  };

  return (
    <div className="container mx-auto p-4 md:p-8">
      <h1 className="text-4xl font-bold font-headline mb-8">Your Dashboard</h1>
      
      <div className="grid gap-8 md:grid-cols-3">
        <div className="md:col-span-2 space-y-8">
          <Card className="shadow-lg">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Available Balance</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-5xl font-bold font-headline text-primary transition-all duration-300">
                ${account.balance.toFixed(2)}
              </div>
              <p className="text-xs text-muted-foreground pt-2">Manage your funds below</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="font-headline text-2xl">Transaction History</CardTitle>
              <CardDescription>A record of your recent deposits and withdrawals.</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {account.transactions.map((tx) => (
                    <TableRow key={tx.id}>
                      <TableCell className="font-medium">{new Date(tx.date).toLocaleDateString()}</TableCell>
                      <TableCell>{tx.description}</TableCell>
                      <TableCell className={cn(
                        'text-right font-semibold flex items-center justify-end gap-2',
                        tx.type === 'Deposit' ? 'text-green-600' : 'text-red-600'
                      )}>
                        {tx.type === 'Deposit' ? '+' : '-'} ${tx.amount.toFixed(2)}
                        {tx.type === 'Deposit' ? <Badge variant="outline" className="text-green-600 border-green-600">Deposit</Badge> : <Badge variant="outline" className="text-red-600 border-red-600">Withdrawal</Badge>}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-4">
          <Card className="h-fit">
            <CardHeader>
              <CardTitle className="font-headline">Actions</CardTitle>
              <CardDescription>Quickly manage your account.</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white" onClick={() => handleOpenDialog('Deposit')}>
                <ArrowUpCircle className="mr-2 h-5 w-5" /> Deposit
              </Button>
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white" onClick={() => handleOpenDialog('Withdrawal')}>
                <ArrowDownCircle className="mr-2 h-5 w-5" /> Withdraw
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      <TransactionDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        type={transactionType}
        currentBalance={account.balance}
        onTransaction={handleTransaction}
      />
    </div>
  );
}
