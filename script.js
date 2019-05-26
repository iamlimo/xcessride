// function payee(){
    
//     const API_publicKey = "FLWPUBK-47638216c6ac1c23f3b310ce900331dd-X";
    
//     function payWithRave() {
//         var x = getpaidSetup({
//             PBFPubKey: API_publicKey,
//             customer_email: "isaac.orija@gmail.com",
//             amount: randAmount,
//             currency: "NGN",
//             txref: "rave-123456",
//             subaccounts: [
//               {
//                 id: "RS_BBBAE970D4E9B3EF1873F983B6CCED75",
//                     transaction_split_ratio:"2"
//               },
              
//               {
//                 id: "RS_58C9F743F42D9C3C4CFA4AB703DE5C51",
//                 transaction_split_ratio:"3"
//               }
//             ],
//             meta: [{
//                 metaname: "flightID",
//                 metavalue: "AP1234"
//             }],
//             onclose: function() {},
//             callback: function(response) {
//                 var txref = response.tx.txRef; // collect flwRef returned and pass to a 					server page to complete status check.
//                 console.log("This is the response returned after a charge", response);
//                 if (
//                     response.tx.chargeResponseCode == "00" ||
//                     response.tx.chargeResponseCode == "0"
//                 ) {
//                     // redirect to a success page
//                 } else {
//                     // redirect to a failure page.
//                 }

//                 x.close(); // use this to close the modal immediately after payment.
//             }
//         });
//     }
// }

// payee()