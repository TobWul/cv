import sanityClient from "@sanity/client";
const client = sanityClient({
  projectId: "y6s7btku",
  dataset: "production",
  apiVersion: "2023-01-28", // use current UTC date - see "specifying API version"!
  useCdn: true, // `false` if you want to ensure fresh data
});

export default client;
