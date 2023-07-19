//Cookies//

var msgCookies = document.getElementById('cookies-msg')

function aceito(){
    localStorage.lgpd = 'sim'
    msgCookies.classList.remove('mostrar')
}

if(localStorage.lgpd == 'sim'){
    msgCookies.classList.remove('mostrar')
}else{
    msgCookies.classList.add('mostrar')
}

//Whatsapp Numéro//

function abrirWhatsApp() {
    var numeroTelefone = "5511934747011"; 
    var urlWhatsApp = 'https://api.whatsapp.com/send?phone=' + numeroTelefone;
    window.open(urlWhatsApp, "_blank");
   }