import { markdownToHtml } from "@/utils/markdownToHtml";

export const startContent = async () => {
  const content = {
    no: `
Hei, jeg heter Tobias Wulvik, en digital produktdesigner som hopper mellom UX, UI og frontend-arbeid. I prosjektene jeg har jobbet på, har jeg funnet min plass som en brobygger mellom sluttbrukeren og utviklerne. Det har jeg gjort gjennom innsiktsarbeid og workshop-arbeid for å forstå brukere og å jobbe sammen med utviklerne på selve koden.

Verktøykassen min for å bygge bro er ganske variert. Jeg bruker Figma for å tegne opp brukergrensesnitt, og stor fan av enkle tusjtegninger. Enten det er for å lage low-fidelity prototyper eller for å skape tegneserieaktige metaforer for de konseptene vi jobber med – det er utrolig hva en enkel tegning kan gjøre for å samle folk rundt felles idéer (ta gjerne en titt på porteføljeprosjektene mine for mer!).

Litt om meg: Jeg kommer fra Mosjøen i Nordland, har studert i Trondheim, og har bodd de siste to årene i Danmark sammen med min forlovede. Når jeg har fri, liker jeg å komme meg ut i skogen for å spikke en stekespade, ta på meg skiene og gå opp på fjellet, eller fange fisk med harpun.
`,
    en: `
Hi, my name is Tobias Wulvik. I am a digital product designer specializing in UX, UI, and frontend work. In the projects I've worked on, I've found my place as a bridge between the end user and the developers.

My toolkit for bridging the gap is varied. I use Figma to design user interfaces, and I'm a big fan of drawing. Whether it's to create low-fidelity prototypes or to create cartoon-like metaphors for the concepts we are working on – it's amazing what a simple drawing can do to bring people together around common ideas (feel free to check out my portfolio projects for more!). Lastly, knowing how to code and working with my team's engineers helps bring design sketches to life smoothly.

A bit about me: I'm from Mosjøen in Norway, studied in Trondheim, and have lived in Denmark for the past two years with my fiancée. In my free time, I like to get out into the woods to do spoon carving, put on my skis and go up the mountain, or go spearfishing in the fjords.
`,
  };
  return {
    en: await markdownToHtml(content.en),
    no: await markdownToHtml(content.no),
  };
};
