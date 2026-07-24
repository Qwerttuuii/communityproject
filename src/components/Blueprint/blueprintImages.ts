import exteriorview1 from "../../assets/images/blueprint/exteriorview1.jpeg";
import exteriorview2 from "../../assets/images/blueprint/exteriorview2.jpeg";
import groundfloorplan from "../../assets/images/blueprint/groundfloorplan.jpeg";

export interface BlueprintImage {
  image: string;
  title: string;
}

export const blueprintImages: BlueprintImage[] = [
  {
    image: exteriorview1,
    title: "Main Building Concept",
  },
  {
    image: exteriorview2,
    title: "Youth Center Layout",
  },
  {
    image: groundfloorplan,
    title: "Ground Floor Plan",
  },
];