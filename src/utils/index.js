export function payWithPaystack({ email, amount = 10000, name, phone, setIsPaymentSuccessfull, ref = (new Date()).getTime() }) {
    let handler = PaystackPop.setup({
        key: process.env.PAYSTACK_KEY, // Replace with your public key
        email,
        amount: amount + '00',
        label: name,
        metadata: {
            name,
            phone
        },
        ref, // generates a pseudo-unique reference. Please replace with a reference you generated. Or remove the line entirely so our API will generate one for you
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