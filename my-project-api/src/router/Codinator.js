

export const goToPokedexPage = (navigate, set) => {
    navigate('/pokedex')
    set(2);
};
    
export const goToDetailsPage = (navigate, id) => {
    navigate(`/detalhes/${id}`);
    
};


export const goToListPage = (navigate, set) => {
    navigate('/');
    set(3)
};









