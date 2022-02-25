var data = [
    {
        image:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/008c2a97-74f4-4d95-bf4a-ec76afba26b8_425x425.jpg",
        name:" STRAWBERRY PUNNET",
        price:"75"

    },
    {
        image:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/70726a6d-f35e-480c-ba42-c95e808e3ec1_425x425.jpg",
        name:"Apple Red Delicious",
        price:"199",
    },
    {
        image:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/f341c972-bc85-4b0d-8309-6bdaa4fd0cad_425x425.JPG",
        name:"Grapes Red Globe-Imported",
        price:"149",
    },
    {
        image:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/620b0bb1-440e-4d83-896a-35bc6f274c3c_425x425.jpg",
        name:"Apple Fuji",
        price:"174",
    },
    {
        image:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/a473f647-d419-42d6-bceb-6859d017acbe_425x425.jpg",
        name:"Avocado - Imported",
        price:"374",
    },
    {
        image:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/83e591f2-ace2-4b45-8916-9a532bfea930_425x425.jpg",
        name:"Blueberry - Exotic",
        price:"449",
    },
    {
        image:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/8c875dc7-3a4b-43c9-8660-e235d52aa2f1_425x425.jpg",
        name:"FABBOX MIX NUT CHAAT",
        price:"370"
    },
    {
        image:"https://d1z88p83zuviay.cloudfront.net/Images/no-images425x425.jpg",
        name:"Natures premium mixed",
        price:"599"
    },
    
     
    
]
 

var x =   [];

var cart = JSON.parse(localStorage.getItem("Super_cart")) ||  [];

data.map(function(item){
    var obj = {
        image:item.image,
        name:item.name,
        price:item.price,
    }

     
    x.push(obj)

    localStorage.setItem("Super_productdata", JSON.stringify(x))

    
    
})

var prod = JSON.parse(localStorage.getItem("Super_productdata"))  
displayitems(prod)

 

 
document.getElementById("get_btn").addEventListener("click", myfun)

function myfun(){
   
     var selected = document.getElementById("sortByPrice").value;
     console.log("selected", selected)
     if (selected == "low") {
     prod = prod.sort(function (a, b) {
             return Number(a.price) - Number(b.price);
         })
     }

    if (selected == "high") {
         prod = prod.sort(function (a, b) {
             return Number(b.price) - Number(a.price);
        })
     }
     
    displayitems(prod)



  
       var selected = document.getElementById("sortByName").value;
       if (selected == "asc") {
           prod = prod.sort(function (a, b) {
             return a.name > b.name ? 1 : b.name > a.name ? -1 : 0;
          })
       }

     if (selected == "dsc") {
         prod = prod.sort(function (a, b) {
             return a.name > b.name ? -1 : b.name > a.name ? 1 : 0;
         })
       }
       displayitems(prod)
  
    }



function displayitems(prod){
    document.querySelector("#product_info").textContent = " ";
    prod.map(function(elem){
        
         var div1 = document.createElement("div");
     div1.setAttribute("class", "div1")
      var img = document.createElement("img");
      img.setAttribute("src", elem.image)
      img.setAttribute("class", "imagetag")

      var name = document.createElement("h4")
      name.textContent = elem.name

    
     var price = document.createElement("p")
     var btnadd = document.createElement("button");
     btnadd.setAttribute("class", "btncart")
     btnadd.textContent = "ADD TO cart"
     btnadd.addEventListener("click", function(){
         addtocart(elem)
     })
      price.textContent = "MRP Rs." + elem.price
      var div2 = document.createElement("div")
      div2.setAttribute("class", "div2")

      div2.append(name, price,btnadd)

      div1.append(img,div2)

    var x = document.getElementById("product_info")
    x.append(div1)

 
    })
    
}
 

  function addtocart(elem){
     cart.push(elem);
    // console.log(elem)

     localStorage.setItem("Super_cart", JSON.stringify(cart))
  }

  
  

 

export default displayitems