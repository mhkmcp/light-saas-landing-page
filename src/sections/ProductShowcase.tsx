import Image from "next/image"

import ProductImage from "@/assets/product-image.png"
import PyramidImage from "@/assets/pyramid.png"
import TubeImage from "@/assets/tube.png"

export const ProductShowcase = () => {
    return (
        <section className="bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24 overflow-x-clip">
            <div className="container">
                <div className="max-w-[540px] mx-auto">
                    <div className="flex justify-center">
                        <div className="tag">
                            Boost your productivity
                        </div>
                    </div>
                    <h2 className="text-center text-3xl md:text-[54px] md:leading-[60px] font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-5">
                        A more effective way to track progress
                    </h2>
                    <p className="text-center text-[22px] leading-[30px] tracking-tight text-[#010D3E]">Effortlessly turn your ideas into a fully functional, responsive, SasS 
                        website in just minutes with this templates.
                    </p>
                    <div className="relative">
                        <Image 
                            src={ProductImage} 
                            alt="Product Image" 
                            className="mt-10" />
                        <Image 
                            src={PyramidImage} 
                            alt="Pyramid Image" 
                            height={262}
                            width={262}
                            className="hidden md:block absolute -right-36 -top-32" />
                        <Image 
                            src={TubeImage} 
                            alt="Tube Image" 
                            height={248}
                            className="hidden md:block absolute bottom-8 -left-36" />
                    </div>
                </div>
            </div>

        </section>
    );
};
