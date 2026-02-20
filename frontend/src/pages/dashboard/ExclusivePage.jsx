import PageContainer from '@/components/layout/page-container';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { IconSparkles } from '@tabler/icons-react';

export default function ExclusivePage() {
  return <PageContainer pageTitle='Exclusive' pageDescription='Premium capabilities and early-access features'>
      <Card>
        <CardHeader>
          <CardTitle className='flex items-center gap-2'>
            <IconSparkles className='h-5 w-5' />
            Pro Features
          </CardTitle>
          <CardDescription>This is a mock Clerk-free exclusive page.</CardDescription>
        </CardHeader>
        <CardContent className='space-y-3'>
          <p className='text-muted-foreground text-sm'>
            Unlock advanced automations, deeper analytics, and enhanced campaign controls.
          </p>
          <Button>Upgrade to Pro</Button>
        </CardContent>
      </Card>
    </PageContainer>;
}
