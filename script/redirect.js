/*
(c) COPYRIGHT 2021 Salty Fish LLC Corporation. All rights reserved.
*/

/*
Heya, my friend!
We are very happy to meet you, but I'm curious where do you get these?
If you get this by an operator or someone, we are very happy that you can help us,
But if not, I hope that you can respect for our hard working and copyrights :D
Have a nice day!

Sincerely, Salty Fish Team :)
*/
var web_url = window.location.href
var url = new URL(web_url)
var redirectLink = url.searchParams.get("redirect")
var recapRun = true
function redirectPage(e){
    window.location.href = redirectLink
}
function checkIfFinish(e){
    if (! grecaptcha.getResponse().length == ""){
        redirectPage()
        var errorTexts = document.getElementById("errorText")
        errorTexts.innerHTML = ""
    }
    else {
        editPageResponseWithNoRecaptchaCompleted()
    }
}