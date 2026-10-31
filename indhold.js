/* =====================================================================
   INDHOLD TIL FOKUS-HJEMMESIDEN – det er kun denne fil, I skal rette i.
   Regler: Behold anførselstegn "...", kommaer efter hver linje (undtagen den sidste i en liste)
   og tuborgparenteser { }. Brug ’ i stedet for ' inde i en tekst.
   ===================================================================== */
window.CONFIG = {

  /* --- Kontaktmail (bruges overalt på siden) --- */
  mail: "forening.fokus@gmail.com",

  /* --- Links --- */
  vedtaegter: "vedtaegter.pdf",          // filen ligger i samme mappe
  sociale: [
    { navn: "Instagram", url: "#" },     // erstat # med jeres adresse
    { navn: "Facebook",  url: "#" },
    { navn: "TikTok",    url: "#" }
  ],

  /* --- Adresse til medlemsregistret (fra Google Apps Script). Bruges af tilmelding og kontaktformular. --- */
  formularUrl: "https://script.google.com/macros/s/AKfycbx9FG1w64GqN_hLGLuSF2SKFsake24ALmgPbyzlVlx0yqnDlt1-ZORZNyrGksSdVQwBUA/exec",

  /* --- TEKSTER PÅ SIDEN --- */
  tekster: {
    heroTitel: "Kultur for alle unge",
    heroTekst: "Et gratis medlemskab giver dig adgang til udvalgte arrangementer hos Danmarks kulturinstitutioner til en markant reduceret pris. Hver måned. Sammen med andre unge.",

    /* tallene i toppen – ret "tal" og "tekst". Fjern en linje for at fjerne et tal. */
    noegletal: [
      { tal: "200+",  tekst: "medlemmer" },
      { tal: "1",     tekst: "event om måneden" },
      { tal: "0 kr.", tekst: "for at være med" }
    ],

    omOverskrift: "Om FOKUS",
    om: [   /* ét afsnit pr. linje */
      "FOKUS er en ungedrevet, frivillig forening, der giver unge den anledning, de ofte mangler for at opsøge kulturlivet. Mange unge finder det svært eller dyrt at gå til kultur uden en konkret anledning.",
      "Som medlem inviteres du hver måned til et udvalgt arrangement hos en etableret kulturinstitution. Vi vælger bevidst kun ét ad gangen, så kvaliteten er høj, og der opstår hype. I samarbejde med institutionerne arrangerer vi også oplæg, talks og møder med kunstnere før eller efter, så der bliver plads til fællesskab og nye samtaler.",
      "FOKUS er startet og drives af fire unge mellem 19 og 22 år, der mødte hinanden på Grundtvigs Højskole. Vi tror på, at et stærkt demokrati kræver, at alle unge har reel adgang til de fællesskaber, der former os som samfund. FOKUS drives uden kommercielt sigte."
    ],
    partnerOverskrift: "Vi samarbejder med",
    partnere: ["Østre Gasværk", "Dansehallerne", "Cinemateket", "Aveny-T", "DR Koncerthus", "Urban13", "Folketeatret"],

    eventOverskrift: "Kommende events",
    eventNote: "Billetlinket til hvert event sendes på mail til medlemmerne, når eventet annonceres. Billetter kan ikke købes her på siden.",
    ingenEvents: "Der er ingen planlagte events lige nu. Bliv medlem, så får du besked, når næste er klar.",

    kontaktTekst: "Har du et spørgsmål, eller vil I samarbejde med os? Skriv til os, eller send en mail til",
    sidefod: "foreningen for oplevelser, kultur, unge og samvær"
  },

  /* --- EVENTS (kun en oversigt, ingen billetsalg) ---------------------
     TILFØJ ET EVENT: kopiér en hel linje { ... }, sæt den ind under de andre og ret teksten.
     Sæt komma efter linjen (undtagen den sidste). FJERN: slet linjen.
     Events i fortiden skjules automatisk.
     dato: dag/måned/år, fx "23/10/2026" | tid: fx "19:30" eller "" | tekst: kort beskrivelse eller ""
  ---------------------------------------------------------------------- */
  events: [
    { dato: "23/10/2026", tid: "", titel: "Olivia",                sted: "Østre Gasværk", tekst: "" },
    { dato: "24/11/2026", tid: "", titel: "Vagabundus",            sted: "Dansehallerne", tekst: "" },
    { dato: "13/12/2026", tid: "", titel: "It’s a Wonderful Life", sted: "Cinemateket",   tekst: "" },
    { dato: "29/01/2027", tid: "", titel: "Embracing The Root",    sted: "Aveny-T",       tekst: "" }
  ],

  /* --- BESTYRELSE --- foto: "" eller filnavn, fx "anna.jpg" (upload billedet ved siden af denne fil) */
  bestyrelse: [
    { navn: "Navn Navnesen", rolle: "Forperson",         foto: "" },
    { navn: "Navn Navnesen", rolle: "Næstforperson",     foto: "" },
    { navn: "Navn Navnesen", rolle: "Kasserer",          foto: "" },
    { navn: "Navn Navnesen", rolle: "Bestyrelsesmedlem", foto: "" }
  ],

  /* --- GALLERI (tidligere events) ---
     Upload billederne ved siden af denne fil, og tilføj en linje pr. billede:
     { billede: "olivia1.jpg", tekst: "Olivia, Østre Gasværk" },  */
  galleri: [
  ],

  /* --- DATAPOLITIK --- {{mail}} bliver erstattet af kontaktmailen ovenfor */
  datapolitik: [
    { overskrift: "Hvem er ansvarlig?", tekst: "FOKUS er dataansvarlig for de oplysninger, vi behandler. Kontakt: {{mail}}." },
    { overskrift: "Hvilke oplysninger?", tekst: "Kun det, der er nødvendigt for foreningens drift: navn, e-mail, telefonnummer, fødselsår, postnummer og kommune. Skriver du til os, gemmer vi også din besked. Vi beder ikke om følsomme oplysninger. Hvis et event kræver det (fx allergier), sker det kun med dit samtykke." },
    { overskrift: "Hvorfor?", tekst: "Administration af medlemskab, planlægning og afvikling af events, kommunikation med medlemmer (en velkomstmail og mails om kommende events) og overholdelse af lovkrav. Du kan til enhver tid melde dig ud af mails ved at skrive til {{mail}}." },
    { overskrift: "Retligt grundlag.", tekst: "Opfyldelse af medlemskabet (GDPR art. 6, stk. 1, litra b), foreningens legitime interesse i at administrere medlemsforhold (litra f) og retlige forpligtelser, fx bogføringsloven (litra c). Følsomme oplysninger behandles kun med samtykke (art. 9, stk. 2, litra a)." },
    { overskrift: "Opbevaring.", tekst: "Vi opbevarer dine oplysninger, så længe du er medlem. Ved udmeldelse slettes de inden for 12 måneder, medmindre loven kræver længere opbevaring (fx 5 år for regnskabsmateriale)." },
    { overskrift: "Videregivelse.", tekst: "Kun når det er nødvendigt: til regnskabsfører eller bogholder, til offentlige myndigheder hvis loven kræver det, og til samarbejdspartnere (fx forsikringsselskaber) med kun de relevante oplysninger. Vi sælger aldrig dine oplysninger." },
    { overskrift: "Dine rettigheder.", tekst: "Du har ret til indsigt, rettelse eller sletning, begrænsning af behandling og til at gøre indsigelse. Du kan til enhver tid trække dit samtykke tilbage, hvis behandlingen bygger på samtykke." },
    { overskrift: "Klage.", tekst: "Er du uenig i vores behandling af dine oplysninger, kan du klage til Datatilsynet (datatilsynet.dk)." }
  ]
};
