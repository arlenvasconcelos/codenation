const promotions = ['SINGLE LOOK', 'DOUBLE LOOK', 'TRIPLE LOOK', 'FULL LOOK'];

function getShoppingCart(ids, productsList) {

  const products = []
  const categories = new Set()		

	const cartProducts = productsList.filter((product) => {
    
    //find Product
    if (ids.find(id => id === product.id)){

      //get products. name and category only
      products.push({name: product.name, category: product.category})
      
      //get unique categories
      categories.add(product.category)

      //Return to filter the products list
      return true;
    }

    //Return to filter the products list
		return false
	})

	//get promotion
	const promotion = promotions[categories.size-1]

	return {
		products, 
		promotion, 
		...getValues(cartProducts, promotion)}
}


function getValues(cartProducts, promotionKey){
	const values = {
		fullPrice: 0,
    reducedPrice: 0,
	}
  
  cartProducts.forEach((product)=>{
    // Sum regularPrice of all cart products
		values.fullPrice += product.regularPrice
		
		//Get price on promotion. if it equal 0, reduced price not found
		let reducedPrice = product.promotions.reduce((accumulator, promotion) => {
			return promotion.looks.includes(promotionKey) ? promotion.price : accumulator	
		}, 0)
		
		values.reducedPrice += (reducedPrice ? reducedPrice : product.regularPrice)
  })

	return {
		totalPrice: values.reducedPrice.toFixed(2),
		discountValue: (values.fullPrice - values.reducedPrice).toFixed(2),
		discount: (((values.fullPrice - values.reducedPrice)/values.fullPrice)*100).toFixed(2) + '%'
	}
}

module.exports = { getShoppingCart };
