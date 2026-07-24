import PageLayout from "@/layouts/PageLayout";
import About from "@/components/About";
import Header from "@/components/Header";
import Classes from "@/components/Classes";
import Reviews from "@/components/Reviews";
import Faq from "@/components/Faq";
import Register from "@/components/Register";
import StudentSuccess from "@/components/StudentSuccess";
import InstructorTeaser from "@/components/InstructorTeaser";

export default function HomePage() {
  return (
    <PageLayout>
      <div>
        <div className="h-screen px-8 md:px-12 lg:px-24">
          <Header />
        </div>
        <div id="success">
          <StudentSuccess />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="classes">
          <Classes />
        </div>
        <div id="instructors">
          <InstructorTeaser />
        </div>
        <div id="reviews">
          <Reviews />
        </div>
        <Faq />
        <div id="registration">
          <Register />
        </div>
      </div>
    </PageLayout>
  );
}
