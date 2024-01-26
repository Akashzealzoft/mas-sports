import { useRouter } from 'next/router';
import Image from "next/image";
import Link from "next/link";

const ProductDetails = () => {
    const router = useRouter();
    const { id } = router.query;

    return (
        <div>
    
            <div className="bg-white flex mt-56 rounded-lg shadow-md overflow-hidden text-center">


                <div className="p-4">
                    <Link href="/">
                        <Image src="/assets/bat2.jpg" alt="cricket bat" width={700} height={300} />
                    </Link>
                    <h2 className="text-xl font-semibold mb-2">Master 100</h2>

                    <div className="flex justify-evenly mt-4">
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                            Add to Cart
                        </button>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                            Add to Wishlist
                        </button>
                    </div>
                </div>

                <div className="p-4">
                    <Link href="/">
                        <Image src="/assets/bat.jpg" alt="cricket bat" width={700} height={300} />
                    </Link>
                    <h2 className="text-xl font-semibold mb-2">Blitz</h2>

                    <div className="flex justify-evenly mt-4">
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                            Add to Cart
                        </button>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                            Add to Wishlist
                        </button>
                    </div>
                </div>

                <div className="p-4">
                    <Link href="/">
                        <Image src="/assets/bat1.jpg" alt="cricket bat" width={700} height={300} />
                    </Link>
                    <h2 className="text-xl font-semibold mb-2">Navarone</h2>

                    <div className="flex justify-evenly mt-4">
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                            Add to Cart
                        </button>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                            Add to Wishlist
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ProductDetails;