const url = "https://bigflowerpower.online/wp-json/wc/store/products";
const productContainer = document.querySelector(".products");

async function getProducts(){
    try{
        const response = await fetch(url);
        const getResults = await response.json();
        createHTML(getResults);
    }
    catch(error){
        console.log(error);
    }
}

getProducts();

function createHTML(products){
    products.forEach(function(product){
        console.log(product)
        productContainer.innerHTML += 
            `<div class="product">
                <h3>${product.name}</h3>
                <img src="${product.images[0].src}" alt="${product.name}">
                             
            </div>`;

    })


}