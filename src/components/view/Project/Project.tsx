import SmoothScroll from "@/components/re-ui/SmoothScroll";
import ProjectClient from "./ProjectClient";

export default function Project() {
  return (
    <SmoothScroll id="project">
      <section
        id="Project"
        className="py-10 px-4 sm:px-8 md:px-16 transition-all"
      >
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-green-500 font-medium text-sm sm:text-base">
            Best Of Our Works
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-black dark:text-white mt-2">
            Latest Project
          </h2>

          {/* Render the client-side component */}
          <ProjectClient />
        </div>
      </section>
    </SmoothScroll>
  );
}
