let logged = sessionStorage.getItem("logged");
const session = localStorage.getItem("session");    

checkLogged();

//Login no sistema
document.getElementById("login-form").addEventListener("submit", function(e){
    e.preventDefault;

    const email = document.getElementById("email-input").value;  
    const password = document.getElementById("password-input").value;
    const checkSession = document.getElementById("session-check").checked;

    const account = getAcount(email);

    if(!account){
        alert("Opps, verifique o usuário ou a senha.");
        return;
    }
    if(account.password !== password){
       alert("Opps, verifique o usuário ou a senha.");
       return;
    }

    saveSession(email, checkSession);

    window.location.href = "home.html";

});


//Criar conta

document.getElementById("create-form").addEventListener("submit", function(e) {
    
    e.preventDefault();

    const email = document.getElementById("email-create-input").value;  
    const password = document.getElementById("password-create-input").value;


   if (email.lenght <5) {
        alert("Preencha o campo com um email válido.");
        return;
    }
    
    if (password.lenght <4) {
        alert("Preencha a senha com no mínimo 4 digitos.");
        return;
    }

    saveAccount({
        login: email,
        password: password,
        transactions: []

    });

    myModal.hide();
    alert("Conta criada com sucesso.");
})

function checklLogged(){
    if(session){
        sessionStorage.setItem("logged", session);
        logged = session;
    }
    if(logged){
        saveSession(logged, session);

        window.location.href = "home.html";
    }
}

function saveAccount(data){
    localStorage.setItem(data.login, JSON.stringify(data));
        
}

function saveSession(data, saveSession){
    if(saveSession){
        localStorage.setItem("session", data);
    }
    sessionStorage.setItem("logged", data);
}

function getAcount(key){
    const account = localStorage.getItem(key);

    if(account){
        return JSON.parse(account);
    }
    return;

}