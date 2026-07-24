import PageLayout from "@/layouts/PageLayout";
import About from "@/components/About";
import Header from "@/components/Header";
import Classes from "@/components/Classes";
import Reviews from "@/components/Reviews";
import Faq from "@/components/Faq";
import Register from "@/components/Register";
import Proof from "@/components/Proof";
import WhyUs from "@/components/WhyUs";

export default function HomePage() {
  return (
    <PageLayout>
      <div>
        <div className="h-screen px-8 md:px-12 lg:px-24">
          <Header />
        </div>
        <div id="proof">
          <Proof />
        </div>
        <div id="classes">
          <Classes />
        </div>
        <WhyUs />
        <div id="reviews">
          <Reviews />
        </div>
        <div id="about">
          <About />
        </div>
        <Faq />
        <div id="registration">
          <Register />
        </div>
      </div>
    </PageLayout>
  );
}
