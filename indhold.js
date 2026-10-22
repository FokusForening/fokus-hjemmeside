/* =====================================================================
   INDHOLD TIL FOKUS-HJEMMESIDEN
   Det er kun denne fil, I skal rette i. Husk at bevare anførselstegn ("..."),
   kommaer efter hver linje og tuborgparenteser { }.
   ===================================================================== */
window.CONFIG = {

  /* --- Medlemstal (vises i toppen af siden) --- */
  medlemmer: "200+",

  /* --- Links --- */
  vedtaegter: "vedtaegter.pdf",   // filen ligger i samme mappe
  sociale: [
    { navn: "Instagram", url: "#" },   // erstat # med jeres adresse
    { navn: "Facebook",  url: "#" },
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
    { dato: "23/10/2026", tid: "", titel: "Olivia",                 sted: "Østre Gasværk", tekst: "", link: "" },
    { dato: "24/11/2026", tid: "", titel: "Vagabundus",             sted: "Dansehallerne", tekst: "", link: "" },
    { dato: "13/12/2026", tid: "", titel: "It’s a Wonderful Life",  sted: "Cinemateket",   tekst: "", link: "" },
    { dato: "29/01/2027", tid: "", titel: "Embracing The Root",     sted: "Aveny-T",       tekst: "", link: "" }
  ],

  /* --- BESTYRELSE --- foto: lad stå som "" eller skriv filnavn, fx "anna.jpg" */
  bestyrelse: [
    { navn: "Navn Navnesen", rolle: "Forperson",         foto: "" },
    { navn: "Navn Navnesen", rolle: "Næstforperson",     foto: "" },
    { navn: "Navn Navnesen", rolle: "Kasserer",          foto: "" },
    { navn: "Navn Navnesen", rolle: "Bestyrelsesmedlem", foto: "" }
  ],

  /* --- GALLERI (tidligere events) ---
     Upload billederne til GitHub ved siden af denne fil, og tilføj en linje pr. billede.
     Eksempel:  { billede: "olivia1.jpg", tekst: "Olivia, Østre Gasværk" },   */
  galleri: [
  ],

  /* --- Adresse til tilmelding og kontaktformular (Google Sheets, kommer til sidst) --- */
  formularUrl: ""
};
