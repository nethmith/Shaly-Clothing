import React from 'react'

function NewProducts() {
    return (
        <div>
            <div className="container pt-16">
                <div className="text-center">
                    <h2 className="text-accent text-[24px] lg:text-[28px]">Watch</h2>
                    <h1 className="text-blackish text-[26px] md:text-[30px] lg:text-[44px] font-bold leading-[1.2]">Our Latest Products</h1>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
                    <div className="bg-white rounded-lg shadow-md">
                        <img src="/product-1.jpg" alt="" className="w-full h-[300px] object-cover object-center rounded-t-lg" />
                        <div className="p-4">
                            <h3 className="text-accent text-[20px]">T-shirt</h3>
                            <p className="text-blackish text-[22px] font-bold">$20.00</p>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-md">
                        <img src="/product-2.jpg" alt="" className="w-full h-[300px] object-cover object-center rounded-t-lg" />
                        <div className="p-4">
                            <h3 className="text-accent text-[20px]">Blouse</h3>
                            <p className="text-blackish text-[22px] font-bold">$25.00</p>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-md">
                        <img src="/product-3.jpg" alt="" className="w-full h-[300px] object-cover object-center rounded-t-lg" />
                        <div className="p-4">
                            <h3 className="text-accent text-[20px]">Trouser</h3>
                            <p className="text-blackish text-[22px] font-bold">$30.00</p>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-md">
                        <img src="/product-4.jpg" alt="" className="w-full h-[300px] object-cover object-center rounded-t-lg" />
                        <div className="p-4">
                            <h3 className="text-accent text-[20px]">Shirt</h3>
                            <p className="text-blackish text-[22px] font-bold">$35.00</p>
                        </div>
                    </div>
                    <div>
                        <img src="/product-5.jpg" alt="" className="w-full h-[300px] object-cover object-center rounded-t-lg" />
                        <div className="p-4">
                            <h3 className="text-accent text-[20px]">Shoes</h3>
                            <p className="text-blackish text-[22px] font-bold">$15.00</p>
                        </div>
                    </div>
                    <div>
                        <img src="/p.jpg" alt="" className="w-full h-[300px] object-cover object-center rounded-t-lg" />
                        <div className="p-4">
                            <h3 className="text-accent text-[20px]">Watch</h3>
                            <p className="text-blackish text-[22px] font-bold">$8.00</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewProducts