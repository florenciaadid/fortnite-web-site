import ShopEntryItem from "./ShopEntryItem";
import './shopEntry.scss'
import vBucks from './assets/v-bucks.webp'

function ShopEntry({ entry }) {


    return (
        <div className="shop-container">
            <h3 className="yellow-banner">Creator: {entry.newDisplayAsset.id}</h3>
            <div className="price-container">
            <h3>Price: {entry.regularPrice}</h3>
            <img src={vBucks} alt="v-bucks" />
            </div>
           
            {entry.banner?.value && (
                <h3 className="pink-banner">{entry.banner.value}</h3>
            )}

            <div className="entry-container" >
                {entry.items.map((item) =>
                    <ShopEntryItem item={item} />
                )}
            </div>
        </div>
    )

}

export default ShopEntry