let tabla= document.getElementById("tablaCarrito");
//let productoCarts= [];




































document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(CART_INFO_URL).then(function (resultObj) {
         if (resultObj.status === "ok") {
              
              productoCarts = resultObj.data.articles;
              
              console.log(productoCarts)

         }
    });
});