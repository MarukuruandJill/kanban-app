'use client'
import Link from "next/link"

export default function Navigation() {
    return (
        <header className="flex justify-between border-b border-gray-300 p-2 pl-10 pr-10">
            <Link href="/" className='flex items-center text-4xl text-brand font-bold'>
                <h1>Home</h1>
            </Link>
            <nav>
                <ul className='flex items-center gap-4 font-semibold p-2'>
                    <li>
                        <Link href="/kanban">
                            Kanban
                        </Link>
                    </li>
                    <li>
                        <Link href="/kanban/new">
                            New
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}