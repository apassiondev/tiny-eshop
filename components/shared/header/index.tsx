import { Button } from '@/components/ui/button';
import { APP_NAME } from '@/lib/constants';
import { ShoppingCart, UserIcon } from 'lucide-react'
import Image from 'next/image';
import Link from 'next/link';
import ModeToggle from './mode-toggle';


const Header = () => {
    return (
        <header className='w-full border-b'>
            <div className='wrapper flex-between'>
                <div className='flex-start'>
                    <Link href='/' className='flex-start'>
                        <Image
                            width={48}
                            height={48}
                            src='/images/logo.svg'
                            priority={true}
                            alt={`${APP_NAME} logo`}
                        />
                        <span className='hidden lg:block font-bold text-2xl ml-3'>
                            {APP_NAME}
                        </span>
                    </Link>
                </div>

                <div className="space-x-2">
                    <ModeToggle />
                    <Button asChild variant="ghost">
                        <Link href='/cart'>
                            <ShoppingCart />
                        </Link>
                    </Button>
                    <Button asChild>
                        <Link href="/sign-in">
                            <UserIcon />
                        </Link>
                    </Button>
                </div>
            </div>
        </header>
    )
}

export default Header;