import React from 'react'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import { ModeToggle } from './ToggleMode'
const NavBar = () => {
    return (
        <header  className='flex justify-between items-center p-4 bg-white dark:bg-gray-900'>
            <SignedIn>
                <ModeToggle />
                <UserButton />
            </SignedIn>
            <SignedOut>
                <SignInButton />
            </SignedOut>
        </header>
    )
}

export default NavBar