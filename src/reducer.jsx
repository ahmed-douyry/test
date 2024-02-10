const initialstate = [
    {id:10,designation:'article1',famille:'informatique'},
    {id:11,designation:'article2',famille:'bureautique'},
    {id:12,designation:'article3',famille:'electronique'}
]
export const reducer =(state=initialstate,action)=>{
    switch(action.type){
        case 'add':
            return[...state,action.payload]
        case 'delete':
            return state.filter(article=>article.id!=action.payload)
        case 'edit':
            {
                const article = state.find(article=>article.id == action.payload.id)
                article.designation = action.payload.designation
                article.famille = action.payload.famille
                return state
            }
        default:
            return state
    }
    

}