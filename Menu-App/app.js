

const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    sort: "1",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    sort: "2",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    sort: "3",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    sort: "1",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    sort: "2",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    sort: "3",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    sort: "1",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    sort: "2",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    sort: "3",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "spaghetti and meatballs",
    category: "dinner",
    sort: "4",
    price: 20.99,
    img: "./images/Spaghetti-and-meatballs.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 11,
    title: "chicken parmesan",
    category: "dinner",
    sort: "4",
    img: "./images/chicken-parmesan.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];


const menuItemWrapper = document.querySelector(".menu-item-wrapper")
const buttonWrapper = document.querySelector(".button-wrapper")
const menuWrapper = document.getElementById("menu-wrapper")

const allBtn = document.getElementById("all")
const breakfastBtn = document.getElementById("breakfast")
const lunchBtn = document.getElementById("lunch")
const shakeBtn = document.getElementById("shake")
const dinnerBtn = document.getElementById("dinner")

// const menuBtns = document.querySelectorAll(".menuBtn")


  window.addEventListener ("DOMContentLoaded", function() {
   showMenuItems(menu)
  })
 


function showMenuItems(food) {
  let indivMenuItem = food.map(item => {
    // console.log(item);

    return (
      
     ` <div class = "menu-item-wrapper" >
           <figure>
               <img src=${item.img} alt = ${item.title}/>
           </figure>

          <div class = "menu-item">
              <div class = "item-header">
                <h4 class="item-title"> ${item.title}</h4>
                <p class = "price">$${item.price}</p>
              </div>
            <p class = "item-description">
               ${item.desc}</p>
            </p>
       </div>
     </div>`
    )
    })
  

    console.log(indivMenuItem)  

    menuItemWrapper.innerHTML = indivMenuItem

 }


breakfastBtn.addEventListener("click", function() {
  const breakfast= menu.filter(menuItem => (menuItem.category === "breakfast")) 
  // console.log(breakfast)
  showMenuItems(breakfast)
})

lunchBtn.addEventListener("click", function() {
  const lunch= menu.filter(menuItem => (menuItem.category === "lunch")) 
  showMenuItems(lunch)
})

shakeBtn.addEventListener("click", function() {
  const shakes= menu.filter(menuItem => (menuItem.category === "shakes")) 
  showMenuItems(shakes)
})

dinnerBtn.addEventListener("click", function() {
  const dinner= menu.filter(menuItem => (menuItem.category === "dinner")) 
  showMenuItems(dinner)
})



allBtn.addEventListener("click", function() {
  menu.sort((a,b ) => (a.sort > b.sort) ? 1: -1)
  showMenuItems(menu)
  
})
