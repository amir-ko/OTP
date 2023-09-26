function generat(){
    let show =document.getElementById('otp')
    let digits = "0123456789"
    let otp = ""
    for(i=0;i<4;i++){
        otp += digits[Math.floor(Math.random() * 10)];
    }
    show.innerHTML ="<span></span>"
    setTimeout(()=>{
        show.innerHTML = otp
    },1000)
}