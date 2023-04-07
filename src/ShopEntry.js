import ShopEntryItem from "./ShopEntryItem";

function ShopEntry({ entry }) {

    const lightblue = {
        backgroundColor: 'lightblue'
    }

    const violet = {
        backgroundColor: 'violet'
    }
    return (
        <div style={lightblue}>
            <p>{entry.regularPrice}</p>
            <p>{entry.banner?.value}</p>
            <p style={violet} >{entry.newDisplayAsset.id}</p>
            <img src={entry.newDisplayAsset.materialInstances.images?.OfferImage} alt="" />


            {entry.items.map((item) =>
                <ShopEntryItem item={item} />
            )}
        </div>
    )

}

export default ShopEntry