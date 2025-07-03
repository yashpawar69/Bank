'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { UserCog, LogIn } from 'lucide-react';
import Link from 'next/link';

export default function BankerLoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username && password) {
      // Simulate banker authentication
      console.log('Simulating banker login for:', username);
      router.push('/dashboard/banker');
    } else {
      setError('Please enter both username and password.');
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-secondary/40 p-4">
      <Card className="w-full max-w-md shadow-2xl">
        <form onSubmit={handleLogin}>
          <CardHeader className="text-center">
             <div className="mx-auto mb-4 bg-secondary p-3 rounded-full">
               <UserCog className="h-10 w-10 text-secondary-foreground" />
            </div>
            <CardTitle className="text-3xl font-headline">Banker Login</CardTitle>
            <CardDescription>For authorized personnel only.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                type="text"
                placeholder="banker_username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
             {error && <p className="text-sm text-destructive">{error}</p>}
          </CardContent>
          <CardFooter className="flex flex-col gap-4">
            <Button type="submit" className="w-full" variant="secondary">
              <LogIn className="mr-2 h-4 w-4" /> Access Dashboard
            </Button>
             <Button variant="link" size="sm" asChild>
                <Link href="/">Back to Home</Link>
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
