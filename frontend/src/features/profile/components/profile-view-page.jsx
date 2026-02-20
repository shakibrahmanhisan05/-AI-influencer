import PageContainer from '@/components/layout/page-container';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

export default function ProfileViewPage() {
  return <PageContainer pageTitle='Profile' pageDescription='Manage your account profile settings'>
      <div className='grid grid-cols-1 gap-4 lg:grid-cols-3'>
        <Card className='lg:col-span-1'>
          <CardHeader>
            <CardTitle>Account</CardTitle>
            <CardDescription>Basic account information</CardDescription>
          </CardHeader>
          <CardContent className='space-y-4'>
            <div className='flex items-center gap-3'>
              <Avatar className='h-12 w-12'>
                <AvatarFallback>IU</AvatarFallback>
              </Avatar>
              <div>
                <p className='text-sm font-medium'>InfluenceAI User</p>
                <p className='text-muted-foreground text-xs'>user@example.com</p>
              </div>
            </div>
            <Button variant='outline' className='w-full'>Change avatar</Button>
          </CardContent>
        </Card>
        <Card className='lg:col-span-2'>
          <CardHeader>
            <CardTitle>Profile Details</CardTitle>
            <CardDescription>Update your personal information</CardDescription>
          </CardHeader>
          <CardContent className='space-y-4'>
            <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
              <div className='space-y-2'>
                <Label htmlFor='firstName'>First name</Label>
                <Input id='firstName' defaultValue='InfluenceAI' />
              </div>
              <div className='space-y-2'>
                <Label htmlFor='lastName'>Last name</Label>
                <Input id='lastName' defaultValue='User' />
              </div>
            </div>
            <div className='space-y-2'>
              <Label htmlFor='email'>Email</Label>
              <Input id='email' type='email' defaultValue='user@example.com' />
            </div>
            <div className='space-y-2'>
              <Label htmlFor='bio'>Bio</Label>
              <Textarea id='bio' defaultValue='Building AI-assisted social growth workflows.' rows={4} />
            </div>
            <div className='flex justify-end'>
              <Button>Save changes</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </PageContainer>;
}
