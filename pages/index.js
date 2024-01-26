import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const productId = 1
  return (
    <main className=" min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-4 text-center"></h1>

      {/* First Row */}

      <div className="flex flex-col mt-16 md:flex-row mb-8">
        <div className="w-full md:w-1/2 lg:w-1/2 md:mr-4 relative group overflow-hidden">


          <Image
            src="/assets/cricket1.jpg"
            alt="Image 1"
            layout="responsive"
            width={700}
            height={300}
            className="transition-transform duration-300 transform scale-100 group-hover:scale-110 rounded-md"
          />



          <div className="absolute  inset-0 flex items-center group-hover:hidden justify-center bg-opacity-75 ">
            <h2 className="text-white text-2xl">Shop Senior</h2>
          </div>

          <div className="absolute inset-0 flex items-center justify-center bg-opacity-75 opacity-0 group-hover:opacity-100">
            <Link href={`/product/${productId}`} className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
              Shop Now
            </Link>
          </div>
        </div>


        <div className="w-full md:w-1/2 lg:w-1/2 relative group overflow-hidden">
          <Image
            src="/assets/cricket2.jpg"
            alt="Image 2"
            layout="responsive"
            width={700}
            height={300}
            className="transition-transform duration-300 transform scale-100 group-hover:scale-110 rounded-md"
          />
          <div className="absolute  inset-0 flex items-center group-hover:hidden justify-center bg-opacity-75 ">
            <h2 className="text-white text-2xl">Shop Senior</h2>
          </div>

          <div className="absolute inset-0 flex items-center justify-center bg-opacity-75 opacity-0 group-hover:opacity-100">
            <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
              Shop Now
            </button>
          </div>
        </div>
      </div>

      {/* Second Row */}
      <div className="flex flex-col md:flex-row mb-8">
        <div className="w-full md:w-1/3 lg:w-1/3 md:mr-4 relative group overflow-hidden">
          <Image
            src="/assets/cricket3.jpg"
            alt="Image 3"
            layout="responsive"
            width={700}
            height={300}
            className="transition-transform duration-300 transform scale-100 group-hover:scale-110 rounded-md"
          />
          <div className="absolute  inset-0 flex items-center group-hover:hidden justify-center bg-opacity-75 ">
            <h2 className="text-white text-2xl">Shop Senior</h2>
          </div>

          <div className="absolute inset-0 flex items-center justify-center bg-opacity-75 opacity-0 group-hover:opacity-100">
            <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
              Shop Now
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/3 lg:w-1/3 md:mr-4 relative group overflow-hidden">
          <Image
            src="/assets/cricket4.jpg"
            alt="Image 4"
            layout="responsive"
            width={700}
            height={300}
            className="transition-transform duration-300 transform scale-100 group-hover:scale-110 rounded-md"
          />
          <div className="absolute  inset-0 flex items-center group-hover:hidden justify-center bg-opacity-75 ">
            <h2 className="text-white text-2xl">Shop Senior</h2>
          </div>

          <div className="absolute inset-0 flex items-center justify-center bg-opacity-75 opacity-0 group-hover:opacity-100">
            <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
              Shop Now
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/3 lg:w-1/3 relative group overflow-hidden">
          <Image
            src="/assets/cricket6.jpg"
            alt="Image 5"
            layout="responsive"
            width={700}
            height={300}
            className="transition-transform duration-300 transform scale-100 group-hover:scale-110 rounded-md"
          />
          <div className="absolute  inset-0 flex items-center group-hover:hidden justify-center bg-opacity-75 ">
            <h2 className="text-white text-2xl">Shop Senior</h2>
          </div>

          <div className="absolute inset-0 flex items-center justify-center bg-opacity-75 opacity-0 group-hover:opacity-100">
            <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
              Shop Now
            </button>
          </div>
        </div>

      </div>


      {/* Map container */}
      <div className="text-center  m-10 ">
        <h2 className="font-bold text-4xl">Celebrating 100 Years of Heritage </h2>
        <p className="text-xl">Celebrating 100 Years of Heritage From humble origins in the early 1900’s in East Sussex, England, through to worldwide accolades. The Newbery heritage combines tradition, legends, innovation and master craftsmen. The Newbery story begins with Len Newbery, a highly skilled bat-maker and master craftsman, naturally he passed down his highly skilled legacy to his only son, John Newbery, who carried on the skill with great success. Together, their Newbery philosophy, the English heritage, their passion and legacy is still used and is emphatically understood today.</p> </div>
      <div className="w-full  relative group overflow-hidden">
        <Image
          src="/assets/map.jpg"
          alt="Image 5"
          layout="responsive"
          width={700}
          height={300}
          className="transition-transform duration-300 transform scale-100 group-hover:scale-110 rounded-md"
        />
        <div className="absolute  inset-0 flex items-center group-hover:hidden justify-center bg-opacity-75 ">
          <h2 className="text-white text-4xl">Shop Senior</h2>
        </div>

        <div className="absolute inset-0 flex items-center justify-center bg-opacity-75 opacity-0 group-hover:opacity-100">
          <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
            Shop Now
          </button>
        </div>
      </div>
    </main>
  );
}
