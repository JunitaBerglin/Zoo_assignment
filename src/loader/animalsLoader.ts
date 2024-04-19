import axios from "axios";
import { IAnimal } from "../models/IAnimal";
import { useState } from "react";

export interface Loader {
  animals: IAnimal[];
}
const getAnimals = async () => {
  const res = await axios.get(
    "https://animals.azurewebsites.net/api/animals"
  );
  localStorage.setItem("animals", JSON.stringify(res.data));
  return res.data;
};

export const animalsLoader = async () => {
  let animals = JSON.parse(localStorage.getItem("animals") || "[]");
  if (animals.length === 0) {
    animals = await getAnimals();
  }
  return { animals };
};
