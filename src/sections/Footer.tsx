import Image from 'next/image'

import LogoImage from '@/assets/logosaas.png'
import SocialX from '@/assets/social-x.svg'
import SocialInsta from '@/assets/social-insta.svg'
import SocialLinkedIn from '@/assets/social-linkedin.svg'
import SocialPin from '@/assets/social-pin.svg'
import SocialYouTube from '@/assets/social-youtube.svg'


export const Footer = () => {
    return (
        <footer className='bg-black text-[#BCBCBC] text-sm py-10 text-center'>
            <div className="container">
                <div className="inline-flex relative before:content-[''] before:top-2 before:bottom-0 before:h-full before:blur before:w-full before:bg-[linear-gradient(to_right,#FB7BFF,#FB92CF,#FFDD9B,#C2F0B1, #2FD8FE)] before:absolute">
                    <Image 
                        src={LogoImage} 
                        alt="SaaS Logo" 
                        height={40} 
                        className='relative hover:cursor-pointer' />
                </div>

                <nav className='flex flex-col md:flex-row md:justify-center gap-6 mt-6'>
                    <a className='hover:text-white' href="#">About</a>
                    <a className='hover:text-white' href="#">Features</a>
                    <a className='hover:text-white' href="#">Customers</a>
                    <a className='hover:text-white' href="#">Pricing</a>
                    <a className='hover:text-white' href="#">Help</a>
                    <a className='hover:text-white' href="#">Careers</a>
                </nav>

                <div className='flex justify-center gap-6 mt-6'>
                    <SocialX className='hover:text-white' />
                    <SocialInsta className='hover:text-white' />
                    <SocialLinkedIn className='hover:text-white' />
                    <SocialPin className='hover:text-white' />
                    <SocialYouTube  className='hover:text-white' />
                </div>
                <p className='mt-6'>&copy; Your company, Inc. All rights are reserved.</p>
            </div>
        </footer>
    );
};
