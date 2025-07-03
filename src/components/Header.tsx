'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Landmark, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Header() {
  const router = useRouter();

  const handleLogout = () => {
    // In a real app, this would also clear the auth token.
    router.push('/');
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Landmark className="h-6 w-6 text-primary" />
          <span className="font-bold font-headline text-lg">BankBook</span>
        </Link>
        <div className="flex flex-1 items-center justify-end">
          <Button variant="ghost" onClick={handleLogout}>
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </Button>
        </div>
      </div>
    </header>
  );
}
