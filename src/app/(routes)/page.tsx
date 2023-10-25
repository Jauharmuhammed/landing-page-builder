import BrandInfiniteScroll from "@/components/brand-infinite-scroll";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Services from "@/components/services";

export default function Home() {
    return (
        <div className="">
            <Hero />
            <Services />
            <BrandInfiniteScroll />
            <Footer />
        </div>
    );
}
