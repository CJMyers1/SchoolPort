// to write something to the console type console.log(add stuff in here or add quotes to write text out)
// this is an object inside Javascript, it will be how you will setup a single product name.
// product = {product: "Hammer",}
productArray = [];
function addProduct() {
  // Add your code here!
  product = document.getElementById("product").value;
  // Hint: "get the elements from the HTML file! using a getElementById('element id name here')
  // then get a value from the input.";
  if (document.getElementById("product").value === "") {
    alert("Please add Product");
  }
  // Hint: Here is where you could check if the input is empty, use an if statement with a condition
  // that would see if the element .value === ""

  // Hint: You could push your product to a new array once you create a new variable
  // that makes a single object {} with the product variable you made above.
  // Please look up how to use push on an array here: https://www.w3schools.com/jsref/jsref_push.asp
  let newProduct = { product };
  for (let i = 0; i < productArray.length; i++) {
    productArray[i].innerText = productArray[i];
    console.log(productArray);
  }

  productArray.push(product);

  // Hint: Use a loop on your product array and set the max length of the loop to the array using
  // dot notation (array.length) and then you do the following:
  if (document.getElementById("product").value !== 0) {
    document.getElementById("product").value = "";
  }
  var node = document.createElement("div");
  var textnode = document.createTextNode(product);
  node.appendChild(textnode);
  document.getElementById("output").appendChild(node);
  // set the input to empty, similar how you would check in the if statement.
  // then set the output div to display block, its normally set to none, which means invisible
  // set the div.textContent equal to the the array index number [i] and dot notation of the product

  document.getElementById("output").style.display = "block";
  output.textContent = productArray;
  // this line is to prevent the webpage from reloading.
  return false;
}
console.log(productArray);
