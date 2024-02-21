import React, { useEffect, useState } from "react";
import "../../stylesheet/update_item.css";

function ParseCategory({ v }) {
  return (
    <option key={v.id} value={v.id}>
      {v.name}
    </option>
  );
}

export default function UpdateItem({}) {
  const [categories, updateCategories] = useState([]);
  useEffect(() => {
    let temp = JSON.parse(sessionStorage.getItem("categories"));
    updateCategories(temp);
  }, []);
  console.log(categories);

  return (
    <div className="updateItem" >
      <h2 className="topic">Dodawanie artykułu</h2>
      <form style={{padding:"2em"}} >
        <div className="img">
          <img alt="Miejsce na zdjęcie" />
          <button className="btn btn-secondary">
            Dodaj/aktualizuj zdjęcie
          </button>
        </div>

        <ul>
          <li className="form-floating">
            <input
              type="text"
              className="form-control"
              name="title"
              id="title"
              placeholder="Zabity za prawdę..."
              required
            />
            <label htmlFor="title">Tytuł:</label>
          </li>

          <div className="d-flex  g-1" style={{gap: ".5em"}}>
            <li className="form-floating col-md">
              <select
                className="form-select"
                name="category"
                id="category"
                defaultValue=""
                aria-label="Wybierz kategorię"
                required
              >
                <option value="" disabled>
                  ...
                </option>
                {categories.map((v) => {
                  return <ParseCategory v={v} />;
                })}
              </select>
              <label htmlFor="category" className="form-label">
                Kategoria:
              </label>
            </li>
            <li className="form-floating col-sm">
              <input
                type="number"
                className="form-control"
                size="2"
                min="1"
                name="amount"
                id="amount"
                placeholder="0"
                required
              />
              <label htmlFor="amount" className="form-label">
                Liczba sztuk:
              </label>
            </li>
            <li className="form-floating col-sm">
              <input
                type="number"
                className="form-control"
                step="0.01"
                size="2"
                min="1"
                name="prize"
                id="prize"
                placeholder="23"
                required
              />
              <label htmlFor="prize" className="form-label">
                Cena (zł):
              </label>
            </li>
          </div>
          <li className="form-floating">
            <textarea
              className="form-control"
              id="description"
              name="description"
              rows="3"
              placeholder="..."
            ></textarea>
            <label htmlFor="description">Opis:</label>
          </li>
          <div
            className="mw"
            style={{ display: "grid", justifyContent: "end" }}
          >
            <button className="btn btn-primary mb-1" disabled>
              Dodaj/aktualizuj pozycję
            </button>
          </div>
        </ul>
      </form>
    </div>
  );
}
