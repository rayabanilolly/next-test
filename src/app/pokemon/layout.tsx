import Link from "next/link"

export default function DashboardLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <section>
            <nav>
                <ul>
                    <li>
                        <Link href="/dashboard">Homepage</Link>
                        <Link href="/dashboard/setting">Setting</Link>
                    </li>
                </ul>
            </nav>

            <main>
                {children}
            </main>
        </section>
    )
}