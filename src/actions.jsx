export const addone =(article)=>{
    return{
        type:'add',
        payload:article
    }
}
export const deleteone =(id)=>{
    return{
        type:'delete',
        payload:id
    }
}
export const Edit=(article)=>{
    return{
        type:'edit',
        payload:article
    }
}