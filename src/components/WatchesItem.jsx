import React, { useEffect, useState } from "react";

export default function WatchesItem(props) {
  const [updated, setUpdated] = useState();
  let timeout;

  const dateTimeZone = () => {
    let date = new Date();
    date.setHours(
      date.getHours() + date.getTimezoneOffset() / 60 + Number(props.timeZone)
    );

    let time = `${
      date.getHours() < 10 ? "0" + date.getHours() : date.getHours()
    }:${date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()}:${
      date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds()
    }`;
    setUpdated(time);
  };

  useEffect(dateTimeZone, [props.timeZone]);

  useEffect(() => {
    timeout = setTimeout(dateTimeZone, 1 * 1000);
    return () => {
      window.clearTimeout(timeout);
    };
  }, [updated]);

  return (
    <div>
      <span> {props.title} </span> <span> {updated} </span>{" "}
      <span
        className="removeTrainigs"
        onClick={() => props.handleRemove(props.title)}
      >
        x
      </span>
    </div>
  );
}