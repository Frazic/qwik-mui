import { component$, useStyles$ } from "@builder.io/qwik";
import { ResponsiveNavbar } from "~/integrations/react/mui";
import style from "./header.css?inline";

export default component$(() => {
  useStyles$(style);

  return (
    <header>
      <ResponsiveNavbar
        client:visible
        pages={[
          { name: "react", href: "/react" },
          { name: "flower", href: "/flower" },
          { name: "gouttiere", href: "/gouttiere" },
        ]}
        userSettings={["item1", "item2", "item3"]}
      />
    </header>
  );
});
