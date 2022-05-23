//store the products array in localstorage as "products"

let data= JSON.parse(localStorage.getItem("Products")) || []

function Products(type,desc,price,image){
    this.type=type;
    this.desc=desc;
    this.price=price;
    this.image=image;
}
document.querySelector("#products").addEventListener("submit", inputData)

function inputData(){
    
    document.querySelector("#products")
    let type= products.type.value;
    let desc= products.desc.value;
    let price= products.price.value;
    let image= products.image.value;

    let arr = new Products(type,desc,price,image)
    data.push(arr)
    localStorage.setItem("Products",JSON.stringify(data))
}