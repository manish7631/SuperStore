var cartitems = JSON.parse(localStorage.getItem("Super_cart"))

   document.querySelector("button").textContent = "Total item is " + cartitems.length;
 
displayitems(cartitems)


function displayitems(product){
    product.map(function(item, index){
        var divmain = document.createElement("div")
        divmain.setAttribute("class", "divMain")

        var imagetag = document.createElement("img") 
        imagetag.setAttribute("src", item.image)
        imagetag.setAttribute("class", "imagetag")
        var name = document.createElement("p")
        name.setAttribute("class", "ptag")
        name.textContent = item.name

        var price = document.createElement("p")
        name.setAttribute("class", "ptag")
        price.textContent = "Rs." + item.price;

        var btn = document.createElement("button")
        btn.textContent = "Delete"
        btn.setAttribute("class", "btn")
        btn.addEventListener("click", function(){
            makedelete(index)
        })


        
        var div1 = document.createElement("div")
        div1.setAttribute("class", "Div")
        var div2 = document.createElement("div")
        div2.setAttribute("class", "Div")
        var div3 = document.createElement("div")
        var div4 = document.createElement("div")
        div4.setAttribute("class", "Div")
        div3.setAttribute("class", "Div")
        div1.append(imagetag)
        div2.append(name)
        div3.append(price)
        div4.append(btn)


        divmain.append(div1, div2, div3, div4)

        var x = document.getElementById("cartitems")
        x.append(divmain)

    })
}

var total = cartitems.reduce(function (acc, cv) {
    return acc + Number(cv.price)
}, 0);

document.querySelector("#total").innerHTML = `<h3>Total cost is ${ "Rs." + total}</h3>`
  document.getElementById("check").addEventListener("click", goToCheckout)

function goToCheckout() {
    window.location.href = "checkout.html"
}

//console.log(total)


function makedelete(index){
    var x = document.getElementById("cartitems").innerHTML = ""
    //document.querySelector("button").textContent = ""
    cartitems.splice(index, 1)
   localStorage.setItem("Super_cart", JSON.stringify(cartitems))
     
    
     
    document.querySelector("button").textContent = "Total item is " + cartitems.length;
    
var total = cartitems.reduce(function (acc, cv) {
    return acc + Number(cv.price)
}, 0);

document.querySelector("#total").innerHTML = `<h3>Total cost is ${ "Rs." + total}</h3>`
  document.getElementById("check").addEventListener("click", goToCheckout)

function goToCheckout() {
    window.location.href = "checkout.html"
}
displayitems(cartitems)
}
 
 

export default displayitems