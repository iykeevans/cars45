export function payWithPaystack({ email, amount = 1000000, name, phone, setIsPaymentSuccessfull }) {
    let handler = PaystackPop.setup({
        key: 'pk_test_204c9b2cde4a3294c5e246245cbcd45ee5567898', // Replace with your public key
        email,
        amount,
        label: name,
        metadata: {
            name,
            phone
        },
        ref: (new Date()).getTime(), // generates a pseudo-unique reference. Please replace with a reference you generated. Or remove the line entirely so our API will generate one for you
        // label: "Optional string that replaces customer email"
        onClose: function () {
            // alert('Window closed.');
        },
        callback: function (response) {
            setIsPaymentSuccessfull(true)
            // let message = 'Payment complete! Reference: ' + response.reference;
            // alert(message);
        }
    });
    handler.openIframe();
}