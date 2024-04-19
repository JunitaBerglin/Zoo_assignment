import { DateTime } from "luxon";
import { IAnimal } from "../../models/IAnimal";
import "./FeedAnimal.scss";

interface IFeedAnimalProps {
  animal: IAnimal;
  onFeed: () => void;
}

export const FeedAnimal = ({ animal, onFeed }: IFeedAnimalProps) => {
  const handleClick = () => {
    onFeed();
  };

  const formatedDate = DateTime.fromISO(
    animal.lastFed
  ).toLocaleString(DateTime.DATETIME_MED);

  return (
    <>
      {animal.isFed && (
        <p className="animalFull">{animal.name} is full now 😊</p>
      )}
      <p className="lastFed">Last fed: {formatedDate}</p>
      <button
        className={animal.isFed ? "feedBtn" : "feedBtn feed"}
        onClick={handleClick}
        disabled={animal.isFed}>
        {animal.isFed ? "Animal is full" : "Feed the animal"}
      </button>
    </>
  );
};
