import Image from "next/image";
import Link from "next/link";
import { Star } from 'lucide-react'

import { CardContent, Card, CardHeader } from "@/components/ui/card";
import ProductPrice from "./product-price";
import { TProduct } from "@/types";

const ProductCard = ({ product }: { product: TProduct }) => {
    return (
        <Card className="w-full max-w-sm">
            <CardHeader className="p-0 items-center">
                <Link href={`/product/${product.slug}`}>
                    <Image
                        priority
                        src={product.images![0]}
                        alt={product.name}
                        className="aspect-square object-cover rounded"
                        height={300}
                        width={300}
                    />
                </Link>
            </CardHeader>
            <CardContent className="p-4 grid gap-4">
                <div className="text-sm">
                    {product.brand}
                </div>
                <Link href={`/product/${product.slug}`}>
                    <h2 className="text-md font-bold">{product.name}</h2></Link>
                <div className="flex-between gap-4">
                    <p className="flex flex-row justify-center items-center">
                        <span className="text-sm">{product.rating}</span>
                        <span className="ml-2">
                            <Star size={18} className="fill-yellow-300 stroke-yellow-500" />
                        </span>
                    </p>
                    {product.stock > 0 ? (
                        <ProductPrice value={Number(product.price)} />
                    ) : (
                        <p className="text-destructive">Out of Stock</p>
                    )}
                </div>
            </CardContent>
        </Card>
    );
}

export default ProductCard;