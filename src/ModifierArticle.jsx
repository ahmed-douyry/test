import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { Edit } from "./actions"

export const ModifierArticle=()=>{
    const Liste = useSelector(data=>data)

    const {id}= useParams()
    const article = Liste.find(article => article.id == id)
    const [designation,setDesignation] = useState(article.designation)
    const [famille,setfamille] = useState(article.famille)
    const dispatch = useDispatch()
    const nav = useNavigate()
    const Modifier = ()=>{
        const new1 = {id,designation,famille}
        dispatch(Edit(new1))
        nav('/')
    }
    return(
        <div className="container">
        <form className="mx-auto">
          <div className="mb-3">
            <label htmlFor="id" className="form-label">ID</label>
            <input type="text" className="form-control text-center" id="id" readOnly value={id} />
          </div>
          <div className="mb-3">
            <label htmlFor="designation" className="form-label">Désignation</label>
            <input type="text" className="form-control text-center" id="designation" onChange={(e) => setDesignation(e.target.value)} value={designation}/>
          </div>
          <div className="mb-3">
            <label htmlFor="famille" className="form-label">Famille</label>
            <input type="text" className="form-control text-center" id="famille" onChange={(e) => setfamille(e.target.value)} value={famille} />
          </div>
          <button className="btn btn-primary" onClick={Modifier}>Sauvegarder</button>
        </form>
      </div>
    )
}