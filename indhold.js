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
    { navn: "Instagram", url: "https://www.instagram.com/fokus.forening/" },     // erstat # med jeres adresse
    { navn: "Facebook",  url: "https://www.facebook.com/profile.php?id=61594122722177" },
    { navn: "TikTok",    url: "https://www.tiktok.com/@fokusforening?_r=1&_t=ZG-9B4m3g7TmDo" }
  ],

  /* --- Adresse til medlemsregistret (fra Google Apps Script). Bruges af tilmelding og kontaktformular. --- */
  formularUrl: "https://script.google.com/macros/s/AKfycbzGet1823arMrBEzkoNJ89CWfR_7cdPFosKN5Oc-h2WMGv2qalVmFqCrWxkUAFkRmtC/exec",

  /* --- TEKSTER PÅ SIDEN --- */
  tekster: {
    heroTitel: "Kultur for alle unge",
    heroTekst: "Hjælp med at gøre kultur billigere og bedre for unge mennesker! Et gratis medlemskab giver dig tilbud i indbakken til udvalgte arrangementer hos Danmarks bedste kulturinstitutioner - til en markant reduceret pris -Hver måned",

    /* tallene i toppen – ret "tal" og "tekst". Fjern en linje for at fjerne et tal. */
    noegletal: [
      { tal: "250+",  tekst: "medlemmer" },
      { tal: "1",     tekst: "event om måneden" },
      { tal: "0 kr.", tekst: "for at være med" }
    ],

    omOverskrift: "Om FOKUS",
    om: [   /* ét afsnit pr. linje */
      "FOKUS er en ungedrevet, frivillig forening, der savner et kulturliv i København, som er billigere, bedre og mere tilgængeligt for unge mennesker. For det skal ikke være SU-satsen eller kreativiteten hos den enkelte der skal bestemme om man har adgang til god kultur!",
      "Med et medlemsskab i FOKUS får du helt automatisk ét nøje udvalgt kultur-tilbud om måneden direkte i indbakken. VI spænder bredt og har tilbud til en hver smag, men gerne til formål at udfordre vores medlemmer. Uanset om eventet var noget for dig eller ej, oplever du eventet med en stor gruppe andre unge, du kan dele dine tanker med.",
      "Vi udnytter at kulturinstitutioner savner unge mennesker, og at unge mennesker savner kultur. Man kan se det som en slags organiseret grupperabat - med ekstra fordele oven i købet.",
      "FOKUS er desuden 100% non-profit, og har udelukkende til formål at skabe bedre rammer for unge i det danske kulturliv!",
   
      "Hvis du vil være med til at give unge mennesker en chance i det københavnske kulturliv, så meld dig ind i dag - Fuldkommen gratis og uforpligtende.
    ],
    partnerOverskrift: "Vi samarbejder med",
    partnere: ["Østre Gasværk", "Dansehallerne", "Cinemateket"],

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
    { dato: "24/11/2026", tid: "", titel: "Vagabundus",            sted: "Dansehallerne", tekst: "Vagabundus er en kraftfuld og eksplosiv danseforestilling om krop, fællesskab og bevægelse. 13 performere fylder scenen med uafbrudt dans, sang og en helt særlig gruppeenergi, der tager publikum med storm." },
    { dato: "13/12/2026", tid: "", titel: "Mission: Impossible 1", sted: "Cinemateket",   tekst: "En tidsløs klassiker! Filmen vil garanteret give en velfortjent pause fra julegaveræset og de sludfyldte decembergader" },
    { dato: "29/01/2027", tid: "", titel: "Embracing The Root",    sted: "Aveny-T",       tekst: "" }
  ],

  /* --- BESTYRELSE --- foto: "" eller filnavn, fx "anna.jpg" (upload billedet ved siden af denne fil) */
  bestyrelse: [
    { navn: "Gustav Falgren", rolle: "Forperson",         foto: "" },
    { navn: "Tristan Garde Abildgaard", rolle: "Næstforperson",     foto: "" },
    { navn: "Karl Korfix Barlebo", rolle: "Kasserer",          foto: "" },
    { navn: "Kasper Holte Nielsen", rolle: "Bestyrelsesmedlem", foto: "" }
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
