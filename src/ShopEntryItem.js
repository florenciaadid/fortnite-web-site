import './shopEntryItem.scss'
import noImage from './assets/noImage.png'
import vBucks from './assets/v-bucks.webp'
function ShopEntryItem({item}){
    return(
        
        <div className="item-container">
            <img src={item.images.featured || noImage } alt={item.name} />
            {/* <hr className='hr-item' /> */}
            <div className='description-container'>
                <p> {item.name}</p>
                <p>"{item.description}"</p>
                <p>Rarity: {item.rarity.value}</p>
            </div>
        </div>
    )
}

export default ShopEntryItem