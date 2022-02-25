   

    var data = [
        {
            image:"https://gnbdevcdn.s3-ap-southeast-1.amazonaws.com/Marketing/tgsgiftweb.png",
    
        },
        {
        image:"https://d1z88p83zuviay.cloudfront.net/BannerImages/658bab15-c7ac-48e5-b0aa-6e06afd35b13_1320x376.jpg",

    }, 
    {
        image:"https://d1z88p83zuviay.cloudfront.net/BannerImages/4a96822e-4036-47fb-ae56-97a722248f46_1320x376.jpg",

    },      
    
    {
        image:"https://d1z88p83zuviay.cloudfront.net/BannerImages/8b87a498-1fad-4ad4-9e4d-fdcbb9c55a34_1320x376.jpg"

    },
    {
        image:"https://d1z88p83zuviay.cloudfront.net/BannerImages/5e8e3193-496d-45a0-955a-537762a2cba7_1320x376.jpg"

    },
    {
        image:"https://d1z88p83zuviay.cloudfront.net/BannerImages/d8876782-c299-48dd-9dbf-eb17f283b372_1320x376.png"

    },
    {
        image:"https://d1z88p83zuviay.cloudfront.net/BannerImages/4125414c-5c49-4ff5-8c5e-58160df8cd15_1320x376.jpg"

    },

]

var arr = []

data.map(function(item){
    arr.push(item.image)
    localStorage.setItem("slide", JSON.stringify(arr))
})

var i = 0;
var id;
 
var div = document.getElementById("dis")

function startslide(){
    var img = JSON.parse(localStorage.getItem("slide"))
    
  
  id =  setInterval(function(){
        if(i === img.length){
            i = 0;
        }
        div.innerHTML = null;
        var imgtag = document.createElement("img");
        imgtag.setAttribute("src", img[i])
        imgtag.setAttribute("class", "imgtag")

        div.append(imgtag)
        
        i++;
    }, 3000)
}

function stopslide(){
    clearInterval(id)
}

startslide()
 

// ----------------------------------sliding div end -----------------

var data2 = [
     
    {
        image:"https://www.naturesbasket.co.in/Images/NaturesBasketGifting.jpeg?v=7",

    }, 
    {
        image:"https://www.naturesbasket.co.in/Images/Japanesecuisine-webbox.png?v=8",

    },      
    
    {
        image:"https://www.naturesbasket.co.in/Images/Gluten-free-web%20box%20banner.png?v=14"

    },
    
]


data2.map(function myfun2(elem){
    var productDiv = document.createElement("div")
    productDiv.setAttribute("class", "productDiv")
    var imgtag = document.createElement("img");
    imgtag.setAttribute("src", elem.image)
    imgtag.setAttribute("class", "imgproduct")

    productDiv.append(imgtag)

    var productinside= document.getElementById("product_inside")
   productinside.append(productDiv)
})


// ---------------------data2_end---------------------

var data3 = [
    {
        image:"https://gnbdevcdn.s3.amazonaws.com/Images/Category/Exoticvegetablesweb.png",
        name1:"Exotic Vegetables",
        name2:"Asparagus Artichokes",
        name3:"Avocados Peppers",
        name4:"Broccoli Zucchini",
        name5:"View All",
         
    },
    {
       
        image:"https://gnbdevcdn.s3.amazonaws.com/Images/Category/coldcutweb.png",
        name1:"Meat, Poultry & Seafood",
        name2:"Chicken Cuts Lollipops Mince",
        name3:"Fish Other Seafood",
        name4:"Fresh Kebabs Others",
        name5:"View All",
   },
   {
       
    image:"https://gnbdevcdn.s3.amazonaws.com/Images/Category/Freshartisinalbreadsweb.png",
    name1:"Fresh Artisanal Breads",
    name2:"Breadsticks Crostinni Lavache",
    name3:"Buns Croissants Bagels",
    name4:" Muffins Cakes Brownies",
    name5:"View All",
},

   
]

data3.map(function myfun3(elem){
    var productDiv = document.createElement("div")
    productDiv.setAttribute("class", "productDiv")

   

    var name1 = document.createElement("p")
    name1.textContent = elem.name1
    var name2 = document.createElement("p")
    name2.textContent = elem.name2
    var name3 = document.createElement("p")
    name3.textContent = elem.name3
    var name4 = document.createElement("p")
    name4.textContent = elem.name4
    var name5 = document.createElement("p")
    name5.textContent = elem.name5


    
    var divp = document.createElement("div")
    divp.setAttribute("class", "producttext2")
    

    divp.append(name1, name2, name3, name4, name5)
    

    var imgtag = document.createElement("img");
    imgtag.setAttribute("src", elem.image)
    imgtag.setAttribute("class", "imgproduct")

    productDiv.append(imgtag, divp)

    let x= document.getElementById("dis2")
      x.append(productDiv)

     

   
})


// -------------------data_3_end------------------------------

var data4 = [
    {
        image:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/ce52f620-3f03-454e-a03b-c10910b1b55c_425x425.jpg",
        deliver:"Delivery In 90 Minutes",
        name:"TY-PHOO  MINT 25'S GRN TEA",
        piece:"1",
        price:"189",
        MRP:"210",
    },
    {
       image:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/33af73dc-0a54-48e1-add8-42137e0a3cc7_425x425.jpg",
       deliver:"Delivery In 90 Minutes",
      name:"SALSALITO TORTILLA CHIPS",
      piece:"1",
       price:"70",
       MRP:"90",
   },
   {
       image:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/fab53fc7-300b-4303-895a-ea2689a8fccd_425x425.JPG",
       deliver:"Delivery In 90 Minutes",
       name:"PRASUMA MOMOS ORGNL PORK",
       piece:"1",
       price:"385",
       MRP:"395",
   },
   {
    image:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/3f7c0fe3-7977-4499-9009-884eb28c3293_425x425.jpg",
    deliver:"Delivery In 90 Minutes",
    name:"BORGES UNFILTD ORGANIC",
    piece:"1",
    price:"333",
    MRP:"400",
},
   
   
]


var productitems = JSON.parse(localStorage.getItem("Super_cart")) || []


data4.map(function myfun4(elem){
    var productDiv = document.createElement("div")
    productDiv.setAttribute("class", "productDiv")

    var price_given = document.createElement("div")
    price_given.textContent = "MRP RS." + elem.MRP
    price_given.setAttribute("class", "price_given")
    price_given.style.textDecoration = "line-through"

    var price_given2 = document.createElement("div")
    price_given2.textContent = "MRP RS." + elem.price
    price_given2.setAttribute("class", "price_given")

    var deliver = document.createElement("p")
    deliver.textContent = elem.deliver
    var piece = document.createElement("p")
    piece.textContent = elem.piece +"Pc"

    var name = document.createElement("p")
    name.textContent = elem.name

    var price = document.createElement("p")
    price.textContent =  "Buy @ Rs." +  elem.price + "/-"

    var divp = document.createElement("div")
    divp.setAttribute("class", "producttext3")


    var btnadd = document.createElement("button");
    btnadd.setAttribute("class", "btncart")
    btnadd.textContent = "ADD to cart"
    btnadd.addEventListener("click", function(){
       product(elem)
       
   })

   var btn_div = document.createElement("div")
   btn_div.style.display = "flex"
   btn_div.append(price_given,price_given2,btnadd)

    divp.append(deliver,  name, piece, price,btn_div)
    

    var imgtag = document.createElement("img");
    imgtag.setAttribute("src", elem.image)
    imgtag.setAttribute("class", "imgproduct")

    productDiv.append(imgtag, divp)

    var productinside= document.getElementById("dis3")
   productinside.append(productDiv)

     

   
})

function product(elem){
    productitems.push(elem)
  
  localStorage.setItem("Super_cart", JSON.stringify(productitems))
}


export default startslide
 