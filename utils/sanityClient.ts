import { createClient } from "@sanity/client";

export const sanityClient = createClient({
  projectId: "y6s7btku",
  dataset: "production",
  apiVersion: "2023-01-28", // use current UTC date - see "specifying API version"!
  useCdn: true, // `false` if you want to ensure fresh data
});
