# js-mail-dadi
Mail check + Dice ex. by Pisani Fabio

## TRACCIA
- Mail
    Chiedi all’utente la sua email,
    controlla che sia nella lista di chi può accedere,
    stampa un messaggio appropriato sull’esito del controllo.
- Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.

## PROCEDIMENTO "mail"
- chiedo l' e-mail dell' utente
- creo una variabile per determinare la possibilità di accedere
- **SE** è presente tra quelle con accesso consentito concedo l' accesso
    - modifico il valore della variabile che determina la possibilità di accedere
- stampo a schermo il risultato
- **SE** il valore della variabile che determina la possibilità di accedere è true
    - stampo a schermo un messaggio di accesso negato
- **ALTRIMENTI** 
    - stampo a schermo un messaggio di accesso consentito
- fine

## PROCEDIMENTO "dadi"
- creo una variabile random per il valore del dado del player
- mostro il valore dado del player a schermo
- creo una variabile random per il valore del dado del PC
- mostro il valore dado del PC a schermo
- **SE** il valore del dado del PC è maggiore del valore del dado del player
    - mostro a schermo il messaggio di sconfitta
- **ALTRIMENTI** **SE** il valore del dado del PC é uguale al valore del dado del player
    - mostro a schermo il messaggio di pareggio
- **ALTRIMENTI**
    - mostro a schermo il messaggio di vittoria
- fine