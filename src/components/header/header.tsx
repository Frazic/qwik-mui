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
          { name: "Nos BD", href: "#" },
          { name: "Auteurs & Autrices", href: "#" },
          { name: "Autour des livres", href: "#" },
          { name: "Foreign rights", href: "#" },
          { name: "Coulisses", href: "#" },
          { name: "Contact", href: "#" },
        ]}
        userSettings={["Profile", "Paramètres", "Déconnexion"]}
      />
    </header>
  );
});
