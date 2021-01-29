// Week 4 lab – Similar to last week's lab – but without the help!

// The provided code now goes out to the Internet to get our products data.
// You can visit the provided URL – https://kiei451.com/api/products.json –
// in Chrome to see what the data looks like.

// Write a loop to iterate through the product data; each iteration of the loop
// should call a function called renderProduct, which accepts an object representing
// a single product object as input, and appends HTML to an existing element on the page
// with the class "products". You can use the existing HTML in the "products" element
// as a template, deleting it when you're finished.

// 🔥 define your renderProduct function here

async function pageLoaded() {
  let response = await fetch('https://kiei451.com/api/products.json')
  let json = await response.json()

  // writes the returned JSON to the console
  console.log(json)
  let products = json.products
  // 🔥 start here: write code to loop through the products; each
  // iteration of the loop should call your renderProduct function
  // make it work first; then extract to the separate renderProduct
  // function after it's 100% working without it
  
  function renderProduct(productData) {
    let outputElement = document.querySelector('.products')
    outputElement.insertAdjacentHTML('beforeend', `
    <div class="p-4 w-full md:w-1/2 lg:w-1/3">
    <div class="border h-full p-4 flex flex-col">
      <h2 class="text-lg font-bold mb-4">${productData.name}</h2>
      <div class="mb-4"><img src="${productData.image}">
      </div>
      <div class="mb-4 text-gray-900">
        ${productData.description}
      </div>
      <div class="mt-auto text-purple-500 text-2xl">${productData.price}</div>
      </div>
    </div>
    `)
  }

  for (let i = 0; i < products.length; i++) {
    product = products[i]
    console.log(product.name)
    renderProduct(product)
  }
}

window.addEventListener('DOMContentLoaded', pageLoaded)