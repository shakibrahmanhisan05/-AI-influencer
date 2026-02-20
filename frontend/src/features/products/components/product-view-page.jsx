import { fakeProducts } from '@/constants/mock-api';
import FormCardSkeleton from '@/components/form-card-skeleton';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ProductForm from './product-form';

export default function ProductViewPage({
  productId: productIdProp
}) {
  const {
    productId: routeProductId
  } = useParams();
  const navigate = useNavigate();
  const productId = productIdProp ?? routeProductId ?? 'new';
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(productId !== 'new');

  useEffect(() => {
    let isMounted = true;

    async function loadProduct() {
      if (productId === 'new') {
        setLoading(false);
        return;
      }

      setLoading(true);
      const data = await fakeProducts.getProductById(Number(productId));
      if (!isMounted) return;

      if (!data?.product) {
        navigate('/dashboard/product', { replace: true });
        return;
      }

      setProduct(data.product);
      setLoading(false);
    }

    loadProduct();
    return () => {
      isMounted = false;
    };
  }, [productId, navigate]);

  if (loading) {
    return <FormCardSkeleton />;
  }

  const pageTitle = productId === 'new' ? 'Create New Product' : 'Edit Product';
  return <ProductForm initialData={product} pageTitle={pageTitle} />;
}
