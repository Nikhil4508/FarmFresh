// inside header section quick-links events//
let quickElement = document.querySelectorAll('.quick-items');
quickElement.forEach(quickElement => {
    quickElement.addEventListener('click',() => {
        document.querySelector('.active')?.classList.remove('active');
        quickElement.classList.add('active');
    });
});

// inside product section filter-box events//
let filterButtons = document.querySelectorAll(".btn");
filterButtons.forEach(filterButton => {
    filterButton.addEventListener('click',function() {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        });
    });



/* main-cart section code start for open + close */ 
const openCart = document.querySelector('#openCart');
const closeCart = document.querySelector('#closeCart');
const cartPage = document.querySelector('.cart');

const addInCart = document.querySelector('#addcart');

openCart.addEventListener("click", () =>{
    cartPage.style.visibility="visible";
})

closeCart.addEventListener("click", () =>{
    cartPage.style.visibility="hidden";
})

const closeToCart = document.querySelector('#closeToCart');
closeToCart.addEventListener("click", () =>{
    cartPage.style.visibility="hidden";
})

/* mobile menu nav start*/
let mobileMenu = document.querySelector(".mobile-menu");
let mobileNav = document.querySelector(".mobile-nav");
let mobileMenuClose = document.querySelector(".mobile-menu-close");
mobileMenu.addEventListener("click", () =>{
    mobileNav.style.display="block";
    
}) 

mobileMenuClose.addEventListener("click", () =>{
    mobileNav.style.display="none";
}) 
/* mobile menu nav end*/ 



/*main-cart section code end for open + close*/ 
/* inside main-cart section code for product and dropdown start */ 
var addItemId = 0;

function addToCart(item) {
    addItemId += 1;
    var selectedItem = document.createElement('div');
    selectedItem.classList.add('cartImg');
    selectedItem.setAttribute('id', addItemId);
    var img = document.createElement('img');
    img.setAttribute('src', item.children[0].src);
    
    // Create a container div for product name and quantity label
    var productNameAndQuantity = document.createElement('div');
    productNameAndQuantity.classList.add('productNameAndQuantity');

    // Get the product name from the item
    var productNameElement = item.querySelector('.tittle');
    var productName = document.createElement('div');
    productName.classList.add('productName');
    productName.innerText = productNameElement ? productNameElement.innerText : '';

    // Get selected quantity from the dropdown menu
    var selectedQuantity = item.querySelector('.selected').textContent.trim(); 
    var quantityLabel = document.createElement('div'); 
    quantityLabel.classList.add('quantityLabel');
    quantityLabel.innerText = "Qty : " + selectedQuantity;

    productNameAndQuantity.appendChild(productName);
    productNameAndQuantity.appendChild(quantityLabel);

    var delBtn = document.createElement('button');
    delBtn.innerHTML = '<i class="fas fa-trash"></i>';
    delBtn.setAttribute('onclick', 'del(' + addItemId + ')');

    selectedItem.appendChild(img);
    selectedItem.appendChild(productNameAndQuantity);
    selectedItem.appendChild(delBtn); // Append the delete button to selectedItem

    var cartItems = document.getElementById('tittle');
    cartItems.appendChild(selectedItem); // Append the entire cart item to the cartItems container

    // Store product data in local storage
    var cartData = JSON.parse(localStorage.getItem('cart')) || [];
    var productData = {
        id: addItemId,
        name: productName.innerText,
        quantity: selectedQuantity,
        src:item.children[0].src,
    };
    cartData.push(productData);
    localStorage.setItem('cart', JSON.stringify(cartData));
}

/*########*/ 
// Function to load cart items from local storage
function loadCartFromLocalStorage() {
    var cartData = JSON.parse(localStorage.getItem('cart')) || [];
    var cartItemsContainer = document.getElementById('tittle');
    cartItemsContainer.innerHTML = ''; // Clear existing cart items

    cartData.forEach(item => {
        var selectedItem = document.createElement('div');
        selectedItem.classList.add('cartImg');
        selectedItem.setAttribute('id', item.id);

        var img = document.createElement('img');
        // Assuming you have the source stored in the local storage as well
        img.setAttribute('src', item.src);

        var productNameAndQuantity = document.createElement('div');
        productNameAndQuantity.classList.add('productNameAndQuantity');

        var productName = document.createElement('div');
        productName.classList.add('productName');
        productName.innerText = item.name;

        var quantityLabel = document.createElement('div');
        quantityLabel.classList.add('quantityLabel');
        quantityLabel.innerText = "Qty : " + item.quantity;

        productNameAndQuantity.appendChild(productName);
        productNameAndQuantity.appendChild(quantityLabel);

        var delBtn = document.createElement('button');
        delBtn.innerHTML = '<i class="fas fa-trash"></i>';
        delBtn.setAttribute('onclick', 'del(' + item.id + ')');

        selectedItem.appendChild(img);
        selectedItem.appendChild(productNameAndQuantity);
        selectedItem.appendChild(delBtn);

        cartItemsContainer.appendChild(selectedItem);
    });
}
// Call this function when the page loads to load cart items from local storage
window.onload = function() {
    loadCartFromLocalStorage();
};

// Your existing addToCart and del functions here

function del(item) {
    // Remove the item from the DOM
    document.getElementById(item).remove();

    // Remove the item from local storage
    var cartData = JSON.parse(localStorage.getItem('cart')) || [];
    var updatedCartData = cartData.filter(product => product.id !== item);
    localStorage.setItem('cart', JSON.stringify(updatedCartData));
}
/*########*/ 


// Dropdown menu functionality
const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
    const select = dropdown.querySelector('.select');
    const caret = dropdown.querySelector('.caret');
    const menu = dropdown.querySelector('.menu');
    const options = dropdown.querySelectorAll('.menu li');
    const selected = dropdown.querySelector('.selected');

    select.addEventListener('click', () => {
        select.classList.toggle('select-clicked');
        caret.classList.toggle('caret-rotate');
        menu.classList.toggle('menu-open');
    });

    options.forEach(option => {
        option.addEventListener('click', () => {
            selected.innerText = option.innerText;
            select.classList.remove('select-clicked');
            caret.classList.remove('caret-rotate');
            menu.classList.remove('menu-open');
            options.forEach(option => {
                option.classList.remove('active');
            });
            option.classList.add('active');
        });
    });
});
/* inside main-cart section code for product and dropdown end */ 



/*offer-section slider code*/
const slider = document.querySelector('.offerslider');
const slides = document.querySelectorAll('.slideimg');
let currentSlide = 0;
let autoSlide;

const nextSlide = () => {
  slides[currentSlide].style.opacity = 0;
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].style.opacity = 1;
  clearInterval(autoSlide);
  autoSlide = setInterval(nextSlide, 5000);
};

const prevSlide = () => {
  slides[currentSlide].style.opacity = 0;
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  slides[currentSlide].style.opacity = 1;
  clearInterval(autoSlide);
  autoSlide = setInterval(prevSlide, 5000);
};

const nextButton = document.querySelector('.offer-next');
const prevButton = document.querySelector('.offer-prev');

autoSlide = setInterval(nextSlide, 5000);

nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);

setInterval(nextSlide, 5000);

/*offer-section slider code end*/


/***product--section code start ***/

const btns = document.querySelectorAll('.btn');
const storeProducts = document.querySelectorAll('.store-product');
// const search = document.getElementById(search);

for (let i = 0; i < btns.length; i++) {   //let added by me

    btns[i].addEventListener('click', (e) => {
        e.preventDefault()
        
        const filter = e.target.dataset.filter;
        console.log(filter);
        
        storeProducts.forEach((product)=> {
            if (filter === 'all'){
                product.style.display = 'block'
            } else {
                if (product.classList.contains(filter)){
                    product.style.display = 'block'
                } else {
                    product.style.display = 'none'
                }
            }
        });
    });
};

// SEARCH FILTER
const search = document.getElementById("search");
const productName = document.querySelectorAll(".product-details .tittle");

// A BETTER WAY TO FILTER THROUGH THE PRODUCTS
search.addEventListener("keyup", filterProducts);


function filterProducts(e) {
    const text = e.target.value.toLowerCase();
    // console.log(productName[0]);
    productName.forEach(function(product) {
        const item = product.firstChild.textContent;
        if (item.toLowerCase().indexOf(text) != -1) {
            product.parentElement.parentElement.style.display = "block"
        } else {
            product.parentElement.parentElement.style.display = "none"
        }
    })
}

/***product--section code end ***/

/*checkout section*/
const checkout = document.querySelector('.checkout');

checkout.addEventListener('click',handleCheckout);

function handleCheckout() {
    // Perform actions when checkout button is clicked
    // For example, you can redirect the user to a checkout page
    // Replace 'checkout.html' with the URL of your checkout page
    window.location.href = 'checkout.html';
}
