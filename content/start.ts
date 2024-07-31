import { markdownToHtml } from "@/utils/markdownToHtml";

export const startContent = async () => {
  const content = {
    no: `
Hei, jeg heter Tobias Wulvik, en digital produktdesigner som hopper mellom UX, UI og frontend-arbeid. I prosjektene jeg har jobbet på, har jeg funnet min plass som en brobygger mellom sluttbrukeren og utviklerne. Det har jeg gjort gjennom innsiktsarbeid og workshop-arbeid for å forstå brukere og å jobbe sammen med utviklerne på selve koden.

Verktøykassen min for å bygge bro er ganske variert. Jeg bruker Figma for å tegne opp brukergrensesnitt, og stor fan av enkle tusjtegninger. Enten det er for å lage low-fidelity prototyper eller for å skape tegneserieaktige metaforer for de konseptene vi jobber med – det er utrolig hva en enkel tegning kan gjøre for å samle folk rundt felles idéer (ta gjerne en titt på porteføljeprosjektene mine for mer!).

Litt om meg: Jeg kommer fra Mosjøen i Nordland, har studert i Trondheim, og har bodd de siste to årene i Danmark sammen med min forlovede. Når jeg har fri, liker jeg å komme meg ut i skogen for å spikke en stekespade, ta på meg skiene og gå opp på fjellet, eller fange fisk med harpun.
`,
    en: `
Hei, jeg heter Tobias Wulvik, en digital produktdesigner som hopper mellom UX, UI og frontend-arbeid. I prosjektene jeg har jobbet på, har jeg funnet min plass som en brobygger mellom sluttbrukeren og utviklerne. Det har jeg gjort gjennom innsiktsarbeid og workshop-arbeid for å forstå brukere og å jobbe sammen med utviklerne på selve koden.

Verktøykassen min for å bygge bro er ganske variert. Jeg bruker Figma for å tegne opp brukergrensesnitt, og stor fan av enkle tusjtegninger. Enten det er for å lage low-fidelity prototyper eller for å skape tegneserieaktige metaforer for de konseptene vi jobber med – det er utrolig hva en enkel tegning kan gjøre for å samle folk rundt felles idéer (ta gjerne en titt på porteføljeprosjektene mine for mer!).

Litt om meg: Jeg kommer fra Mosjøen i Nordland, har studert i Trondheim, og har bodd de siste to årene i Danmark sammen med min forlovede. Når jeg har fri, liker jeg å komme meg ut i skogen for å spikke en stekespade, ta på meg skiene og gå opp på fjellet, eller fange fisk med harpun.
`,
  };
  return {
    en: await markdownToHtml(content.en),
    no: await markdownToHtml(content.no),
  };
};
