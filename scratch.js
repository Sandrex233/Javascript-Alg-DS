const inventory = ["bikes", "backpacks", "laptops", "eggs"];

console.log("includes()", inventory.includes("laptops"));
console.log("includes()", inventory.includes("yogurt"));

console.log("indexOf()", inventory.indexOf("laptops"));
console.log("indexOf()", inventory.indexOf("yogurt"));

console.log("find()", inventory.find(item => item === "laptops"));
console.log("find()", inventory.find(item => item === "yogurt"));
