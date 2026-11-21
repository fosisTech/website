import type { Metadata } from "next";
import { KhutbahLibrary } from "@/components/KhutbahLibrary";
import { PageIntro } from "@/components/ui";

export const metadata: Metadata = {
  title: "FOSIS Khutbah Library",
  description:
    "Thirty-six ready-to-deliver Friday khutbahs with standardised Arabic openings and full English, built for schools, colleges and campuses.",
  alternates: { canonical: "/khutbah-library/" },
};

export default function KhutbahLibraryPage() {
  return (
    <main id="main-content" tabIndex={-1} className="outline-none">
      <PageIntro title="Khutbah Library">
        36 ready-to-deliver Friday khutbahs with standardised Arabic openings and full English. Built for schools,
        colleges &amp; campuses.
      </PageIntro>
      <section className="section section-flush bg-white">
        <div className="page-wrap">
          <KhutbahLibrary />
        </div>
      </section>
    </main>
  );
}
