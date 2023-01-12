import { component$, useStyles$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { EyeFollow } from "~/components/eyeFollow/eyeFollow";
import style from "./main.css?inline";

export default component$(() => {
  useStyles$(style);
  return (
    <>
      <section id="hero">
        <div id="hero-flex-container">
          <div id="hero-text-container">
            <h1 id="hero-title">
              Les éditions de la Gouttière
            </h1>
            <h6 id="hero-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem voluptatibus deleniti eaque fugit quo, possimus, ab magnam quidem nisi sapiente quaerat magni hic vel. Mollitia facilis quam expedita nihil eum.
              Quisquam maxime mollitia libero optio asperiores neque! Doloribus non accusamus quos laudantium facere, quod, porro, deleniti alias hic aliquam natus molestiae eaque iure voluptatem dolore omnis! Tempora veritatis ea placeat?
            </h6>
            {/* Button here */}
          </div>
          <img id="hero-image" src="/visuel-couv.webp" alt="" />
        </div>

        <EyeFollow />
      </section>
    </>
  );
});

export const head: DocumentHead = {
  title: "Éditions de la Gouttière",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
