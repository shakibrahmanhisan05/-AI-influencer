import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
export function UserAvatarProfile({
  className,
  showInfo = false,
  user
}) {
  const name = user?.fullName || `${user?.firstName ?? ''} ${user?.lastName ?? ''}`.trim() || 'User';
  const email = user?.emailAddresses?.[0]?.emailAddress || user?.primaryEmailAddress?.emailAddress || '';

  return <div className='flex items-center gap-2'>
      <Avatar className={className}>
        <AvatarImage src={user?.imageUrl || ''} alt={name} />
        <AvatarFallback className='rounded-lg'>
          {name.slice(0, 2).toUpperCase()}
        </AvatarFallback>
      </Avatar>

      {showInfo && <div className='grid flex-1 text-left text-sm leading-tight'>
          <span className='truncate font-semibold'>{name}</span>
          <span className='truncate text-xs'>{email}</span>
        </div>}
    </div>;
}
