import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Landmark, ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-background">
      <div className="flex flex-col items-center text-center">
        <Landmark className="w-16 h-16 text-primary mb-4" />
        <h1 className="text-5xl font-bold font-headline text-foreground mb-8">
          Welcome to Bank
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
        <Card className="hover:shadow-lg transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="font-headline text-2xl">For Customers</CardTitle>
            <CardDescription>
              Access your account, view transactions, and manage your funds.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="/login/customer" passHref>
              <Button className="w-full" size="lg">
                Customer Login <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </CardContent>
        </Card>
        
        <Card className="hover:shadow-lg transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="font-headline text-2xl">For Bankers</CardTitle>
            <CardDescription>
              Manage customer accounts and view transaction histories.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="/login/banker" passHref>
              <Button className="w-full" variant="secondary" size="lg">
                Banker Login <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
