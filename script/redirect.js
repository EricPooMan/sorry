var web_url = window.location.href
var url = new URL(web_url)
var redirectLink = url.searchParams.get("redirect")
if (redirectLink == "uA3j2Ko2afC6jsF3hiH7AfOk62nd51f3i9web"){
    moveURL = "http://www.youtube.com"
}
var recapRun = true
function redirectPage(e){
    window.location.href = moveURL
}
function checkIfFinish(e){
    if (! grecaptcha.getResponse().length == ""){
        redirectPage()
    }
    else {
        alert("Please complete the reCAPTCHA to continue")
    }
}