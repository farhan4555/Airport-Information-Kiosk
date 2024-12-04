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
      restaurant: "Restaurant"
    },
  },
  es: {
    translation: {
      welcome: "Bienvenido",
      toCalgary: "A Calgary!",
      AirportMap: "Mapa del Aeropuerto",
      searchAirport: "Buscar Aeropuerto",
      transportation: "Transporte",
      flights: "Vuelos",
      wifi: "Wi-Fi",
      dateLabel: "Fecha",
      timeLabel: "Hora",
      temperatureLabel: "Temperatura",
      searchTitle: "¿Qué estás buscando?",
      terminals: "Terminales",
      baggageClaim: "Reclamo de equipaj",
      washrooms: "Baños",
      connections: "Conexiones",
      parking: "Estacionamiento",
      hotels: "Hoteles",
      shops: "Tiendas",
      busStops: "Paradas de autobús",
      helpDesk: "Mostrador de ayuda",
      airportMap: "Mapa del aeropuerto",
      restaurant: "Restaurante"
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
      restaurant: "रेस्टोरेंट"
    },
  },
  it: {
    translation: {
      welcome: "Benvenuto",
      toCalgary: "A Calgary!",
      AirportMap: "Mappa dell'Aeroporto",
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
      restaurant: "Ristorante"
      
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