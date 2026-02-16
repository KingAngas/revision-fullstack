import { randomUUID} from  'crypto' ;


let items = [] ;
//recuperer la liste des etudiants en mode pagine 
export const getAll =({page =1 , limit=10}) =>{
    const start =(page -1) * limit ;
    const end =start + limit ;

    return {
        data : items.slice(start,end),
        total : items.length,
        page,
        limit
    }
}

//Ajout d un etudiant
export const create =(payload) => {
    const newItem ={
        id : randomUUID,
        ...payload,
        createdAt : new Date().toISOString()
    }

    items = items.concat(newItem) ;
    return newItem;
};