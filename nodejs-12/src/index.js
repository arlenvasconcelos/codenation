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
		...getValues(cartProducts, promotion)
	}
}

//get promotion that is going to be applied
function getPromotion (cartProducts){
	
	const categories = new Set()
	
	cartProducts.forEach((product) => {
		categories.add(product.category)	
	})	
	
	if (categories.size > 3)
		return promotions[3]

	return promotions[categories.size-1]
}

function getValues(cartProducts, promotionKey){
	
	let fullPrice = 0
  let reducedPrice = 0

	for (let i=0; i < cartProducts.length ; i++){
		//Sum regularPrice of all cart products
		fullPrice += cartProducts[i].regularPrice
		
		//Get price on promotion. if it equal 0, reduced price not found
		let promotionPrice = cartProducts[i].promotions.reduce((accumulator, promotion) => {
			return promotion.looks.includes(promotionKey) ? accumulator + promotion.price : accumulator			
		}, 0)
		
		reducedPrice += (promotionPrice ? promotionPrice : cartProducts[i].regularPrice)
	}


	return {
		totalPrice: reducedPrice.toFixed(2),
		discountValue: (fullPrice - reducedPrice).toFixed(2),
		discount: (((fullPrice - reducedPrice)/fullPrice)*100).toFixed(2) + '%'
	}
}

module.exports = { getShoppingCart };
