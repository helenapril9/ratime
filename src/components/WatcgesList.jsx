import React from "react";
import { nanoid } from "nanoid";
import WatchesItem from "./WatchesItem";

export default function WatcgesList(props) {
  return (
    <div>
      <ul className="container">
        {props.masWatches.map((item) => {
          return <WatchesItem key={nanoid()} {...item} handleRemove ={props.handleRemove}/>;
        })}
      </ul>
    </div>
  );
}