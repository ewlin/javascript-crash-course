//where cardNumber is a string of numbers
function isValidCreditCardNumber (cardNumber) {
    //1. How do you get the first 2 characters of a string?
    var first2Digits = [SOMETHING...];
    
    //2. How do you get the length of a string? 
    var numberOfDigits = [SOMETHING...]; 

    //We only take Mastercard, Visa, and AMEX cards...
    var validFirst2Digits = ['40','41','42','43','44','45','46','47','48','49','51','52','53','54','55','34','37']; 
    
    
    if(/* 3. test for if cardNumber has 16 characters AND the first 2 characters are one of the valid first 2 digits of a credit card */) {
        return true; 
    } else {
        throw new Error("credit card number is invalid"); 
    }
    
}