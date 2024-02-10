import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteone } from "./actions";
import { useEffect, useState } from "react";

export const ListeArticle = () => {
  const Liste = useSelector(data => data);
  const[search,setsearch] = useState('')
  const dispatch = useDispatch()
  const [elements,setelements] = useState([])

  useEffect(()=>setelements(Liste.filter(article=>article.famille.includes(search))),[search,Liste])
    const supprimer =(id)=>{
        dispatch(deleteone(id))
    }
  return (
    <>
      <div className="container">
        <input type="text" onChange={(e)=>setsearch(e.target.value)}  />
        <div className="row">
          {elements.map(article => (
            <div key={article.id} className="col-md-6 mx-auto mb-3">
              <div className="card">
                <h1 className="card-header bg-info">{article.designation} (ID: {article.id})</h1>
                <div className="card-body">
                  <p className="card-text">{article.famille}</p>
                </div>
              <button className="btn btn-danger" onClick={()=>supprimer(article.id)}> Supprimer</button>
              <Link to={`/ModifierArticle/${article.id}`}><button className="btn btn-warning" > Modifier</button></Link>

              </div>
            </div>
            
          ))}
        </div>
      </div>
      <Link to={'/ajouterArticle'}><div className="text-center mt-3">
        <button className="btn btn-primary">Ajouter un article</button>
      </div></Link>
    </>
  );
};
