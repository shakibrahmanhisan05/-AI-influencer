import { fakeProducts } from '@/constants/mock-api';
import { DataTableSkeleton } from '@/components/ui/table/data-table-skeleton';
import { parseAsInteger, parseAsString, useQueryState } from 'nuqs';
import { useEffect, useMemo, useState } from 'react';
import { ProductTable } from './product-tables';
import { columns } from './product-tables/columns';

export default function ProductListingPage() {
  const [page] = useQueryState('page', parseAsInteger.withDefault(1));
  const [perPage] = useQueryState('perPage', parseAsInteger.withDefault(10));
  const [name] = useQueryState('name', parseAsString);
  const [category] = useQueryState('category', parseAsString);
  const [products, setProducts] = useState([]);
  const [totalProducts, setTotalProducts] = useState(0);
  const [loading, setLoading] = useState(true);

  const filters = useMemo(() => ({
    page,
    limit: perPage,
    ...(name ? {
      search: name
    } : {}),
    ...(category ? {
      categories: category
    } : {})
  }), [page, perPage, name, category]);

  useEffect(() => {
    let isMounted = true;

    async function loadProducts() {
      setLoading(true);
      const data = await fakeProducts.getProducts(filters);
      if (!isMounted) return;
      setProducts(data.products ?? []);
      setTotalProducts(data.total_products ?? 0);
      setLoading(false);
    }

    loadProducts();
    return () => {
      isMounted = false;
    };
  }, [filters]);

  if (loading) {
    return <DataTableSkeleton columnCount={6} rowCount={10} filterCount={2} />;
  }

  return <ProductTable data={products} totalItems={totalProducts} columns={columns} />;
}
