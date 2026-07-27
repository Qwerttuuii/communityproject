import hall1 from "../../assets/images/blueprint/hall1.avif";
import hall2 from "../../assets/images/blueprint/hall2.avif";
import hall3 from "../../assets/images/blueprint/HALL3.avif";

export interface BlueprintImage {
  image: string;
  title: string;
}

export const blueprintImages: BlueprintImage[] = [
  {
    image: hall1,
    title: "First view plan",
  },
  {
    image: hall2,
    title: "Ground view plan",
  },
  {
    image: hall3,
    title: "Second view Plan",
  },
];