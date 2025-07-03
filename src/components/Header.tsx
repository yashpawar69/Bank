'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Landmark, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';

export function Header() {
  const router = useRouter();
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedToken = sessionStorage.getItem('dummyToken');
      setToken(storedToken);
    }
  }, []);

  const handleLogout = () => {
    // In a real app, this would also clear the auth token.
    if (typeof window !== 'undefined') {
      sessionStorage.removeItem('dummyToken');
    }
    router.push('/');
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Landmark className="h-6 w-6 text-primary" />
          <span className="font-bold font-headline text-lg">BankBook</span>
        </Link>
        <div className="flex flex-1 items-center justify-end space-x-4">
          {token && (
            <div className="text-xs text-muted-foreground font-mono bg-secondary px-2 py-1 rounded">
              <span className="font-semibold text-primary/80">TOKEN:</span> {token}
            </div>
          )}
          <Button variant="ghost" onClick={handleLogout}>
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </Button>
        </div>
      </div>
    </header>
  );
}
