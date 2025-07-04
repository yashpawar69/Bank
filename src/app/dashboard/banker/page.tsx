import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { accounts, customers } from '@/lib/mock-data';
import { Eye } from 'lucide-react';

export default function BankerDashboardPage() {
  const customerData = customers.map(customer => {
    const account = accounts.find(acc => acc.customerId === customer.id);
    return {
      ...customer,
      balance: account?.balance ?? 0,
      accountId: account?.id
    };
  });

  return (
    <div className="container mx-auto p-4 md:p-8">
      <h1 className="text-4xl font-bold font-headline mb-2">Banker Dashboard</h1>
      <p className="text-muted-foreground mb-8">Overview of all customer accounts.</p>
      
      <Card>
        <CardHeader>
          <CardTitle className="font-headline text-2xl">Customer Accounts</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Customer Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Username</TableHead>
                <TableHead className="text-right">Balance</TableHead>
                <TableHead className="text-center">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {customerData.map((customer) => (
                <TableRow key={customer.id}>
                  <TableCell className="font-medium">{customer.name}</TableCell>
                  <TableCell>{customer.email}</TableCell>
                  <TableCell>{customer.username}</TableCell>
                  <TableCell className="text-right font-mono">${customer.balance.toFixed(2)}</TableCell>
                  <TableCell className="text-center">
                    <Button asChild variant="outline" size="sm">
                      <Link href={`/dashboard/banker/${customer.id}`}>
                        <Eye className="mr-2 h-4 w-4" /> View History
                      </Link>
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
