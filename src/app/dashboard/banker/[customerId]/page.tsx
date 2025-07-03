import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { accounts, customers } from '@/lib/mock-data';
import { cn } from '@/lib/utils';
import { ArrowLeft } from 'lucide-react';

interface CustomerDetailsPageProps {
  params: {
    customerId: string;
  };
}

export default function CustomerDetailsPage({ params }: CustomerDetailsPageProps) {
  const customer = customers.find(c => c.id === params.customerId);
  const account = accounts.find(a => a.customerId === params.customerId);

  if (!customer || !account) {
    notFound();
  }

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="mb-8">
        <Button asChild variant="outline">
          <Link href="/dashboard/banker">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to All Accounts
          </Link>
        </Button>
      </div>

      <div className="flex flex-col md:flex-row gap-8 items-start">
        <Card className="w-full md:w-1/3 h-fit">
          <CardHeader>
            <CardTitle className="font-headline text-2xl">{customer.name}</CardTitle>
            <CardDescription>{customer.email}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 text-sm">
              <p><span className="font-semibold">Username:</span> {customer.username}</p>
              <p><span className="font-semibold">Customer ID:</span> {customer.id}</p>
              <p><span className="font-semibold">Account ID:</span> {account.id}</p>
              <div className="pt-4">
                <p className="text-muted-foreground">Current Balance</p>
                <p className="text-3xl font-bold text-primary">${account.balance.toFixed(2)}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="flex-1">
          <CardHeader>
            <CardTitle className="font-headline text-2xl">Transaction History</CardTitle>
            <CardDescription>All transactions for {customer.name}.</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead className="text-right">Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {account.transactions.map((tx) => (
                  <TableRow key={tx.id}>
                    <TableCell className="font-medium">{new Date(tx.date).toLocaleDateString()}</TableCell>
                    <TableCell>{tx.description}</TableCell>
                    <TableCell>
                      <Badge variant={tx.type === 'Deposit' ? 'default' : 'secondary'} className={cn(tx.type === 'Deposit' ? 'bg-green-100 text-green-800 border-green-200' : 'bg-red-100 text-red-800 border-red-200')}>
                        {tx.type}
                      </Badge>
                    </TableCell>
                    <TableCell className={cn(
                      'text-right font-semibold',
                      tx.type === 'Deposit' ? 'text-green-600' : 'text-red-600'
                    )}>
                      {tx.type === 'Deposit' ? '+' : '-'} ${tx.amount.toFixed(2)}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
