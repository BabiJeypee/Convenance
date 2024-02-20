let http = new XMLHttpRequest();
http.open('get', 'container.js', true);
http.send();

http.onload = function() {
    if(this.readyState == 4 && this.status == 200)
}
let containers = JSON.parse(this.responseText);
let output ="";

for(let item of containers ){
    output += `
    <div class="container">
    <img src="${item.image}" alt="${item.image}">
        <p class="title">${item.image}</p>
        <p class="description">${item.description}</p>
        <p class="price">
            <span>${item.price}</p></span>
            <span>&peso</span>
            </p>
            </div>
    `;
}

document.querySelector('.containers').innerHTML = output;
