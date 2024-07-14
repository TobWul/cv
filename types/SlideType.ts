export type SlideType = {
  id: string;
  metadata: {
    image: string;
    type?: "image" | "default";
  };
  content: string;
};
