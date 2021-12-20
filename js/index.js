//DOM variables
const menuBtn = document.getElementById("menu"),
    logo = document.getElementById("logo"),
    subNav = document.getElementById("nav"),
    closeMenuBtn = document.getElementById("close"),
    closeFixed = document.getElementById("close2"),
    cart = document.getElementById("cart-image"),
    cartInfo = document.getElementById("cart-info"),
    emptyCart = document.getElementById("empty"),
    paimentInfo = document.getElementById("paiment-info"),
    deleteBtn = document.getElementById("delete"),
    quantityItems = document.getElementById("quantity-items"),
    finalPrice = document.getElementById("final-price"),
    chechkoutBtn = document.querySelector("#paiment button");
    nextBtns = Array.from(document.querySelectorAll(".next")),
    previousBtns = Array.from(document.querySelectorAll(".previous")),
    productMainImage = document.getElementById("main-image"),
    productMainImagesSmall = Array.from(document.querySelectorAll("#images .main-product")),
    productMainImages = Array.from(document.querySelectorAll("#images-fixed #img-container .main-product")),
    imagesFixed = document.getElementById("images-fixed"),
    productImages = Array.from(document.querySelectorAll("#images #all-products .img")),
    productImagesMenu = Array.from(document.querySelectorAll("#images-fixed #all-products .img")),
    quantity = document.querySelector("#quantity span"),
    plusBtn = document.getElementById("plus"),
    minusBtn = document.getElementById("minus"),
    addBtn = document.querySelector("#control button"),
    menuList = document.querySelector("#nav ul");

//Global Variables
let currentImage = 0,
    isEmpty = true,
    total = 0;

//functions

nextPreviousHandler = () => {
    productMainImagesSmall.forEach(element => {
        element.classList.remove("current");
    })
    productMainImagesSmall[currentImage].classList.add("current")
    productMainImages.forEach(element => {
        element.classList.remove("current");
    })
    productMainImages[currentImage].classList.add("current")
    productImages.forEach(element => {
        element.classList.remove("selected")
    })
    productImages[currentImage].classList.add("selected");
    productImagesMenu.forEach(element => {
        element.classList.remove("selected")
    })
    productImagesMenu[currentImage].classList.add("selected");
}
imagesListHandler = (element,index,array1,array2) => {
    currentImage = index
    array1.forEach(element => {
        element.classList.remove("selected")
    }) 
    element.classList.add("selected")
    array2.forEach(element => {
        element.classList.remove("selected")
    }) 
    array2[index].classList.add("selected")
    productMainImagesSmall.forEach(element => {
        element.classList.remove("current");
    })
    productMainImagesSmall[currentImage].classList.add("current")
    productMainImages.forEach(element => {
        element.classList.remove("current");
    })
    productMainImages[currentImage].classList.add("current")
}

//Menu 

menuBtn.onclick = () => {
    menuList.classList.add("show-it")
    menuBtn.classList.add("hide-it")
    logo.classList.add("hide-it")
    subNav.classList.add("hide-it")
    previousBtn.classList.add("hide-it")
    productMainImage.classList.add("hide-it")
    cart.classList.add("hide-it")
}
closeMenuBtn.onclick = () => {
    menuList.classList.remove("show-it")
    menuBtn.classList.remove("hide-it")
    logo.classList.remove("hide-it")
    subNav.classList.remove("hide-it")
    previousBtn.classList.remove("hide-it")
    productMainImage.classList.remove("hide-it")
    cart.classList.remove("hide-it")
    imagesFixed.classList.remove("show-it")
}

//Next/Previous Image 

nextBtns.forEach(element => {
    element.onclick = () => {
        if(currentImage === productMainImagesSmall.length - 1){
            currentImage = -1;   
        }
        currentImage++;
        nextPreviousHandler();
    }
})

previousBtns.forEach(element => {
    element.onclick = () => {
        if(currentImage === 0){
            currentImage = productMainImagesSmall.length;   
        }
        currentImage--;
        nextPreviousHandler();
    }
})

//Images List 

productImages.forEach( (element ,index) => {
    element.onclick = () => {
        imagesListHandler(element,index,productImages,productImagesMenu)
    }
})

productImagesMenu.forEach( (element,index) => {
    element.onclick = () => {
        imagesListHandler(element,index,productImagesMenu,productImages)
    }
})

//Images Menu

productMainImagesSmall.forEach(element => {
    element.onclick = () => {
        imagesFixed.classList.add("show-it");
    }
})

closeFixed.onclick = () => {
    imagesFixed.classList.remove("show-it");
}

plusBtn.onclick = () => {
    quantity.textContent = Number(quantity.textContent) + 1
    total++;
}
minusBtn.onclick = () => {
    if( Number(quantity.textContent) === 0) return
    quantity.textContent = Number(quantity.textContent) - 1;
    total--;
}

//cart 

cart.onclick = ()=> {
    cartInfo.classList.toggle("show-it")
    subNav.classList.toggle("cart-open")
}

//Add to cart handler
addBtn.onclick = () => {
    if(Number(quantity.textContent) != 0){
        isEmpty = false;
        quantityItems.textContent = total ;
        totalPrice = 125 * total;
        finalPrice.textContent = `$${totalPrice}.00`
        quantity.textContent = 0;
    }
    else{
        isEmpty=true
    }
}

//delete button in the cart element
deleteBtn.onclick = () => {
    isEmpty = true;
    quantity.textContent = 0;
    total = 0;
    totalPrice = 0;
}

// for verify the cart if it's Empty
setInterval(() => {
    if(isEmpty === true){
        emptyCart.classList.add("show-it")
        paimentInfo.classList.remove("show-it")
        chechkoutBtn.classList.remove("show-it")
    }
    else{
        emptyCart.classList.remove("show-it")
        paimentInfo.classList.add("show-it")
        chechkoutBtn.classList.add("show-it")
    }
}, 1000);