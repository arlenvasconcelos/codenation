const promotions = ['SINGLE LOOK', 'DOUBLE LOOK', 'TRIPLE LOOK', 'FULL LOOK'];

function getShoppingCart(ids, productsList) {

	//find objects in productsList
	const cartProducts = productsList.filter((product) => {
		return ids.find(id => id === product.id) !== undefined ? true : false
	})

	//save only product name and category
	const products = cartProducts.map(product => ({name: product.name, category: product.category}))

	//get promotion
	const promotion = getPromotion(cartProducts)

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
