import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      welcome: "Welcome",
      toCalgary: "To Calgary!",
      AirportMap: "Airport Map",
      searchAirport: "Search Airport",
      transportation: "Transportation",
      flights: "Flights",
      wifi: "Wi-Fi",
      dateLabel: "Date",
      timeLabel: "Time",
      temperatureLabel: "Temperature",
      searchTitle: "What are you looking for?",
      terminals: "Terminals",
      baggageClaim: "Baggage Claim",
      washrooms: "Washrooms",
      connections: "Connections",
      parking: "Parking",
      hotels: "Hotels",
      shops: "Shops",
      busStops: "Bus Stops",
      helpDesk: "Help Desk",
      airportMap: "Airport Map",
      restaurant: "Restaurant",
      back: "Back",
      title: "Connect to Airport Wi-Fi",
      instruction: "Scan the QR Code to connect to YYC Airport 'Wi-Fi! If you're unable to connect:",
      step1: "- Go into your device's Wi-Fi settings.",
      step2: "- Look for the wifi-network: 'YYC Airport Wi-Fi'",
      step3: "- Connect to this network.",
      taxi: "Taxi",
      carrental: "Car Rental",
      uber: "Uber",
      calgarytransit: "Calgary Transit",
      cancel: "Cancel",
      dwashroom: "Directions to Washrooms",
      terminal: "You are currently in Airport, Terminal 3",
      direction1:"-Walk North for 50m to get to Door 2.",
      direction2:"-Walk through Terminal 5 gateway, and turn towards Gate 6 exit.",
      direction3:"-Go through Gate 6 exit, and walk 60m North to access the bathrooms",
      assistance:"This message is being displayed because you clicked on the ‘Call for Assistance’ button.",
      mistake:"If this was a mistake please click the button below to cancel.",
      dbusterminal: "Directions to Bus Terminal",
      terminal2: "You are currently in Airport, Terminal 3",
      direction4: "- Walk North for 50m to get to Door 2.",
      direction5: "- Walk towards the Tim Hortons by the conveyer belt.",
      direction6: "- Make a sharp right -- walk towards the man in the grey hoodie.",
      direction7: "- Walk 50m South, and exit the airport via the close by shuttle.",
      direction8: "- Walk 10m North to access the bus station.",
      home: "Home",
      helpTextPt1: "Hang tight,",
      helpTextPt2: "help is on the way!",
      helpTextPt3: "This message is being displayed because you clicked on the 'Call for Assistance' button.",
      helpTextPt4: "If this was a mistake, please click the button below to cancel."
    },
  },
  fr: {
    translation: {
      welcome: "Bienvenue",
      toCalgary: "À Calgary!",
      AirportMap: "Plan de l'aéroport",
      searchAirport: "Rechercher un aéroport",
      transportation: "Transport",
      flights: "Vols",
      wifi: "Wi-Fi",
      dateLabel: "Date",
      timeLabel: "Heure",
      temperatureLabel: "Température",
      searchTitle: "Que cherchez-vous?",
      terminals: "Terminaux",
      baggageClaim: "Récupération bagages",
      washrooms: "Toilettes",
      connections: "Correspondances",
      parking: "Stationnement",
      hotels: "Hôtels",
      shops: "Boutiques",
      busStops: "Arrêts de bus",
      helpDesk: "Bureau d'aide",
      airportMap: "Carte de l'aéroport",
      restaurant: "Restaurant",
      back: "Retour",
      title: "Connectez-vous au Wi-Fi",
      instruction: "Scannez le code QR pour vous connecter au Wi-Fi gratuit de l’aéroport YYC !",
      step1: "-Allez dans les paramètres Wi-Fi de votre.",
      step2: "-Recherchez le réseau Wi-Fi : 'Wi-Fi gratuit de l’aéroport YYC'.",
      step3: "-Connectez-vous à ce réseau.",
      taxi: "Taxi",
      carrental: "Location de voitures",
      uber: "Uber",
      calgarytransit: "Transports à Calgary",
      cancel: "Annuler",
      dwashroom: "Itinéraire vers les toilettes",
      terminal:"Vous êtes actuellement à l’aéroport, au Terminal 3",
      direction1:"-Marchez vers le nord sur 50 mètres pour atteindre la porte 2.",
      direction2:"-Traversez l’accès du Terminal 5, puis tournez vers la sortie de la porte 6.",
      direction3:"-Passez par la sortie de la porte 6, puis marchez vers le nord sur 60 mètres pour accéder aux toilettes",
      assistance:"Ce message s’affiche parce que vous avez cliqué sur le bouton “Appeler de l’aide",
      mistake:"Si c’était une erreur, veuillez cliquer sur le bouton ci-dessous pour annuler.",
      dbusterminal: "Itinéraire vers la gare routière",
      terminal2: "Vous êtes actuellement à l’aéroport, Terminal 3",
      direction4: "- Marchez vers le nord sur 50 mètres pour atteindre la porte 2.",
      direction5: "- Marchez vers le Tim Hortons près du tapis roulant.",
      direction6: "- Faites un virage serré à droite — marchez vers l'homme portant le sweat à capuche gris.",
      direction7: "- Marchez 50 mètres au sud et sortez de l'aéroport par la navette à proximité.",
      direction8: "- Marchez 10 mètres vers le nord pour accéder à la station de bus.",
      home: "Maison",
      helpTextPt1: "Tenez bon,",
      helpTextPt2: "l'aide est en route !",
      helpTextPt3: "Ce message s'affiche parce que vous avez cliqué sur le bouton 'Appel à l'aide'.",
      helpTextPt4: "Si c'était une erreur, veuillez cliquer sur le bouton ci-dessous pour annuler."
    },
  },
  hi: {
    translation: {
      welcome: "स्वागत है",
      toCalgary: "कैलगरी में!",
      AirportMap: "हवाई अड्डा मानचित्र",
      searchAirport: "हवाई अड्डा खोजें",
      transportation: "परिवहन",
      flights: "उड़ानें",
      wifi: "विफि",
      dateLabel: "तारीख",
      timeLabel: "समय",
      temperatureLabel: "तापमान",
      searchTitle: "आप क्या खोज रहे हैं?",
      terminals: "टर्मिनल",
      baggageClaim: "सामान दावा",
      washrooms: "शौचालय",
      connections: "कनेक्शन",
      parking: "पार्किंग",
      hotels: "होटल",
      shops: "दुकानें",
      busStops: "बस स्टॉप",
      helpDesk: "मदद डेस्क",
      airportMap: "हवाई अड्डा मानचित्र",
      restaurant: "रेस्टोरेंट",
      back: "पीछे",
      title:"हवाई अड्डे वाई-फाई से कनेक्ट करें",
      instruction:"वाई-फाई से कनेक्ट करने के लिए QR कोड को स्कैन करें! अगर आप कनेक्ट नहीं कर पा रहे हैं:",
      step1:"- अपने डिवाइस की वाई-फाई सेटिंग्स में जाएं।",
      step2:"- वाई-फाई नेटवर्क देखें: ‘YYC Airport Wi-Fi'",
      step3:"- इस नेटवर्क से कनेक्ट करें।",
      taxi: "टैक्सी",
      carrental: "गाड़ी किराए पर लेना",
      uber: 'ऊबर',
      calgarytransit: "कैलगरी ट्रांजिट",
      cancel: "रद्द करना",
      dwashroom: "शौचालयों तक पहुँचने के निर्देश",
      terminal:"आप अभी हवाई अड्डे के टर्मिनल 3 में हैं।",
      direction1:"-दरवाज़ा 2 तक पहुँचने के लिए 50 मीटर उत्तर दिशा में चलें।",
      direction2:"-टर्मिनल 5 के प्रवेश द्वार से होकर जाएँ, और गेट 6 के निकास की ओर मुड़ें।",
      direction3:"-गेट 6 के निकास से बाहर निकलें, और शौचालयों तक पहुँचने के लिए 60 मीटर उत्तर दिशा में चलें।",
      assistance:"यह संदेश इसलिए दिखाया जा रहा है क्योंकि आपने ‘सहायता के लिए कॉल करें’ बटन पर क्लिक किया है।",
      mistake:"यदि यह गलती से हुआ है, तो कृपया नीचे दिए गए बटन पर क्लिक करके रद्द करें।",
      dbusterminal:"बस टर्मिनल तक पहुँचने के निर्देश",
      terminal2: "आप अभी हवाई अड्डे के टर्मिनल 3 में हैं",
      direction4: "- दरवाज़ा 2 तक पहुँचने के लिए 50 मीटर उत्तर दिशा में चलें।",
      direction5: "- कन्वेयर बेल्ट के पास स्थित टिम हॉर्टन्स की ओर चलें।",
      direction6: "- तेज़ दाहिना मोड़ लें — उस व्यक्ति की ओर चलें जो ग्रे हुडी पहने हुए है।",
      direction7: "- 50 मीटर दक्षिण की ओर चलें, और पास के शटल से हवाई अड्डे से बाहर निकलें।",
      direction8: "- बस स्टेशन तक पहुँचने के लिए 10 मीटर उत्तर में चलें।",
      home: "घर",
      helpTextPt1: "थोड़ा इंतजार करें,",
      helpTextPt2: "मदद रास्ते में है!",
      helpTextPt3: "यह संदेश दिखाया जा रहा है क्योंकि आपने 'सहायता के लिए कॉल करें' बटन पर क्लिक किया।",
      helpTextPt4: "यदि यह गलती से हुआ है, तो कृपया नीचे दिए गए बटन पर क्लिक करके रद्द करें।"
    },
  },
  it: {
    translation: {
      welcome: "Benvenuto",
      toCalgary: "A Calgary!",
      AirportMap: "Mappa dell",
      searchAirport: "Cerca Aeroporto",
      transportation: "Trasporto",
      flights: "Voli",
      wifi: "Wi-Fi",
      dateLabel: "Data",
      timeLabel: "Ora",
      temperatureLabel: "Temperatura",
      searchTitle: "Cosa stai cercando?",
      terminals: "Terminali",
      baggageClaim: "Ritiro bagagli",
      washrooms: "Bagni",
      connections: "Connessioni",
      parking: "Parcheggio",
      hotels: "Hotel",
      shops: "Negozi",
      busStops: "Fermate degli autobus",
      helpDesk: "Banco informazioni",
      restaurant: "Ristorante",
      back: "Indietro",
      title:"Connettiti al Wi-Fi Aeroporto",
      instruction:"Scansiona il codice QR per connetterti al Wi-Fi gratuito dell’aeroporto YYC!",
      step1:"- Vai alle impostazioni Wi-Fi del tuo dispositivo.",
      step2:"- Cerca la rete Wi-Fi: ‘YYC Airport Free Wi-Fi’",
      step3:"- Connettiti a questa rete.",
      taxi: "Taxi",
      carrental: "Noleggio auto",
      uber: "Uber",
      calgarytransit: "Trasporti di Calgary",
      dwashroom: "Indicazioni per raggiungere i bagni",
      terminal:"Attualmente ti trovi all’aeroporto, Terminal 3",
      direction1:"-Cammina verso nord per 50 metri per raggiungere la Porta 2.",
      direction2:"-Attraversa l’ingresso del Terminal 5 e poi gira verso l’uscita del Gate 6.",
      direction3:"-Passa attraverso l’uscita del Gate 6 e cammina verso nord per 60 metri per raggiungere i bagni.",
      assistance:"Questo messaggio viene mostrato perché hai cliccato sul pulsante “Richiedi assistenza”.",
      mistake:"Se si tratta di un errore, fai clic sul pulsante qui sotto per cancellare.",
      dbusterminal: "Indicazioni per raggiungere il terminal degli autobus",
      terminal2: "Attualmente ti trovi all’aeroporto, Terminal 3",
      direction4: "- Cammina verso nord per 50 metri per raggiungere la Porta 2.",
      direction5: "- Cammina verso il Tim Hortons vicino al nastro trasportatore.",
      direction6: "- Fai una brusca svolta a destra — cammina verso l'uomo con la felpa grigia.",
      direction7: "- Cammina 50 metri a sud ed esci dall'aeroporto tramite la navetta vicina.",
      direction8: "- Cammina 10 metri a nord per raggiungere la stazione degli autobus.",
      home: "Casa",
      cancel: "Annullare",
      helpTextPt1: "Aspetta un attimo,",
      helpTextPt2: "l'aiuto è in arrivo!",
      helpTextPt3: "Questo messaggio viene visualizzato perché hai cliccato sul pulsante 'Chiamata di assistenza'.",
      helpTextPt4: "Se si è trattato di un errore, clicca sul pulsante qui sotto per annullare."
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // Default language
  fallbackLng: "en", // Fallback language if a key is missing
  interpolation: {
    escapeValue: false, // React already escapes values
  },
});

export default i18n;