import Link from "next/link";

export default function Footer(){
    return (
        <footer className="border-t mt-20 bg-white/80">
            <div className="mx-auto max-w-6xl px-4 py-16 grid gap-10 md:grid-cols-3">
                {/* Brand*/}
                <div className="space-y-4 text-black">
                    <h3 className="font-semibold text-sm">Dimasaurus</h3>
                    <p className="text-sm leading-relaxed">
                        Software Engineer focused on building scalable web applications, clean architecture, and modern fronten
                    </p>
                    <p>
                        Tech: Next.js
                    </p>
                </div>

                {/*Left*/}
                <p className="text-sm text-black">
                    © {new Date().getFullYear()} Dimasaurus. All rights reserved.
                </p>

                {/** Right */}
                <div className="flex gap-6 text-sm">
                    <Link className="text-black hover:text-indigo-400 transotion-colors" href="https://github.com/DimasAsia" target="_blank" rel="noneferrer">Github</Link>
                    <Link className="text-black hover:text-indigo-400 transotion-colors" href="https://www.linkedin.com/in/galihdimasprastowo/" target="_blank" rel="noneferrer">Linkedln</Link>
                    <Link className="text-black hover:text-indigo-400 transotion-colors" href="mailto:galihdimas@outlook.com" >Email</Link>
                </div>
            </div>
        </footer>
    );
}