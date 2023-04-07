function ShopEntryItem({item}){
    const style = {
        backgroundColor: 'white'
    }
    return(
        
        <div style={style}>
               <p>Name: {item.name}</p>
               <p>Description: {item.description}</p>
               <p>Type: {item.type.value}</p>
               <p>Rarity: {item.rarity.value}</p>
               <img src={item.images.featured} alt="" />
         
        </div>
    )
}

export default ShopEntryItem