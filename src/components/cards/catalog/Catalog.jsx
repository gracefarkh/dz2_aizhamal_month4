import Cards from "../cards/Cards"
import { catalogCards} from "../../../constant/data"

function Catalog(){
    return(
        <div className="catalog">
            <input type="text" placeholder="search"/>
            <div className="catalogPost">
                {catalogCards.map((item,i)=><div key={item.price}>
                    <h1>Товары</h1>
                <Cards cards={item} />
                </div>)}
            </div>
        </div>
    )
}
export default Catalog