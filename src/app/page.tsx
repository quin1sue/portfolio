import { Footer } from "@/components/custom/footer";
import { Hero } from "@/components/custom/hero";
import { Projects } from "@/components/custom/projects";
import { TechStack } from "@/components/custom/techstack";
import Threads from "@/components/custom/Threads";
export default function Home() {
  return (
  <>
  <section aria-label="main page animation">
  <Threads
    amplitude={1}
    distance={0}
    enableMouseInteraction={true}
  />
</section>
<Hero />
<Projects />
<TechStack />
<Footer />
  </>
  );
}
