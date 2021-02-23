var web_url = window.location.href
var url = new URL(web_url)
var redirectLink = url.searchParams.get("redirect")
while (check-recaptcha-complete){
    if(grecaptcha.getResponse().length == 484){
        console.log("The captcha has been already solved");
    }
}