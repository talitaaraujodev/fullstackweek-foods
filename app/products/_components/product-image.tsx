"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Product } from "@prisma/client";
import { Button } from "@/app/_components/ui/button";
import { ChevronLeftIcon } from "lucide-react";

interface ProductImageProps {
  product: Pick<Product, "name" | "imageUrl">;
}

const ProductImage = ({ product }: ProductImageProps) => {
  const router = useRouter();
  const handleBackClick = () => router.back();

  return (
    <div className="relative h-[400px] w-full md:h-[300px] lg:h-[400px] xl:h-[500px]">
      <Image
        src={product.imageUrl}
        alt={product.name}
        layout="fill"
        objectFit="cover"
        className="object-cover"
      />
      <Button
        className="absolute left-4 top-4 rounded-full bg-white text-foreground transition-all hover:text-white"
        onClick={handleBackClick}
      >
        <ChevronLeftIcon />
      </Button>
    </div>
  );
};

export default ProductImage;
