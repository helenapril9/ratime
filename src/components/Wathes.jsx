import React from "react";
import { useState } from "react";
import Forms from "./Forms";
import WatcgesList from "./WatcgesList";

export default function Wathes() {
  const [masWatches, setMasWatches] = useState([]);

  const handleAdd = (data) => {
    setMasWatches((prevTrainigs) => [...prevTrainigs, data]);
    console.log(masWatches);
  };

  const handleRemove = (title) => {
    setMasWatches((prevTrainigs) =>
      prevTrainigs.filter((o) => o.title !== title)
    );
  };

  return (
    <div>
      <Forms onAdd={handleAdd} />
      <WatcgesList masWatches={masWatches} handleRemove={handleRemove} />
    </div>
  );
}