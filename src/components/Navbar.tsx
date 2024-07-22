'use client'

import React from 'react'
import Link from 'next/link'
import { useSession, signOut } from 'next-auth/react'
import { User } from 'next-auth'
import { Button } from './ui/button'


const Navbar = () => {

    const { data: session } = useSession();
    const user: User = session?.user as User;

    return (
        <nav className='p-4 md:p-6 shadow-md bg-gray-900 text-white'>
            <div className='container mx-auto flex justify-between items-center'>
                <a className='text-xl font-bold' href="/">HonestEcho</a>
                {
                    session ? (
                        <>
                            <span className='mr-4 hidden md:block'>
                                Hello, {user?.username || user?.email}
                            </span>
                            <Button
                                variant={'secondary'}
                                onClick={() => signOut()}
                            >
                                Logout
                            </Button>
                        </>
                    ) : (
                        <Link href='/signin'>
                            <Button variant={'secondary'}>Login</Button>
                        </Link>
                    )
                }
            </div>
        </nav>
    )
}

export default Navbar