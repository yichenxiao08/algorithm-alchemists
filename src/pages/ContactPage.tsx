import PageLayout from "@/layouts/PageLayout";

export default function ContactPage() {
  return (
    <PageLayout contentClassName="flex flex-col pt-24">
      <div className="px-8 lg:px-16 xl:px-24">
        <div className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 text-center">
          Contact Us
        </div>
        <div className="text-lg lg:text-xl xl:text-2xl font-semibold mb-8 lg:mb-16 text-center">
          Have a question? Want to collaborate? Get in touch.
        </div>
        <div className="max-w-3xl mx-auto text-sm lg:text-md leading-relaxed text-center">
          <p className="mb-6">
            For general inquiries, partnership opportunities, or questions about
            our programs, reach out via email.
          </p>
          <div className="flex justify-center mb-8">
            <a
              href="mailto:algorithm.alchemists@gmail.com"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-4 rounded-xl border border-white/20 transition-all duration-300"
            >
              <span className="font-semibold">Email us</span>
              <span className="text-sm opacity-80">
                algorithm.alchemists@gmail.com
              </span>
            </a>
          </div>
          <div className="mb-8">
            <p className="mb-4">
              Interested in volunteering with Algorithm Alchemists? Fill out our
              volunteer form and we will be in touch.
            </p>
            <a
              href="https://forms.gle/smo5FH8unWtaScy57"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300"
            >
              Volunteer With Us
            </a>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
