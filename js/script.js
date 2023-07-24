//! -------------- MAIL ---------------!//

let logInBtn = document.getElementById('log_in_btn')
// immagazzino la lista di mail accettate
let acceptedMail =['a@gmail.com', 'b@gmail.com','c@gmail.com']

let cardFooter = document.getElementById('card_footer')

logInBtn.addEventListener('click', function(){
    //  chiedo l' e-mail dell' utente
    let userEmail = document.getElementById('e_mail').value
    //todo const userEmail = prompt('inserisci la tua E-mail')
    // creo una variabile per determinare la possibilità di accedere
    let denied = true
    // creo un ciclo per controllare la lista delle e-mail accettate
    for (let i = 0; i < acceptedMail.length; i++) {
        // SE è presente tra quelle con accesso consentito concedo l' accesso
        if (userEmail== acceptedMail[i]) {
            // modifico il valore della variabile che determina la possibilità di accedere
            denied = false
        }
    }
    // stampo a schermo il risultato
    //SE il valore della variabile che determina la possibilità di accedere è true
    if (denied == true) {
        //stampo a schermo un messaggio di accesso negato
        console.log('Spiacente, non hai accesso a questa sezione')
        cardFooter.innerHTML=`
        <div class="alert alert-danger" role="alert">
            Spiacente, non hai accesso a questa sezione
        </div>`
        
        //ALTRIMENTI
    }else if(denied == false){
        // stampo a schermo un messaggio di accesso consentito
        console.log('La tua E-mail è tra quelle con accesso consentito')  
        cardFooter.innerHTML=`
        <div class="alert alert-success" role="alert">
            La tua E-mail è tra quelle con accesso consentito
        </div>`
        
    }
})

//! -------------- DADI ---------------!//
let playerDice = document.getElementById('player_dice')
let pcDice = document.getElementById('pc_dice')
let diceBtn = document.getElementById('dice_btn')
let cardFooterDice = document.getElementById('card_footer_dice')
diceBtn.addEventListener('click', function(){
    // creo una variabile random per il valore del dado del player
    let randomPlayer = Math.floor(Math.random() * 6) + 1
    playerDice.innerHTML=randomPlayer
    // mostro il valore dado del player a schermo
    console.log(randomPlayer)
    // creo una variabile random per il valore del dado del PC
    let randomPc = Math.floor(Math.random() * 6) + 1
    pcDice.innerHTML=randomPc
    // mostro il valore dado del PC a schermo
    console.log(randomPc)
    //SE il valore del dado del PC è maggiore del valore del dado del player
    if (randomPc>randomPlayer) {
        // mostro a schermo il messaggio di sconfitta
        console.log('Hai perso!')
        cardFooterDice.innerHTML=`
        <div class="alert alert-danger" role="alert">
            Hai perso :(
        </div>`
        //ALTRIMENTI SE il valore del dado del PC é uguale al valore del dado del player
    }else if (randomPc==randomPlayer) {
        // mostro a schermo il messaggio di pareggio
        console.log('Pareggio!')
        cardFooterDice.innerHTML=`
        <div class="alert alert-warning" role="alert">
            Pareggio!!
        </div>`
        // ALTRIMENTI 
    }else{
        // mostro a schermo il messaggio di vittoria
        console.log('Hai Vinto!')
        cardFooterDice.innerHTML=`
        <div class="alert alert-success" role="alert">
            Hai vinto!!
        </div>`
    }
})
