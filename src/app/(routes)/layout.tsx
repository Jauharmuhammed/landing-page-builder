import Navbar from "@/components/Navbar";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <main>
            <Navbar />
            {children}
        </main>
    );
}
