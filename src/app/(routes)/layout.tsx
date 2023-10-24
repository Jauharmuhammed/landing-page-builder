import Navbar from "@/components/navbar";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <main className="px-4 md:px-12">
            <Navbar />
            {children}
        </main>
    );
}
