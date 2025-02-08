'use client';

import Link from 'next/link';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-8">
            <div className="container mx-auto px-6 md:px-12 lg:px-20">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {/* Company Info */}
                    <div>
                        <h2 className="text-lg font-semibold mb-4">About Us</h2>
                        <p className="text-sm text-gray-400">
                            We bring you the latest fashion trends with quality and affordability in mind.
                        </p>
                    </div>

                    {/* Customer Service */}
                    <div>
                        <h2 className="text-lg font-semibold mb-4">Customer Service</h2>
                        <ul className="space-y-2">
                            <li><Link href="/contact" className="text-gray-400 hover:text-white">Contact Us</Link></li>
                            <li><Link href="/faq" className="text-gray-400 hover:text-white">FAQs</Link></li>
                            <li><Link href="/returns" className="text-gray-400 hover:text-white">Return Policy</Link></li>
                            <li><Link href="/shipping" className="text-gray-400 hover:text-white">Shipping Info</Link></li>
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
                        <ul className="space-y-2">
                            <li><Link href="/shop" className="text-gray-400 hover:text-white">Shop</Link></li>
                            <li><Link href="/men" className="text-gray-400 hover:text-white">Men</Link></li>
                            <li><Link href="/women" className="text-gray-400 hover:text-white">Women</Link></li>
                            <li><Link href="/accessories" className="text-gray-400 hover:text-white">Accessories</Link></li>
                        </ul>
                    </div>

                    {/* Social Media */}
                    <div>
                        <h2 className="text-lg font-semibold mb-4">Follow Us</h2>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-white"><FaFacebook size={20} /></a>
                            <a href="#" className="text-gray-400 hover:text-white"><FaInstagram size={20} /></a>
                            <a href="#" className="text-gray-400 hover:text-white"><FaTwitter size={20} /></a>
                            <a href="#" className="text-gray-400 hover:text-white"><FaYoutube size={20} /></a>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-8 text-center text-gray-500 text-sm border-t border-gray-700 pt-4">
                    &copy; {new Date().getFullYear()} Your Clothing Brand. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
