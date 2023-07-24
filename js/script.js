//! -------------- MAIL ---------------!//
// immagazzino la lista di mail accettate
let acceptedMail =['a@gmail.com', 'b@gmail.com','c@gmail.com']
//  chiedo l' e-mail dell' utente
const userEmail = prompt('inserisci la tua E-mail')
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
    //ALTRIMENTI
}else if(denied == false){
    // stampo a schermo un messaggio di accesso consentito
    console.log('La tua E-mail è tra quelle con accesso consentito')  
}
