
function Cards({cards}){
    return(
        <div className="cards">
            <img src={cards.url} alt="" />
            <h2 className={cards.classes}>name:{cards.name}</h2>
            <h3>price:{cards.price}</h3>
            <h3>comment:{cards.comment}</h3>
        </div>
    )
}
export default Cards