export type Product = {
  id: string;
  slug: string;
  title: string;
  description: string;
  // Add more fields as needed
};

// This is where you'll define your products
const products: Product[] = [
  // Add your three products here
];

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function getAllProducts() {
  return products;
} 