# Terry Training Dashboard

Web dashboard multi-pagina progettata per Terry e la sua coach Marina. L’applicazione permette di consultare il piano di allenamento per i Giorni A, B e C, salvare localmente pesi e note per ogni esercizio e visualizzare i progressi direttamente dal proprio smartphone.

> **Nota:** tutte le informazioni inserite (pesi, note, completamento) vengono salvate nel `localStorage` del browser del dispositivo in uso.

## Requisiti

- Node.js >= 18
- npm >= 9

## Installazione e avvio

```bash
npm install
npm run dev
```

Il comando `npm run dev` avvia il server di sviluppo Vite e mostra in console l’URL locale (di default `http://localhost:5173`). Apri l’indirizzo dal browser del tuo smartphone o usa gli strumenti DevTools per simulare il dispositivo.

Per creare una build ottimizzata per la distribuzione:

```bash
npm run build
npm run preview
```

## Struttura progetto

```
.
├── index.html           # punto di ingresso Vite
├── src/
│   ├── App.tsx          # routing applicazione
│   ├── main.tsx         # mount React + provider contesto
│   ├── assets/          # risorse statiche (logo, immagini)
│   ├── components/      # componenti UI riutilizzabili
│   ├── context/         # TrainingProvider con persistenza localStorage
│   ├── data/            # definizione completo del piano di allenamento
│   ├── pages/           # pagine (Home, Giorni, Progressi)
│   └── styles/          # fogli di stile globali
├── package.json
├── tsconfig*.json
└── vite.config.ts
```

## Funzionalità principali

- **Navigazione multi-pagina**: Home, Giorno A, Giorno B, Giorno C, pagina Progressi.
- **Salvataggio locale immediato**: i campi “Peso”, “Note” e “Completato” salvano automaticamente i dati in `localStorage`.
- **Modal informativa**: toccando il nome di un esercizio si apre una finestra con spiegazione dettagliata, muscoli target e consigli.
- **Progress bar giornaliera**: sintesi degli esercizi completati per ogni giorno.
- **UI mobile-first**: layout ottimizzato per smartphone (navbar sticky, card full-width, controlli touch-friendly) con palette rosa.

## Percorso d’uso

1. Apri la home e scegli un giorno di allenamento.
2. Registra peso e note man mano che completi gli esercizi (salvataggio automatico).
3. Tocca il nome di un esercizio per leggere istruzioni e consigli di esecuzione.
4. Consulta la pagina “Progressi” per avere una vista complessiva e, se necessario, azzera i dati.

## Reset dei dati

- **Reset giornata**: all’interno di ogni pagina Giorno è presente un pulsante “Reset giornata” che ripristina i dati per quel giorno.
- **Reset completo**: nella pagina “Progressi” è disponibile un pulsante che elimina tutti i dati salvati.

## Personalizzazione

- Colori e tipografia sono gestiti nel file `src/styles/index.css`.
- Il piano di allenamento (titoli, descrizioni, consigli) si trova in `src/data/trainingPlan.ts`.
- Per aggiungere nuovi giorni o esercizi basta estendere la struttura dati e Vite rigenererà automaticamente l’interfaccia.

## Testing

Al momento non sono configurati test automatici. Puoi aggiungere strumenti come Vitest, React Testing Library o Cypress in base alle esigenze del team.

## Licenza

Questo progetto è fornito senza una licenza esplicita. Concordare con Marina e Terry la licenza d’uso desiderata prima della pubblicazione.
