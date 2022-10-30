// fetching details about the flowers //

const detailContainer = document.querySelector(".flower-details");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

console.log(id);

const url = "https://bigflowerpower.online/wp-json/wc/store/products/" + id;

async function fetchFlower(){

    try {
        const response = await fetch(url);
        const product = await response.json();

        console.log(product);

        createHTML(product);

    }

    catch(error) {
        console.log(error);
        detailContainer.innerHTML = message("error", error);
    }
}

fetchFlower();

function createHTML(product) {
    detailContainer.innerHTML = `<div id="product.details.page">
                                <h3>${product.name}</h3>
                                <div class="product.detail.image">
                                <img src="${product.images[0].src}" alt="${product.name}" style="width: 70%">
                                </div>
                                <div>${product.description} </div>
                                </div>`

}