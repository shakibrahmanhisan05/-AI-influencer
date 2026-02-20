'use client';

import { Badge } from '@/components/ui/badge';
import { DataTableColumnHeader } from '@/components/ui/table/data-table-column-header';
import { CheckCircle2, Text, XCircle } from 'lucide-react';
import { CellAction } from './cell-action';
import { CATEGORY_OPTIONS } from './options';
export const columns = [{
  accessorKey: 'photo_url',
  header: 'IMAGE',
  cell: ({
    row
  }) => {
    return <div className='relative aspect-square'>
          <img src={row.getValue('photo_url')} alt={row.getValue('name')} loading='lazy' className='h-full w-full rounded-lg object-cover' />
        </div>;
  }
}, {
  id: 'name',
  accessorKey: 'name',
  header: ({
    column
  }) => <DataTableColumnHeader column={column} title='Name' />,
  cell: ({
    cell
  }) => <div>{cell.getValue()}</div>,
  meta: {
    label: 'Name',
    placeholder: 'Search products...',
    variant: 'text',
    icon: Text
  },
  enableColumnFilter: true
}, {
  id: 'category',
  accessorKey: 'category',
  header: ({
    column
  }) => <DataTableColumnHeader column={column} title='Category' />,
  cell: ({
    cell
  }) => {
    const status = cell.getValue();
    const Icon = status ? CheckCircle2 : XCircle;
    return <Badge variant='outline' className='capitalize'>
          <Icon />
          {status}
        </Badge>;
  },
  enableColumnFilter: true,
  meta: {
    label: 'categories',
    variant: 'multiSelect',
    options: CATEGORY_OPTIONS
  }
}, {
  accessorKey: 'price',
  header: 'PRICE'
}, {
  accessorKey: 'description',
  header: 'DESCRIPTION'
}, {
  id: 'actions',
  cell: ({
    row
  }) => <CellAction data={row.original} />
}];
