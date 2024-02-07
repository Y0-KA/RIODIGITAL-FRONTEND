function entrar(){
    var email= document.getElementById('email').value;
    var senha= document.getElementById('senha').value;

    if(email == "kayo" && senha == "kayo")(
        window.location = "http://127.0.0.1:5500/home/"
        //ou location.href = "home.html"
    );
    else(alert("usuario ou senha incorretos!"));
}

function showPassword(){
    var inputPass = document.getElementById('senha');
    var btnPswrd = document.getElementById('btnPswrd');

    if(inputPass.type === 'password'){
        inputPass.setAttribute('type', 'text') 
        btnPswrd.classList.replace('bi-eye-fill', 'bi-eye-slash')
    }else{
        inputPass.setAttribute('type', 'password') 
        btnPswrd.classList.replace('bi-eye-slash', 'bi-eye-fill')
    }
}