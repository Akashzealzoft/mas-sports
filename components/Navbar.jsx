// import React, { useState } from 'react';
// import Link from 'next/link';
// import { AiOutlineShopping, AiOutlineMenu } from 'react-icons/ai';
// import Image from 'next/image';

// const Navbar = () => {
//     const [isMenuOpen, setIsMenuOpen] = useState(false);

//     const toggleMenu = () => {
//         setIsMenuOpen(!isMenuOpen);
//     };

//     return (
//         <div className="relative flex - justify-between p-4">
//             <button type="button" className="menu-icon" onClick={toggleMenu}>
//                 <AiOutlineMenu />
//             </button>

//             <div className={`absolute h-full  inset-0 bg-white text-black bg-opacity-75 z-50 ${isMenuOpen ? 'block' : 'hidden'}`} onClick={toggleMenu}>


//                 <div className={`fixed inset-y-0 left-0 bg-white w-64 transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform ease-in-out duration-500`}>
//                     <div className="p-4">
//                         <button type="button" className="text-black" onClick={toggleMenu}>
//                             X
//                         </button>
//                     </div>
//                     <div className="flex flex-col items-center p-8">
//                         <Link href="/about">
//                             <p className="text-xl mb-4">THE BATBUILDER</p>
//                         </Link>
//                         <Link href="/about">
//                             <p className="text-xl mb-4">SHOP NOW</p>
//                         </Link>
//                         <Link href="/about">
//                             <p className="text-xl mb-4">JANUARY SALE</p>
//                         </Link><Link href="/about">
//                             <p className="text-xl mb-4">CRICKET NET HIRE</p>
//                         </Link>

//                     </div>
//                 </div>


//             </div>

//             <div className="logo">
//                 <Link href="/">
//                     <Image src="/assets/mass.jpg" width={100} height={120} />
//                 </Link>
//             </div>
//             <div className="flex justify-evenly items-center p-4">
//                 <button type="button" className="cart-icon">
//                     <Image src="/assets/search.png" width={20} height={20} alt="Search Icon" />
//                 </button>
//                 <button type="button" className="cart-icon">
//                     <Image src="/assets/user.png" width={20} height={20} alt="User Icon" />
//                 </button>
//                 <button type="button" className="cart-icon">
//                     <Image src="/assets/shopping-bag.png" width={20} height={20} alt="Shopping Bag Icon" />
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default Navbar;
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { AiOutlineShopping, AiOutlineMenu } from 'react-icons/ai';
import Image from 'next/image';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleScroll = () => {
        const scrolled = window.scrollY > 0;
        setIsScrolled(scrolled);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`fixed  top-0 left-0 right-0 z-50 ${isScrolled ? 'bg-white shadow-md' : ''}`}>
            <div className="relative flex justify-between items-center p-4">
                <button type="button" className="menu-icon" onClick={toggleMenu}>
                    <AiOutlineMenu />
                </button>

                <div className={`absolute h-full inset-0 bg-white bg-opacity-75 z-50 ${isMenuOpen ? 'block' : 'hidden'}`} onClick={toggleMenu}>
                    <div className={`fixed inset-y-0 left-0 bg-white w-64 transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform ease-in-out duration-500`}>
                        <div className="p-4">
                            <button type="button" className="text-black" onClick={toggleMenu}>
                                X
                            </button>
                        </div>
                        <div className="flex flex-col items-center p-8">
                            <Link href="/about">
                                <p className="text-xl mb-4">THE BATBUILDER</p>
                            </Link>
                            <Link href="/about">
                                <p className="text-xl mb-4">SHOP NOW</p>
                            </Link>
                            <Link href="/about">
                                <p className="text-xl mb-4">JANUARY SALE</p>
                            </Link>
                            <Link href="/about">
                                <p className="text-xl mb-4">CRICKET NET HIRE</p>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="logo">
                    <Link href="/">
                        <Image src="/assets/mass.jpg" width={100} height={120} />
                    </Link>
                </div>

                <div className="flex justify-evenly items-center p-8">
                    <button type="button" className="cart-icon">
                        <Image src="/assets/search.png" width={20} height={20} alt="Search Icon" className='mr-2' />
                    </button>
                    <button type="button" className="cart-icon">
                        <Image src="/assets/user.png" width={20} height={20} alt="User Icon" className='mr-2' />
                    </button>
                    <button type="button" className="cart-icon">
                        <Image src="/assets/shopping-bag.png" width={20} height={20} alt="Shopping Bag Icon" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;

