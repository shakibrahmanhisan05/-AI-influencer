'use client';

import { FormFileUpload } from '@/components/forms/form-file-upload';
import { FormInput } from '@/components/forms/form-input';
import { FormSelect } from '@/components/forms/form-select';
import { FormTextarea } from '@/components/forms/form-textarea';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Form } from '@/components/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import * as z from 'zod';
const MAX_FILE_SIZE = 5000000;
const ACCEPTED_IMAGE_TYPES = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
const formSchema = z.object({
  image: z.any().optional().refine(files => !files || files.length === 0 || files[0]?.size <= MAX_FILE_SIZE, 'Max file size is 5MB.').refine(files => !files || files.length === 0 || ACCEPTED_IMAGE_TYPES.includes(files[0]?.type), '.jpg, .jpeg, .png and .webp files are accepted.'),
  name: z.string().min(2, {
    message: 'Product name must be at least 2 characters.'
  }),
  category: z.string(),
  price: z.number(),
  description: z.string().min(10, {
    message: 'Description must be at least 10 characters.'
  })
});
export default function ProductForm({
  initialData,
  pageTitle
}) {
  const defaultValues = {
    name: initialData?.name || '',
    category: initialData?.category || '',
    price: initialData?.price || undefined,
    description: initialData?.description || ''
  };
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: defaultValues
  });
  const navigate = useNavigate();
  function onSubmit(values) {
    // Form submission logic would be implemented here
    console.log(values);
    navigate('/dashboard/product');
  }
  return <Card className='mx-auto w-full'>
      <CardHeader>
        <CardTitle className='text-left text-2xl font-bold'>
          {pageTitle}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
            <FormFileUpload control={form.control} name='image' label='Product Image' description='Upload a product image' config={{
            maxSize: 5 * 1024 * 1024,
            maxFiles: 4
          }} />

            <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
              <FormInput control={form.control} name='name' label='Product Name' placeholder='Enter product name' required />

              <FormSelect control={form.control} name='category' label='Category' placeholder='Select category' required options={[{
              label: 'Beauty Products',
              value: 'Beauty Products'
            }, {
              label: 'Electronics',
              value: 'Electronics'
            }, {
              label: 'Furniture',
              value: 'Furniture'
            }, {
              label: 'Clothing',
              value: 'Clothing'
            }, {
              label: 'Toys',
              value: 'Toys'
            }, {
              label: 'Groceries',
              value: 'Groceries'
            }, {
              label: 'Books',
              value: 'Books'
            }, {
              label: 'Jewelry',
              value: 'Jewelry'
            }]} />

              <FormInput control={form.control} name='price' label='Price' placeholder='Enter price' required type='number' min={0} step='0.01' />
            </div>

            <FormTextarea control={form.control} name='description' label='Description' placeholder='Enter product description' required config={{
            maxLength: 500,
            showCharCount: true,
            rows: 4
          }} />

            <Button type='submit'>{initialData ? 'Save Changes' : 'Add Product'}</Button>
          </form>
        </Form>
      </CardContent>
    </Card>;
}
