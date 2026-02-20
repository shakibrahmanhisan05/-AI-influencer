import PageContainer from '@/components/layout/page-container';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { workspacesInfoContent } from '@/config/infoconfig';
import { IconBuilding, IconUsers } from '@tabler/icons-react';

const mockWorkspaces = [{
  id: 'ws_1',
  name: 'InfluenceAI',
  members: 8,
  plan: 'Pro'
}, {
  id: 'ws_2',
  name: 'Creator Studio',
  members: 3,
  plan: 'Starter'
}];

export default function WorkspacesPage() {
  return <PageContainer pageTitle='Workspaces' pageDescription='Manage your organizations and team spaces' infoContent={workspacesInfoContent} pageHeaderAction={<Button>Create Workspace</Button>}>
      <div className='grid grid-cols-1 gap-4 lg:grid-cols-2'>
        {mockWorkspaces.map(workspace => <Card key={workspace.id}>
            <CardHeader className='flex-row items-start justify-between space-y-0'>
              <div>
                <CardTitle className='flex items-center gap-2'>
                  <IconBuilding className='h-4 w-4' />
                  {workspace.name}
                </CardTitle>
                <CardDescription>Workspace ID: {workspace.id}</CardDescription>
              </div>
              <Badge variant='outline'>{workspace.plan}</Badge>
            </CardHeader>
            <CardContent className='flex items-center justify-between'>
              <div className='text-muted-foreground flex items-center gap-2 text-sm'>
                <IconUsers className='h-4 w-4' />
                {workspace.members} members
              </div>
              <Button variant='outline' size='sm'>Open</Button>
            </CardContent>
          </Card>)}
      </div>
    </PageContainer>;
}
