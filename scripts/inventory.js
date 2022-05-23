let data= JSON.parse(localStorage.getItem("Products")) || []

data.map(function(elem,index){
    let div = document.createElement("div")
    let img = document.createElement("img")
    let p1 = document.createElement("p")
    let p2 = document.createElement("p")
    let p3 = document.createElement("p")
    let but = document.createElement("button")
    but.setAttribute("id","remove_product")
    but.innerText="Remove Items"
    but.addEventListener("click", function(){
        removeproduct(elem,index)
    })
    img.src=elem.image
    p1.innerText=elem.type
    p2.innerText=elem.desc
    p3.innerText=elem.price
    div.append(img,p1,p2,p3,but)
    document.querySelector("#all_products").append(div)
})

function removeproduct(elem,index){
    data.splice(index,1)
    window.location.reload()
    localStorage.setItem("Products",JSON.stringify(data))
}