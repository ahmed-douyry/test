import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addone } from "./actions";

export const AjouterArticle = () => {
  const Liste = useSelector((data) => data);
  const id = Liste[Liste.length - 1].id + 1;
  const [designation, setDesignation] = useState("");
  const [famille, setFamille] = useState("");
  const dispatch = useDispatch();
  const nav = useNavigate();

  const ajouter = () => {
    const new1 = { id, designation, famille };
    dispatch(addone(new1));
    nav("/");
  };

  return (
    <>
      <div className="container">
        <form className="mx-auto">
          <div className="mb-3">
            <label htmlFor="id" className="form-label">ID</label>
            <input type="text" className="form-control text-center" id="id" readOnly value={id} />
          </div>
          <div className="mb-3">
            <label htmlFor="designation" className="form-label">Désignation</label>
            <input type="text" className="form-control text-center" id="designation" onChange={(e) => setDesignation(e.target.value)} />
          </div>
          <div className="mb-3">
            <label htmlFor="famille" className="form-label">Famille</label>
            <input type="text" className="form-control text-center" id="famille" onChange={(e) => setFamille(e.target.value)} />
          </div>
          <button className="btn btn-primary" onClick={ajouter}>Sauvegarder</button>
        </form>
      </div>
    </>
  );
};
