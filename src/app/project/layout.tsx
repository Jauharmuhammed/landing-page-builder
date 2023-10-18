import Footer from "@/components/sections/footer";
import Navbar from "@/components/sections/navbar";
import data from "@/data/landing-page";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <main>
            <Navbar elements={data.elements.navbar} />
            {children}
            <Footer elements={data.elements.footer}/>
        </main>
    );
}
