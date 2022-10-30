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
            `<a href="index.product-details.html?id=${product.id}" class="product">
                <h3>${product.name}</h3>
                <img src="${product.images[0].src}" alt="${product.name}">              
            </a>`;
    })
}
/*
// fetching details about the flowers //

const detailcontainer = document.querySelector(".flower-details");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

console.log(id);

const detailUrl = "https://bigflowerpower.online/wp-json/wc/store/products" + id;

async function fetchFlower(){

    try {
        const response = await fetch(url);
        const details = await response.json();

        console.log(details);

        createHTML(details);

    }

    catch(error) {
        console.log(error);
        detailcontainer.innerHTML = message("error", error);
    }
}

fetchFlower();

function createHTML(details){
    detailcontainer.innerHTML = `<h1>${details.name}</h1>`;
}
*/