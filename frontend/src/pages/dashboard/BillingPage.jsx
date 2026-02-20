import PageContainer from '@/components/layout/page-container';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { billingInfoContent } from '@/config/infoconfig';

export default function BillingPage() {
  return <PageContainer pageTitle='Billing' pageDescription='Manage plans, seats, and invoices' infoContent={billingInfoContent}>
      <div className='grid grid-cols-1 gap-4 lg:grid-cols-3'>
        <Card className='lg:col-span-2'>
          <CardHeader>
            <CardTitle>Current Plan</CardTitle>
            <CardDescription>Mock billing page without Clerk integration</CardDescription>
          </CardHeader>
          <CardContent className='space-y-4'>
            <div className='flex items-center justify-between rounded-lg border p-4'>
              <div>
                <p className='font-medium'>Pro Plan</p>
                <p className='text-muted-foreground text-sm'>$29 / month</p>
              </div>
              <Badge>Active</Badge>
            </div>
            <div className='flex gap-2'>
              <Button>Upgrade Plan</Button>
              <Button variant='outline'>Manage Subscription</Button>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Usage</CardTitle>
            <CardDescription>Current cycle</CardDescription>
          </CardHeader>
          <CardContent className='space-y-3 text-sm'>
            <div className='flex items-center justify-between'>
              <span className='text-muted-foreground'>Team members</span>
              <span>8 / 20</span>
            </div>
            <div className='flex items-center justify-between'>
              <span className='text-muted-foreground'>AI replies</span>
              <span>12,340 / 50,000</span>
            </div>
            <div className='flex items-center justify-between'>
              <span className='text-muted-foreground'>Connected pages</span>
              <span>4 / 10</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </PageContainer>;
}
