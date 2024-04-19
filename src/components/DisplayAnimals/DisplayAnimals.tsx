import { SyntheticEvent } from "react";
import { IAnimal } from "../../models/IAnimal";
import "../DisplayAnimals/DisplayAnimals.scss";

interface AnimalsProps {
  animal: IAnimal;
}

export const DisplayAnimals = ({ animal }: AnimalsProps) => {
  const handleError = (e: SyntheticEvent<HTMLImageElement>) => {
    const img = e.target as HTMLImageElement;
    img.src =
      "https://i.postimg.cc/Y9d1f9qz/360-F-470299797-UD0eo-VMMSUb-HCc-NJCdv2t8-B2g1-GVq-Ygs.jpg";
  };

  return (
    <>
      <div className={animal.isFed ? "animalBox fed" : "animalBox"}>
        <h1 className="animalBox__name">{animal.name}</h1>
        {animal.isHungry && !animal.isFed && (
          <p className="animalBox__starving">Hungry! 😢</p>
        )}
        {animal.isFed && (
          <p className="animalBox__full">Full and happy 😀</p>
        )}
        <div className="animalBox__img">
          <img
            src={animal.imageUrl}
            onError={handleError}
            alt={"picture of the animal"}
          />
        </div>

        <p className="animalBox__shortDesc">
          {animal.shortDescription}
        </p>
      </div>
    </>
  );
};
