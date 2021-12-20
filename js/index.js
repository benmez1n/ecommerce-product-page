//DOM variables
const menuBtn = document.getElementById("menu"),
    logo = document.getElementById("logo"),
    subNav = document.getElementById("nav"),
    closeMenuBtn = document.getElementById("close"),
    closeFixed = document.getElementById("close2"),
    cart = document.getElementById("cart"),
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
let currentImage = 0;

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
    imagesFixed.classList.remove("show-it");
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