export type DayId = 'giornoA' | 'giornoB' | 'giornoC';

export interface ExerciseDetail {
  id: string;
  name: string;
  summary: string;
  prescription?: string;
  rest?: string;
  rir?: string;
  notes?: string;
  description: string;
  targets: string[];
  tips: string[];
}

export interface Section {
  id: string;
  title: string;
  description?: string;
  exercises: ExerciseDetail[];
}

export interface DayPlan {
  id: DayId;
  slug: string;
  title: string;
  focus: string;
  overview: string;
  estimatedDuration: string;
  sections: Section[];
}

export const dayPlans: DayPlan[] = [
  {
    id: 'giornoA',
    slug: 'giorno-a',
    title: 'Giorno A',
    focus: 'Push · Tricipiti · Core',
    overview:
      'Sessione focalizzata su petto, spalle e tricipiti con blocchi core. Conclusione con circuito AMRAP per stimolo metabolico.',
    estimatedDuration: 'Circa 2 ore (10′ warm-up, 90′ forza, 10′ finisher, 10′ cool-down)',
    sections: [
      {
        id: 'warmup-a',
        title: 'Warm-up (10′)',
        exercises: [
          {
            id: 'a-warm-bike',
            name: 'Cyclette leggera o camminata in salita',
            summary: '5 minuti',
            description:
              'Mantieni un ritmo leggero ma progressivo per scaldare gradualmente la muscolatura e aumentare la frequenza cardiaca.',
            targets: ['Sistema cardiovascolare', 'Muscoli inferiori'],
            tips: ['Mantieni una postura eretta', 'Respira con calma e profondità'],
          },
          {
            id: 'a-warm-mobility',
            name: 'Mobilità spalle/polsi + Cat-cow + Aperture con elastico',
            summary: '2×10 rip. cat-cow · 2×12 aperture',
            description:
              'Sequenza di mobilità per articolazioni di spalle, polsi e colonna toracica. Alterna cat-cow e aperture con elastico per preparare la parte alta del corpo.',
            targets: ['Spalle', 'Polsi', 'Colonna'],
            tips: ['Esegui lentamente', 'Concentrati su un range di movimento controllato'],
          },
        ],
      },
      {
        id: 'strength-a',
        title: 'Forza / Ipertrofia (90′)',
        exercises: [
          {
            id: 'a-panca-piana',
            name: 'Panca piana con manubri',
            summary: '4×6–10 @RIR 1–2',
            rest: 'Recupero 120″',
            description:
              'Sdraiati sulla panca con scapole addotte e piedi saldi. Spingi i manubri verso l’alto mantenendo i gomiti a 45°. Controlla la discesa e evita di forzare l’arco lombare.',
            targets: ['Pettorali', 'Tricipiti', 'Spalle anteriori'],
            tips: ['Mantieni le scapole stabili', 'Respira in fase eccentrica, espira in spinta'],
          },
          {
            id: 'a-inclinata',
            name: 'Spinte su panca inclinata 30° con manubri',
            summary: '3×8–12 @RIR 1–2',
            rest: 'Recupero 90″',
            description:
              'Imposta l’inclinazione a 30°. Parti con i manubri allineati alle spalle e spingi verso l’alto mantenendo traiettoria controllata. Evita di chiudere troppo i gomiti in alto.',
            targets: ['Pettorale alto', 'Spalle anteriori'],
            tips: ['Non iperestendere i polsi', 'Stabilizza il core per evitare oscillazioni'],
          },
          {
            id: 'a-french-press',
            name: 'French press manubrio (seduta)',
            summary: '4×10–12 @RIR 1–2',
            rest: 'Recupero 90″',
            description:
              'Seduta con schiena sostenuta, porta il manubrio dietro la testa mantenendo i gomiti stretti. Estendi i gomiti senza sbilanciare il tronco.',
            targets: ['Tricipiti'],
            tips: ['Mantieni i gomiti vicini', 'Controlla la discesa evitando rimbalzi'],
          },
          {
            id: 'a-push-down',
            name: 'Push down ai cavi (corda)',
            summary: '3×12–15 @RIR 1–2',
            rest: 'Recupero 60–90″',
            description:
              'Impugna la corda con presa neutra. Parti con gomiti ai fianchi e distendi controllando la fase eccentrica. Apri leggermente le mani al termine del movimento.',
            targets: ['Tricipiti'],
            tips: ['Schiena neutra e petto aperto', 'Evita di oscillare con il busto'],
          },
          {
            id: 'a-lateral-raise',
            name: 'Alzate laterali con manubri',
            summary: '3×12–15 @RIR 1–2',
            rest: 'Recupero 60″',
            description:
              'In stazione eretta, solleva i manubri lateralmente fino a linea spalle con gomito morbido. Fermati un istante in alto e scendi lentamente.',
            targets: ['Spalle laterali'],
            tips: ['Core attivo per stabilità', 'Polsi neutri e spalle lontane dalle orecchie'],
          },
          {
            id: 'a-core-crunch',
            name: 'Abdominal crunch machine',
            summary: '4×12–15 @RIR 1–2',
            rest: 'Recupero 60″',
            description:
              'Regola la macchina per avere ROM completo. Espira durante la chiusura, senti il coinvolgimento dell’addome, evita di spingere con le braccia.',
            targets: ['Retto addominale'],
            tips: ['Mantieni il mento leggermente rientrato', 'Controlla la fase di ritorno'],
          },
          {
            id: 'a-core-pallof',
            name: 'Pallof press',
            summary: '3×12–15 per lato @RIR 1–2',
            rest: 'Recupero 45–60″',
            description:
              'Posizionati in piedi con elastico/cavo all’altezza del petto. Spingi in avanti mantenendo busto stabile, evitando rotazioni. Cambia lato dopo ogni serie.',
            targets: ['Core', 'Obliqui'],
            tips: ['Ginocchia morbide', 'Mantieni tensione costante sull’elastico'],
          },
        ],
      },
      {
        id: 'finisher-a',
        title: 'Circuito Finisher (10′)',
        description: 'AMRAP 10′: push-up mani strette 8–12 + affondi alternati 16–20 + plank 40″. Riposa solo se necessario.',
        exercises: [
          {
            id: 'a-finisher-pushup',
            name: 'Push-up mani strette (semplificati)',
            summary: '8–12 ripetizioni',
            description:
              'Posiziona le mani sotto le spalle, corpo in linea. Scendi controllando e spingi tornando su. Usa appoggio ginocchia se necessario per mantenere tecnica.',
            targets: ['Tricipiti', 'Pettorali'],
            tips: ['Mantieni core attivo', 'Evita di incurvare la zona lombare'],
          },
          {
            id: 'a-finisher-lunge',
            name: 'Affondi alternati sul posto',
            summary: '16–20 passi totali',
            description:
              'Fai un passo avanti mantenendo busto eretto. Scendi con entrambe le ginocchia a 90° e spingi tornando al centro. Alterna le gambe.',
            targets: ['Quadricipiti', 'Glutei'],
            tips: ['Spingi dal tallone frontale', 'Controlla l’allineamento del ginocchio'],
          },
          {
            id: 'a-finisher-plank',
            name: 'Plank',
            summary: '40″ tenuta isometrica',
            description:
              'Appoggia avambracci a terra, gomiti sotto le spalle e corpo in linea retta. Contrai addome e glutei, respira in modo controllato.',
            targets: ['Core'],
            tips: ['Evita che i fianchi crollino', 'Mantieni sguardo al pavimento'],
          },
        ],
      },
      {
        id: 'cooldown-a',
        title: 'Cool-down (10′)',
        description:
          'Stretch tricipiti overhead, pettorali alla parete, addominali leggeri e respirazione diaframmatica per favorire il recupero.',
        exercises: [
          {
            id: 'a-cooldown-stretch',
            name: 'Stretch tricipiti, pettorali e respirazione',
            summary: 'Sequenza guidata 10 minuti',
            description:
              'Alterna stretch per tricipiti, pettorali e addominali mantenendo ogni posizione 30–40 secondi. Concludi con respirazione diaframmatica profonda.',
            targets: ['Tricipiti', 'Pettorali', 'Diaframma'],
            tips: ['Non forzare oltre il comfort', 'Respira in modo lento e controllato'],
          },
        ],
      },
    ],
  },
  {
    id: 'giornoB',
    slug: 'giorno-b',
    title: 'Giorno B',
    focus: 'Pull · Bicipiti · Core',
    overview:
      'Focus su tirate e lavoro di bicipiti, arricchito da blocco core e finisher EMOM per resistenza muscolare.',
    estimatedDuration: 'Circa 2 ore (10′ warm-up, 90′ forza, 10′ finisher, 10′ cool-down)',
    sections: [
      {
        id: 'warmup-b',
        title: 'Warm-up (10′)',
        exercises: [
          {
            id: 'b-warm-walk',
            name: 'Camminata in salita',
            summary: '5 minuti',
            description:
              'Imposta un’inclinazione moderata sul tapis roulant. Concentrati su falcata fluida e respirazione costante per attivare la catena posteriore.',
            targets: ['Catena posteriore', 'Cardio'],
            tips: ['Mantieni postura eretta', 'Non aggrapparti alle maniglie'],
          },
          {
            id: 'b-warm-band',
            name: 'Pulldown + face pull con elastico',
            summary: '2×10 ripetizioni ciascuno',
            description:
              'Alterna tirate al petto e face pull con elastico per attivare dorsali e cuffia dei rotatori. Movimento controllato e scapole attive.',
            targets: ['Dorsali', 'Spalle posteriori'],
            tips: ['Mantieni tensione costante', 'Controlla il ritorno'],
          },
        ],
      },
      {
        id: 'strength-b',
        title: 'Forza / Ipertrofia (90′)',
        exercises: [
          {
            id: 'b-lat-machine',
            name: 'Lat machine presa media',
            summary: '4×8–12 @RIR 1–2',
            rest: 'Recupero 90–120″',
            description:
              'Impugna la barra con presa media. Tira portando i gomiti verso il busto e concludi con scapole addotte. Evita di dondolare con il corpo.',
            targets: ['Dorsali', 'Bicipiti'],
            tips: ['Mantieni petto alto', 'Non lasciare andare le spalle nella risalita'],
          },
          {
            id: 'b-one-arm-row',
            name: 'Rematore con manubrio',
            summary: '3×8–12 per lato @RIR 1–2',
            rest: 'Recupero 90″',
            description:
              'Appoggia un ginocchio su panca, schiena parallela al suolo. Tira il manubrio verso il fianco mantenendo gomito vicino al corpo.',
            targets: ['Dorsali', 'Gran rotondo'],
            tips: ['Core attivo per stabilità', 'Evita di ruotare il busto'],
          },
          {
            id: 'b-incline-curl',
            name: 'Curl manubri su panca inclinata',
            summary: '4×10–12 @RIR 1–2',
            rest: 'Recupero 90″',
            description:
              'Siediti con schiena aderente alla panca inclinata 30–45°. Esegui il curl mantenendo il gomito fisso e palmo rivolto in alto.',
            targets: ['Bicipiti'],
            tips: ['Evita di slanciare', 'Contrai i bicipiti al top del movimento'],
          },
          {
            id: 'b-high-cable-curl',
            name: 'Curl al cavo alto',
            summary: '3×12–15 @RIR 1–2',
            rest: 'Recupero 60–90″',
            description:
              'In stazione eretta tra due cavi, solleva gli avambracci verso le spalle mantenendo gomiti fissi. Controlla la fase eccentrica.',
            targets: ['Bicipiti'],
            tips: ['Polsi neutri', 'Core stabile per evitare oscillazioni'],
          },
          {
            id: 'b-cable-fly',
            name: 'Croci ai cavi alti',
            summary: '3×12–15 @RIR 1–2',
            rest: 'Recupero 60″',
            description:
              'Parti con braccia leggermente flesse e porta le mani a incontrarsi davanti al petto con controllo. Mantieni leggera curva ai gomiti.',
            targets: ['Pettorale', 'Spalle anteriori'],
            tips: ['Non chiudere le spalle', 'Controlla il ritorno evitando rimbalzi'],
          },
          {
            id: 'b-core-abroll',
            name: 'Ab roll',
            summary: '4×6–10 @RIR ~2',
            rest: 'Recupero 90″',
            description:
              'Inginocchiati e fai rotolare la ruota in avanti mantenendo core in tensione. Fermati prima di perdere la neutralità lombare e rientra con controllo.',
            targets: ['Core', 'Spalle'],
            tips: ['Evita di incurvare la schiena', 'Contrai glutei per stabilità'],
          },
          {
            id: 'b-core-russian',
            name: 'Russian twist',
            summary: '3×12–15 per lato @RIR 1–2',
            rest: 'Recupero 60″',
            description:
              'Seduta con busto leggermente inclinato, solleva i piedi e ruota il busto portando le mani a toccare il fianco. Alterna i lati con controllo.',
            targets: ['Obliqui'],
            tips: ['Mantieni petto aperto', 'Respira regolarmente durante le rotazioni'],
          },
        ],
      },
      {
        id: 'finisher-b',
        title: 'Circuito Finisher (10′)',
        description: 'EMOM 10′: farmer carry 60-80 passi + air squat 15-20 + hollow hold 25–35″.',
        exercises: [
          {
            id: 'b-finisher-farmer',
            name: 'Farmer carry',
            summary: '60-80 passi',
            description:
              'Afferra due manubri pesanti e cammina mantenendo spalle attive e core contratto. Passi corti e controllati.',
            targets: ['Avambracci', 'Trapezio', 'Core'],
            tips: ['Mantieni postura alta', 'Evita di inclinarti lateralmente'],
          },
          {
            id: 'b-finisher-squat',
            name: 'Air squat',
            summary: '15-20 ripetizioni',
            description:
              'Piedi alla larghezza delle spalle, scendi mantenendo ginocchia in linea con piedi e petto aperto. Risali spingendo dai talloni.',
            targets: ['Quadricipiti', 'Glutei'],
            tips: ['Mantieni talloni a terra', 'Non collassare con le ginocchia'],
          },
          {
            id: 'b-finisher-hollow',
            name: 'Hollow hold',
            summary: '25–35″ tenuta',
            description:
              'Sdraiati supina, solleva spalle e gambe mantenendo zona lombare aderente al suolo. Braccia distese oltre la testa.',
            targets: ['Core profondo'],
            tips: ['Respira corto ma regolare', 'Se necessario piega leggermente le ginocchia'],
          },
        ],
      },
      {
        id: 'cooldown-b',
        title: 'Cool-down (10′)',
        description: 'Stretch dorsali, avambracci e parete addominale per favorire il recupero.',
        exercises: [
          {
            id: 'b-cooldown-stretch',
            name: 'Stretch dorsali e avambracci',
            summary: '10 minuti guidati',
            description:
              'Alterna allungamenti su barra per dorsali, estensioni polsi per avambracci e aperture dolci per addominali.',
            targets: ['Dorsali', 'Avambracci', 'Addominali'],
            tips: ['Respira lentamente', 'Non forzare oltre la soglia di comfort'],
          },
        ],
      },
    ],
  },
  {
    id: 'giornoC',
    slug: 'giorno-c',
    title: 'Giorno C',
    focus: 'Arms & Core',
    overview: 'Tri-set braccia, lavoro lower body leggero e blocco core dedicato con finisher AMRAP.',
    estimatedDuration: 'Circa 2 ore (10′ warm-up, 90′ forza, 10′ finisher, 10′ cool-down)',
    sections: [
      {
        id: 'warmup-c',
        title: 'Warm-up (10′)',
        exercises: [
          {
            id: 'c-warm-row',
            name: 'Vogatore leggero',
            summary: '5 minuti',
            description:
              'Usa ritmo medio per attivare tutto il corpo. Concentrati sulla spinta delle gambe e tiro di braccia coordinato.',
            targets: ['Cardio', 'Schiena', 'Gambe'],
            tips: ['Mantieni schiena neutra', 'Evita di piegare troppo i polsi'],
          },
          {
            id: 'c-warm-mobility',
            name: 'Mobilità gomiti/polsi + band curl & pressdown',
            summary: '2×12 ripetizioni leggere',
            description:
              'Alterna rotazioni polsi, estensioni gomiti e attivazioni leggere con elastico per preparare bicipiti e tricipiti.',
            targets: ['Gomiti', 'Polsi'],
            tips: ['Movimento fluido', 'Non forzare i range'],
          },
        ],
      },
      {
        id: 'trisets-c1',
        title: 'Tri-set braccia #1 (3–4 giri, rest 90″)',
        exercises: [
          {
            id: 'c-overhead-extension',
            name: 'Estensioni cavo overhead',
            summary: '12–15 @RIR 1–2',
            description:
              'In piedi, impugna la corda dal basso e distendi le braccia sopra la testa mantenendo gomiti fissi. Controlla la discesa.',
            targets: ['Tricipiti'],
            tips: ['Core attivo', 'Non aprire eccessivamente i gomiti'],
          },
          {
            id: 'c-scott-curl',
            name: 'Curl alla panca Scott',
            summary: '10–12 @RIR 1–2',
            description:
              'Posiziona le braccia sul supporto della panca Scott. Esegui il curl concentrandoti sulla contrazione dei bicipiti.',
            targets: ['Bicipiti'],
            tips: ['Evita di sollevare i gomiti dal supporto', 'Controlla la fase negativa'],
          },
          {
            id: 'c-reverse-curl',
            name: 'Reverse curl bilanciere EZ',
            summary: '10–12 @RIR 1–2',
            description:
              'Impugna il bilanciere EZ in presa prona. Solleva controllando e mantieni i polsi forti per coinvolgere brachioradiali.',
            targets: ['Brachioradiali', 'Bicipiti'],
            tips: ['Non slanciare il busto', 'Mantieni gomiti vicini al corpo'],
          },
        ],
      },
      {
        id: 'trisets-c2',
        title: 'Tri-set braccia #2 (3–4 giri, rest 90″)',
        exercises: [
          {
            id: 'c-assisted-dip',
            name: 'Dip alle parallele assistite',
            summary: '8–12 @RIR 1–2',
            description:
              'Imposta l’assistenza necessaria. Scendi con tronco leggermente inclinato e risali estendendo i gomiti.',
            targets: ['Tricipiti', 'Pettorali'],
            tips: ['Mantieni scapole depresse', 'Evita di oscillare con le gambe'],
          },
          {
            id: 'c-rope-curl',
            name: 'Curl cavo con corda',
            summary: '12–15 @RIR 1–2',
            description:
              'Impugna la corda con presa neutra e porta le mani verso le spalle. Apri leggermente le mani alla fine del movimento per enfatizzare i bicipiti.',
            targets: ['Bicipiti'],
            tips: ['Gomiti fissi ai fianchi', 'Core attivo per stabilità'],
          },
          {
            id: 'c-french-press',
            name: 'French press sdraiata',
            summary: '12–15 per lato @RIR 1–2',
            description:
              'Sdraiata su panca, tieni un manubrio con entrambe le mani o due manubri leggeri. Fletti ed estendi i gomiti mantenendo braccia stabili.',
            targets: ['Tricipiti'],
            tips: ['Gomiti stretti', 'Non iperestendere i polsi'],
          },
        ],
      },
      {
        id: 'lower-c',
        title: 'Lower body focus',
        exercises: [
          {
            id: 'c-rdl',
            name: 'Stacco rumeno con bilanciere/manubri',
            summary: '2–3×8–10 @RIR 1–2',
            rest: 'Recupero 90–120″',
            description:
              'Mantieni schiena neutra e fai scorrere il bilanciere lungo le gambe. Spingi i fianchi indietro e contrai i glutei per risalire.',
            targets: ['Ischiocrurali', 'Glutei'],
            tips: ['Peso sul mesopiede', 'Non arrotondare la schiena'],
          },
          {
            id: 'c-goblet-squat',
            name: 'Goblet squat',
            summary: '2–3×10–12 @RIR 1–2',
            rest: 'Recupero 90″',
            description:
              'Tieni il manubrio vicino al petto, scendi con controllo fino a cosce parallele o oltre. Spingi dai talloni per risalire.',
            targets: ['Quadricipiti', 'Glutei'],
            tips: ['Gomiti puntati verso il basso', 'Mantieni petto aperto'],
          },
        ],
      },
      {
        id: 'core-c',
        title: 'Core block (15′)',
        exercises: [
          {
            id: 'c-core-machine',
            name: 'Abdominal machine',
            summary: '3×12–15 @RIR 1–2',
            rest: 'Recupero 60″',
            description:
              'Regola la macchina per il tuo range. Espira mentre chiudi e torna lentamente alla posizione iniziale.',
            targets: ['Retto addominale'],
            tips: ['Mantieni cervicale neutra', 'Esegui con controllo'],
          },
          {
            id: 'c-side-plank',
            name: 'Side plank',
            summary: '3×30–40″ per lato',
            description:
              'Allineati in appoggio su avambraccio e bordo del piede. Mantieni il bacino sollevato e corpo in linea.',
            targets: ['Obliqui'],
            tips: ['Spingi attivamente dal gomito', 'Mantieni sguardo avanti'],
          },
          {
            id: 'c-fitball-plank',
            name: 'Plank su fitball',
            summary: '3×12–15 rotolamenti',
            description:
              'Appoggia gli avambracci sulla fitball e disegna piccoli cerchi controllati coinvolgendo il core.',
            targets: ['Core profondo', 'Spalle'],
            tips: ['Evita movimenti bruschi', 'Mantieni glutei attivi'],
          },
        ],
      },
      {
        id: 'finisher-c',
        title: 'Circuito Finisher (10′)',
        description: 'AMRAP 10′: DB snatch 12 + diamond push-up 8–10 + V sit-up 20″.',
        exercises: [
          {
            id: 'c-finisher-snatch',
            name: 'DB Snatch',
            summary: '12 ripetizioni',
            description:
              'Con un kettlebell o manubrio leggero, esegui uno snatch alternato focalizzandoti su esplosività e controllo in chiusura.',
            targets: ['Spalle', 'Core', 'Glutei'],
            tips: ['Spingi forte dal bacino', 'Blocca il gomito in alto con controllo'],
          },
          {
            id: 'c-finisher-diamond',
            name: 'Diamond push-up (semplificati)',
            summary: '8–10 ripetizioni',
            description:
              'Posiziona le mani a diamante sotto il petto. Se necessario appoggia le ginocchia a terra mantenendo corpo allineato.',
            targets: ['Tricipiti', 'Pettorali'],
            tips: ['Mantieni gomiti vicini al corpo', 'Espira in fase di spinta'],
          },
          {
            id: 'c-finisher-vsit',
            name: 'V sit-up',
            summary: '20″ lavoro continuo',
            description:
              'Sdraiata supina, solleva gambe e busto simultaneamente cercando di toccare le punte dei piedi con le mani. Ritorna controllando.',
            targets: ['Core'],
            tips: ['Non tirare il collo', 'Mantieni addome sempre attivo'],
          },
        ],
      },
      {
        id: 'cooldown-c',
        title: 'Cool-down (10′)',
        description: 'Stretch bicipiti/tricipiti, anche e respirazione diaframmatica.',
        exercises: [
          {
            id: 'c-cooldown-stretch',
            name: 'Stretch finale + respirazione',
            summary: '10 minuti guidati',
            description:
              'Alterna allungamenti per bicipiti, tricipiti e anche. Concludi con respirazione diaframmatica profonda per abbassare il battito.',
            targets: ['Bicipiti', 'Tricipiti', 'Anche'],
            tips: ['Mantieni respirazione lenta', 'Ascolta il corpo e rilassati'],
          },
        ],
      },
    ],
  },
];

export function collectDayExercises(day: DayPlan): ExerciseDetail[] {
  return day.sections.reduce<ExerciseDetail[]>((exercises, section) => {
    section.exercises.forEach((exercise) => {
      exercises.push(exercise);
    });
    return exercises;
  }, []);
}
