
    const baseUrl = "https://bigflowerpower.online/wp-json/wc/store/products";

    const productContainer = document.querySelector(".products");

    async function getProducts(url){
        const response = await fetch(url);
        const products = await response.json();
    }

    getProducts(baseUrl);