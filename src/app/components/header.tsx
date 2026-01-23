import Link from "next/link";
import { CommandLineIcon } from "@heroicons/react/24/outline";

export default function Header() {
    return (
        <header className="border-b bg-white text-black">
            <nav className="max-w-6xl mx-auto px-4 py-4 flex gap-6">
                <Link href="/" className="text-left"><CommandLineIcon className="size-6" /></Link>
                <Link href="/" className="text-left">DevPortfolio | Galih Dimas Prastowo</Link>
                <Link href="/app" className="text-end">Home</Link>
                <Link href="/about" className="text-end">About</Link>
            </nav>
        </header>
    )
}