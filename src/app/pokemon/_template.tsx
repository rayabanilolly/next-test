import Link from "next/link";

export default function DahsboardTemplate({children}: {children: React.ReactNode}) {
    return (
        <section>
            <nav>
                <Link href="/dashboard">Dashboard</Link>
                <Link href="/dashboard/setting">Setting</Link>
            </nav>

            <main>{children}</main>
        </section>
    ) 
}