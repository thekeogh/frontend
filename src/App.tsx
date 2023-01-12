import { Analytics } from "@vercel/analytics/react";

import { About, Experience, Footer, Intro, Skills } from "@sections";

export function App() {

  return (
    <>
      <Intro />
      <About />
      <Skills />
      <Experience />
      <Footer />
      <Analytics />
    </>
  );
}

