// components/ProductCard.js
import Image from 'next/image';
import Link from 'next/link';

const ProductCard = ({ id, image, title, description, price }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <Link href={`/product/${id}`}>
        <a>
          <Image src={image} alt={title} width={700} height={300} />
        </a>
      </Link>

      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-600 mb-2">{description}</p>
        <p className="text-gray-800 font-bold">${price}</p>

        <div className="flex justify-between mt-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
            Add to Cart
          </button>
          <button className="text-gray-700 hover:text-red-500">
            Add to Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
