function payee(){
    let randAmount = Math.floor(Math.random() * 10000) + 500;
    let spanAmount = $('.amount').html(`<p>₦${randAmount}`)
}

payee()