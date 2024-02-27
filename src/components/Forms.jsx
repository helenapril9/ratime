import React from "react";
import { useState } from "react";

export default function Forms(props) {
  const { onAdd } = props;

  const [form, setForm] = useState({
    title: "",
    timeZone: "",
    error: false,
  });

  const handleChange = ({ target }) => {
    const name = target.name;
    setForm((prevForm) => ({ ...prevForm, [name]: target.value }));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (form.title === "" || form.timeZone === "") {
      setForm((prevForm) => ({ ...prevForm, error: true }));
    } else {
      onAdd({ title: form.title, timeZone: form.timeZone });
      setForm({ title: "", timeZone: "" });
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="date">Название</label>
          <input
            id="date"
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="text">Временная зона</label>
          <input
            id="text"
            type="number"
            name="timeZone"
            value={form.timeZone}
            onChange={handleChange}
          />
        </div>
        <button className="btn">Ok</button>
      </form>
      <div>
        {form.error && <span className="error">Заполните все поля </span>}
      </div>
    </div>
  );
}