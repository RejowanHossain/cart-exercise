const changeQty = document.getElementsByClassName('change-quantity');
const getPrice = document.getElementsByClassName('get-price');
const showPrice = document.getElementById('show-price');

for (var i = 0; i < changeQty.length; i++) {
    // Prevents input value from going negetive
    var input = changeQty[i]
    input.addEventListener('change', function(event) {
        var input = event.target
        if (isNaN(input.value) || input.value <= 0) {
            input.value = 1
        }

        // updates total amount by multiplying price and quantity
        var total = 0;
        for (var i = 0; i < getPrice.length; i++) {
            var priceValue = getPrice[i]
            var priceElement = parseFloat(priceValue.innerText.replace('$', ' '))
            var quantityElement = input.value
            var total = priceElement * quantityElement;
        }
        showPrice.innerText = '$' + total + '.00'

    })

    // Prevents typing characters inside input field
    input.addEventListener('keypress', function(event) {
        var char = String.fromCharCode(event.which);
        if (!(/[0-9]/.test(char))) {
            event.preventDefault();
        }

    })

}