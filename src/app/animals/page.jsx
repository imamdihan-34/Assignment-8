"use client";
import { useState } from "react";
import animalsData from "../data/animals.json";
import AnimalCard from "../components/AnimalCard";

export default function AllAnimalsPage() {
  const [animals, setAnimals] = useState(animalsData);

  const handleSort = (order) => {
    const sorted = [...animals].sort((a, b) => {
      return order === "asc" ? a.price - b.price : b.price - a.price;
    });
    setAnimals(sorted);
  };

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold">Available Animals</h2>
        
        <select 
          className="select select-bordered w-full max-w-xs" 
          defaultValue="default" 
          onChange={(e) => handleSort(e.target.value)}
        >
         
          <option value="default" disabled>Sort by Price</option>
          <option value="asc">Low to High</option>
          <option value="desc">High to Low</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {animals.map((animal) => (
          <AnimalCard key={animal.id} animal={animal} />
        ))}
      </div>
    </div>
  );
}