import ProductList from '@/components/shared/product/product-list';
import { getLatestProducts } from '@/lib/actions/product.actions';
import { TProduct } from '@/types';

export default async function Home() {

  const latestProducts: TProduct[] = await getLatestProducts();

  return (
    <div className="space-y-8">
      <h2 className="font-bold">
        Latest Products
      </h2>
      <ProductList
        title="Newest Arrivals"
        data={latestProducts}
      />
    </div>
  );
}
