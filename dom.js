
const allBtn = document.getElementsByClassName('add-btn');

for (const btn of allBtn) {
    btn.addEventListener("click", function (event) {

        const name = event.target.parentNode.childNodes[1].innerText;

        const price = event.target.parentNode.childNodes[3].childNodes[1].innerText;

        const category = event.target.parentNode.childNodes[5].childNodes[1].innerText;

        event.target.setAttribute('disabled', false);
        

        // append---------
        const selectedContainer = document.getElementById('selected-container');



        const div = document.createElement('div');

        const p1 = document.createElement('p');
        const p2 = document.createElement('p');
        const p3 = document.createElement('p');

        p1.innerText = name;
        p2.innerText = price;
        p3.innerText = category;

        div.appendChild(p1);
        div.appendChild(p2);
        div.appendChild(p3);

        selectedContainer.appendChild(div);
        div.classList.add('grid', 'grid-cols-3', 'gap-5');

        const firstCartCount = convertedUnit('cart');
        if (firstCartCount + 1 > 6) {
            alert('Limit shesh');
            return;
        }
        event.target.parentNode.style.backgroundColor = 'gray';

        // update budget---
        const budget = convertedUnit('budget');
        document.getElementById('budget').innerText = budget - parseInt(price);

        // cart count---------
        const cartCount = convertedUnit('cart');
        document.getElementById('cart').innerText = cartCount + 1;

        // left-------
        const leftCount = convertedUnit('left');
        document.getElementById('left').innerText = leftCount - 1;

        updateTotalCost(price);
        updateGrandTotal()
    })
}


function updateTotalCost(value) {

    const totalCost = convertedUnit('total-cost');
    const sum = parseInt(value) + totalCost;
    document.getElementById('total-cost').innerText = sum;
}

function updateGrandTotal(status) {
    const totalCost = convertedUnit('total-cost');
    if (status == undefined) {
        const totalCost = convertedUnit('total-cost');
        document.getElementById('grand-total').innerText = totalCost;
    }
    else {
        const couponCode = document.getElementById('coupon-code').value;

        if (couponCode == "love420") {
            const discounted = totalCost - totalCost * 0.2;
            document.getElementById('grand-total').innerText = discounted;

        } else {
            alert("Please enter a valid coupon code");
        }
    }
}


function convertedUnit(id) {
    const baseUnit = document.getElementById(id).innerText;
    const unit = parseInt(baseUnit);
    return unit;

}

