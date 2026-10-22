/* =====================================================================
   INDHOLD TIL FOKUS-HJEMMESIDEN
   Det er kun denne fil, I skal rette i. Husk at bevare anførselstegn ("..."),
   kommaer efter hver linje og tuborgparenteser { }.
   ===================================================================== */
window.CONFIG = {

  /* --- Medlemstal (vises i toppen af siden) --- */
  medlemmer: "230+",

  /* --- Links --- */
  vedtaegter: "vedtaegter.pdf",   // filen ligger i samme mappe
  sociale: [
    { navn: "Instagram", url: "https://www.instagram.com/fokus.forening/" },   // erstat # med jeres adresse
    { navn: "Facebook",  url: "https://www.facebook.com/profile.php?id=61594122722177" },
    { navn: "TikTok",    url: "#" }
  ],

  /* --- EVENTS ---------------------------------------------------------
     TILFØJ ET EVENT: kopiér en hel linje { ... }, sæt den ind under de andre,
     og ret teksten. Sørg for komma til sidst på linjen (undtagen den sidste).
     FJERN ET EVENT: slet linjen. (Events i fortiden skjules også automatisk.)

     dato:  dag/måned/år, fx "23/10/2026"
     tid:   valgfri, fx "19:30" (lad den stå som "" hvis ukendt)
     titel: eventets navn
     sted:  stedet
     tekst: valgfri kort beskrivelse (lad den stå som "" hvis ingen)
     link:  link til partnerens billetside (lad den stå som "" hvis ikke klar endnu)
  ---------------------------------------------------------------------- */
  events: [
    { dato: "23/10/2026", tid: "", titel: "Olivia",                 sted: "Østre Gasværk", tekst: "OLIVIA er en spektakulær musical om angst, identitet, fællesskab - og om at turde stå ved den, man er. Med musik af bl. a. Rasmus Seebach og manuskript af Adam Price. Der venter en storslået og magisk fortælling om at finde sig selv og slippe sin frygt.", link: "OLIVIA er en spektakulær musical om angst, identitet, fællesskab - og om at turde stå ved den, man er. Med musik af bl. a. Rasmus Seebach og manuskript af Adam Price. Der venter en storslået og magisk fortælling om at finde sig selv og slippe sin frygt." },
    { dato: "24/11/2026", tid: "", titel: "Vagabundus",             sted: "Dansehallerne", tekst: "Vagabundus er en kraftfuld og eksplosiv danseforestilling om krop, fællesskab og bevægelse. 13 performere fylder scenen med uafbrudt dans, sang og en helt særlig gruppeenergi, der tager publikum med storm.", link: "https://dansehallerne.dk/da/2026/07/03/vagabundus/#redeemcampaign/fokus1" },
    { dato: "13/12/2026", tid: "", titel: "It’s a Wonderful Life",  sted: "Cinemateket",   tekst: "", link: "" },
    { dato: "29/01/2027", tid: "", titel: "Embracing The Root",     sted: "Aveny-T",       tekst: "", link: "" }
  ],

  /* --- BESTYRELSE --- foto: lad stå som "" eller skriv filnavn, fx "anna.jpg" */
  bestyrelse: [
    { navn: "Gustav Falgren", rolle: "Forperson",         foto: "" },
    { navn: "Tristan Garde Abildgaard", rolle: "Næstforperson",     foto: "" },
    { navn: "Karl Korfix Barlebo", rolle: "Kasserer",          foto: "" },
    { navn: "Kasper Holte Nielsen", rolle: "Bestyrelsesmedlem", foto: "" }
  ],

  /* --- GALLERI (tidligere events) ---
     Upload billederne til GitHub ved siden af denne fil, og tilføj en linje pr. billede.
     Eksempel:  { billede: "olivia1.jpg", tekst: "Olivia, Østre Gasværk" },   */
  galleri: [
  ],

  /* --- Adresse til tilmelding og kontaktformular (Google Sheets, kommer til sidst) --- */
  formularUrl: ""
};
