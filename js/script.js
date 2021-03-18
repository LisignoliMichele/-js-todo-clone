// Come abbiamo fatto questa mattina insieme dovete creare una todo list che permatta di aggiungere (tramite campo input) e rimuovere gli elementi!
// lista cose da fare in un array
var CoseDaFare = [
   'Lanciarmi con il paracadute',
   'Percorrere tutto il cammino di Santiago',
   'Scrivere un libro',
   'Imparare a suonare uno strumento',
   'Imparare bene lo spagnolo',
   'Imparare bene l’inglese',
   'Girare l’Europa con Interrail',
   'Laurearmi',
   'Girare i canali di Venezia in canoa',
   'Andare in Asia utilizzando solo il treno',
   'Fare un’immersione',
   'Non usare il cellulare per almeno un mese di fila',
   'Farmi i rasta',
   'Non diventare pelato',
   'Ritirarmi in un tempio Buddhista per almeno 10 giorni',
   'Andare allo stadio a vedere l’Italia che gioca i mondiali',
   'Vedere l’eruzione di un vulcano',
   'Fare una passeggiata a dorso di un elefante',
   'Inseguire un tornado',
   'Frequentare un corso di fotografia',
   'Aprire un blog..',
   'Vivere un periodo con una tribù',
   'Fare couchsurfing',
   'Incontrare uno sciamano nella foresta Amazzonica',
   'Formare un gruppo musicale',
   'Vincere alla lotteria',
   'Fare un viaggio in Vespa',
   'Passare un mese a Cuba',
   'Fare la licenza di pesca',
   'Ospitare uno straniero a casa',
   'Imparare a scolpire',
   'Vivere un paio di anni in Spagna',
   'Inventare e brevettare qualcosa',
   'Visitare un Paese straniero per almeno un mese',
   'Riuscire a noleggiare una moto e riportarla integra',
   'Vedere da vicino una giraffa, un pinguino e un canguro',
   'Fare dei figli',
   'Andare fino a Venezia in bici.',
   'Incontrare un branco di scimmie',
   'Camminare scalzo per un mese intero',
   'Vendere qualcosa fatto da me',
   'Non mangiare pizza per almeno 6 mesi consecutivi',
   'Fare una regata nell’Oceano Pacifico',
   'Visitare l’Iran',
   'Andare all’ Oktoberfest',
   'Improvvisare una partita di calcio in strada e essere cacciati dalla polizia',
   'Essere fonte di ispirazione per qualcuno',
   'Pescare con la fiocina sotto le piattaforme petrolifere',
   'Puntare tutto sul 13 e sbancare Las Vegas',
   'Fare un periodo di studio all’estero',
   'Setacciare un fiume e trovare anche solo un frammento di oro',
   'Avere una casa',
   'Mettere piede su ogni Paese del Sud America',
   'Fare volontariato',
   'Attraversare un deserto',
   'Andare in mongolfiera',
   'Festeggiare un altro mondiale',
   'Allungare questa lista',
   'Restare tutta la vita con la stessa persona di ora',
   'Pilotare un aereo',
   'Farmi un tatuaggio',
   'Raggiungere il lusso di non dover lavorare per vivere',
   'Girare la Spagna in furgoncino',
   'Comunicare con qualcuno tramite un piccione viaggiatore',
   'Nuotare tra i delfini',
   'Visitare tutte le capitali d’Europa',
   'Partecipare ad una gara di mangiatori di pizza',
   'Prendere il primo volo disponibile senza sapere la destinazione',
   'Fare parapendio',
   'Camminare sulla muraglia cinese',
   'Trovare un messaggio in una bottiglia',
   'Raggiungere il Sud America in nave',
   'Rendermi conto che una di queste cose non mi interessava veramente e cambiarla',
   'Imparare a programmare con boolean'
];
for (var i = 0; i < CoseDaFare.length; i++){

   // clono il template
   var template = $(".template li").clone();

   // aggiungo le info al template
   template.prepend(CoseDaFare[i])

   // aggingo il template alla lista
   $(".coseDaFare").append(template)

}




// aggiungo un nuovo template
$("#aggiungi").keydown(function(evento){

   if ( evento.which == 13 ){
      var testo = $(this).val();

      if ( testo != "" ){
         // clono il template
         var template = $(".template li").clone()
         // aggiungo le info al template
         template.prepend(testo);
         // aggiungo il template alla lista
         $(".coseDaFare").append(template)
         // svuoto il campo input
         $(this).val("");
      }
   }
});

// segna con una riga le cose fatte
$(".coseDaFare").on("click", "li", function(){
   $(this).addClass("marked")
});