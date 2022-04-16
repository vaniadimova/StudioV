import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer: React.FC = () => (
    <footer className='flex gap-8 item-center justify-center bg-black text-white p-20'>
<Image src="/assets/logo-w.png" alt="logo" width={18} height={18} />
<Link href="/privacy">Privacy Policy</Link>
<Link href="/terms">Terms of Service</Link>
<Link href="https://www.vaniadimova.com">www.vaniadimova.com</Link>
<Link href="https://github.com/vaniadimova">GitHub</Link>
<Link href="https://twitter.com/12Dimov">Twitter</Link>
    </footer>
)

export default Footer;