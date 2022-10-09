let ProductImg = document.getElementById("ProductImg");

let smallImg = document.getElementsByClassName("smallImg");

smallImg[0].onclick = function() {
    ProductImg.src = smallImg[0].src;

}

smallImg[1].onclick = function() {
    ProductImg.src = smallImg[1].src;

}

smallImg[2].onclick = function() {
    ProductImg.src = smallImg[2].src;
}

smallImg[3].onclick = function() {
    ProductImg.src = smallImg[3].src;
}
