'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import { ArrowDownCircle, ArrowUpCircle } from 'lucide-react';

interface TransactionDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  type: 'Deposit' | 'Withdrawal';
  currentBalance: number;
  onTransaction: (amount: number) => void;
}

export function TransactionDialog({
  open,
  onOpenChange,
  type,
  currentBalance,
  onTransaction,
}: TransactionDialogProps) {
  const [amount, setAmount] = useState('');
  const [error, setError] = useState('');
  const { toast } = useToast();

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError('');
    const value = e.target.value;
    if (/^\d*\.?\d{0,2}$/.test(value)) {
      setAmount(value);
    }
  };

  const handleSubmit = () => {
    const numericAmount = parseFloat(amount);
    if (isNaN(numericAmount) || numericAmount <= 0) {
      setError('Please enter a valid positive amount.');
      return;
    }

    if (type === 'Withdrawal' && numericAmount > currentBalance) {
      toast({
        variant: 'destructive',
        title: 'Insufficient Funds',
        description: `You cannot withdraw more than your available balance of $${currentBalance.toFixed(2)}.`,
      });
      return;
    }

    onTransaction(numericAmount);
    setAmount('');
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 font-headline text-2xl">
            {type === 'Deposit' ? (
                <ArrowUpCircle className="h-8 w-8 text-green-500" />
            ) : (
                <ArrowDownCircle className="h-8 w-8 text-red-500" />
            )}
            Make a {type}
          </DialogTitle>
          <DialogDescription>
            Your current balance is ${currentBalance.toFixed(2)}. Enter the amount you wish to {type.toLowerCase()}.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="amount" className="text-right">
              Amount
            </Label>
            <Input
              id="amount"
              value={amount}
              onChange={handleAmountChange}
              className="col-span-3"
              placeholder="0.00"
              autoFocus
            />
          </div>
          {error && <p className="col-span-4 text-right text-sm text-destructive">{error}</p>}
        </div>
        <DialogFooter>
          <Button
            onClick={handleSubmit}
            className={cn(
              'w-full',
              type === 'Deposit' ? 'bg-green-600 hover:bg-green-700' : 'bg-red-600 hover:bg-red-700',
              'text-white'
            )}
          >
            Confirm {type}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
