if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready(value) {
    if ( value == total) {
        console.log("Payment Accepted")
    }
    else  {
        console.log("Please enter the correct amount to proceed with your order")
    }

    document.getElementById('value').value = value
    document.getElementById('total').total = total
    
}




