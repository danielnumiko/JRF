// Our people — full directory across all departments (token-bound)
function PeoplePage() {
  const FR = "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/";
  const ourDirectors = [
    { name: "Julian Hartley", role: "Group Chief Executive", img: "https://media.ffycdn.net/eu/joseph-rowntree-foundation/NekfPHCd8GLqho8cvwAG.png?width=750&height=750" },
    { name: "Sophia Parker", role: "Director of Emerging Futures", img: FR+"eyJvYXV0aCI6eyJjbGllbnRfaWQiOiJjbGllbnQtbXpxYnlrbHNmdGR6aDd1dyJ9LCJwYXRoIjoiam9zZXBoLXJvd250cmVlLWZvdW5kYXRpb25cL2ZpbGVcLzhWamF0VDFGZEtpODc5RlIyMmRZLmpwZyJ9:joseph-rowntree-foundation:6hjGxvlYMn2R22zJwem0aE1Kef1dKG3clea1C8jOVtg?width=750&height=750", bluesky: "https://bsky.app/profile/mssophiaparker.bsky.social" },
    { name: "Tracey Preece", role: "Director of Finance", img: FR+"eyJvYXV0aCI6eyJjbGllbnRfaWQiOiJjbGllbnQtbXpxYnlrbHNmdGR6aDd1dyJ9LCJwYXRoIjoiam9zZXBoLXJvd250cmVlLWZvdW5kYXRpb25cL2ZpbGVcL1lzWER3UTRHYlRTS1g3ZGdka3I3LmpwZyJ9:joseph-rowntree-foundation:U0lTicABn7KCD94sGXe_-poTPAyw3juTrXy3jPkP048?width=750&height=750", x: "http://x.com/PreeceTracey" },
    { name: "Frank Soodeen", role: "Director of Communications and Public Engagement", img: FR+"eyJvYXV0aCI6eyJjbGllbnRfaWQiOiJjbGllbnQtbXpxYnlrbHNmdGR6aDd1dyJ9LCJwYXRoIjoiam9zZXBoLXJvd250cmVlLWZvdW5kYXRpb25cL2ZpbGVcL2M5MXYxcmVwc3lDc3BiUVlaTG5mLmpwZyJ9:joseph-rowntree-foundation:YoJ-i_8N2qagJ-TqK7tyPkFvGue9OeCjSoEttabGXhw?width=750&height=750", linkedin: "https://www.linkedin.com/in/frank-soodeen-881b651/" },
    { name: "Alfie Stirling", role: "Director of Insight and Policy", img: FR+"eyJvYXV0aCI6eyJjbGllbnRfaWQiOiJjbGllbnQtbXpxYnlrbHNmdGR6aDd1dyJ9LCJwYXRoIjoiam9zZXBoLXJvd250cmVlLWZvdW5kYXRpb25cL2ZpbGVcL3pjdkhqNXdRWDI3TUdVb29pVldhLmpwZyJ9:joseph-rowntree-foundation:v35gYdO0A-bQUi3yvumTC8dx3lmyWXQ694T_FpgK8iM?width=750&height=750", x: "https://x.com/alfie_stirling", bluesky: "https://bsky.app/profile/alfie-stirling.bsky.social" },
    { name: "Hannah Watson", role: "Director of People", img: FR+"eyJvYXV0aCI6eyJjbGllbnRfaWQiOiJjbGllbnQtbXpxYnlrbHNmdGR6aDd1dyJ9LCJwYXRoIjoiam9zZXBoLXJvd250cmVlLWZvdW5kYXRpb25cL2ZpbGVcL0p2c05lN3cxeWJqcThqQ1ZxeXFoLnBuZyJ9:joseph-rowntree-foundation:SlNUNABya9nfkjEeTG-oMtFIdENMPC_znssBtMM7Htc?width=750&height=750", email: "hannah.watson@jrf.org.uk" },
  ];

  const policyAndIdeas = [
    { name: "Meri Åhlberg", role: "Senior Policy Adviser", img: FR+"eyJvYXV0aCI6eyJjbGllbnRfaWQiOiJjbGllbnQtbXpxYnlrbHNmdGR6aDd1dyJ9LCJwYXRoIjoiam9zZXBoLXJvd250cmVlLWZvdW5kYXRpb25cL2ZpbGVcL2pQMU5rWVdWcVlmYVgxcGRVTW9VLnBuZyJ9:joseph-rowntree-foundation:H1CFgStIrMRZqLMGqLIrS2urFOtRoVWtVZoWTKM4ejo?width=750&height=750", email: "meri.ahlberg@jrf.org.uk" },
    { name: "Antonia Antrobus-Higgins", role: "Policy Assistant", img: "https://media.ffycdn.net/eu/joseph-rowntree-foundation/XFbqLZCfzPtHkc2wdE4t.jpg?width=750&height=750", email: "antonia.antrobushiggins@jrf.org.uk", linkedin: "https://www.linkedin.com/in/antonia-antrobus-higgins/" },
    { name: "Camron Aref-Adib", role: "Senior Economist", img: "https://media.ffycdn.net/eu/joseph-rowntree-foundation/XfhE1iHnb83kcYh8bs7X.jpg?width=750&height=750", email: "camron.arefadib@jrf.org.uk" },
    { name: "Darren Baxter", role: "Principal Policy Adviser", img: FR+"eyJvYXV0aCI6eyJjbGllbnRfaWQiOiJjbGllbnQtbXpxYnlrbHNmdGR6aDd1dyJ9LCJwYXRoIjoiam9zZXBoLXJvd250cmVlLWZvdW5kYXRpb25cL2ZpbGVcL0dxSGlHZVhLbU1DeW1BSzRIS1RYLmpwZyJ9:joseph-rowntree-foundation:1_tpRHGE8BkBryyVxu1Y5Cb3eaupDfdLfO52UIYBpRA?width=750&height=750", email: "darren.baxter@jrf.org.uk", linkedin: "https://www.linkedin.com/in/darren-baxter-3a738443", x: "http://x.com/DarrenBaxter", bluesky: "https://bsky.app/profile/alfie-stirling.bsky.social" },
    { name: "Chris Belfield", role: "Principal Policy Adviser", img: FR+"eyJvYXV0aCI6eyJjbGllbnRfaWQiOiJjbGllbnQtbXpxYnlrbHNmdGR6aDd1dyJ9LCJwYXRoIjoiam9zZXBoLXJvd250cmVlLWZvdW5kYXRpb25cL2ZpbGVcLzc0RlJrVkRMUzJMUXpmeHo2dDdmLmpwZyJ9:joseph-rowntree-foundation:BVuoHZEbzaBR8_UZEK3lfpc4sYmX7IEI6ZsLBiHriTU?width=750&height=750", email: "chris.belfield@jrf.org.uk" },
    { name: "Rachel Casey", role: "Policy Adviser", img: FR+"eyJvYXV0aCI6eyJjbGllbnRfaWQiOiJjbGllbnQtbXpxYnlrbHNmdGR6aDd1dyJ9LCJwYXRoIjoiam9zZXBoLXJvd250cmVlLWZvdW5kYXRpb25cL2ZpbGVcL1V3V3NtcmtxV1B2dDFBcDF5OUJhLmpwZyJ9:joseph-rowntree-foundation:lzxq2KPFVbwC1msDnRbP9fOhibAC71ufdij6gsra-s8?width=750&height=750", email: "rachel.casey@jrf.org.uk", x: "https://x.com/Rachel_Casey85" },
    { name: "Tilly Cook", role: "Senior Policy Adviser", img: FR+"eyJvYXV0aCI6eyJjbGllbnRfaWQiOiJjbGllbnQtbXpxYnlrbHNmdGR6aDd1dyJ9LCJwYXRoIjoiam9zZXBoLXJvd250cmVlLWZvdW5kYXRpb25cL2ZpbGVcL3JScEVFNUI1QmVpQU5wSHBveURjLmpwZyJ9:joseph-rowntree-foundation:OA_jHqFu10ctHSqtQRlOVUq95fDkhTjoUMuh_UBX5-o?width=750&height=750", email: "tilly.cook@jrf.org.uk" },
    { name: "Nadim Hamdan", role: "Assistant Economist", img: "https://media.ffycdn.net/eu/joseph-rowntree-foundation/fyK3QE2knjTzm44YxGcC.png?width=750&height=750", email: "nadim.hamdan@jrf.org.uk", linkedin: "https://www.linkedin.com/in/nadim-hamdan/", bluesky: "https://bsky.app/profile/nadim-hamdan.bsky.social" },
    { name: "Yasmin Ibison", role: "Senior Policy Adviser", img: FR+"eyJvYXV0aCI6eyJjbGllbnRfaWQiOiJjbGllbnQtbXpxYnlrbHNmdGR6aDd1dyJ9LCJwYXRoIjoiam9zZXBoLXJvd250cmVlLWZvdW5kYXRpb25cL2ZpbGVcLzZqOVFuR0ZZaUg2R2FQc0pBSld6LmpwZyJ9:joseph-rowntree-foundation:X2INdMF5ByYHUTiWUCJiCsSzKDJdvYKKZ-8RoLGP6dE?width=750&height=750", email: "yasmin.ibison@jrf.org.uk", linkedin: "https://www.linkedin.com/in/yasminibison/", x: "https://x.com/yasminibison", bluesky: "https://bsky.app/profile/yasminibison.bsky.social" },
    { name: "Iain Porter", role: "Senior Policy Adviser", img: FR+"eyJvYXV0aCI6eyJjbGllbnRfaWQiOiJjbGllbnQtbXpxYnlrbHNmdGR6aDd1dyJ9LCJwYXRoIjoiam9zZXBoLXJvd250cmVlLWZvdW5kYXRpb25cL2ZpbGVcL3JneDI2c0Z1Yk5hNmdOQlZpNVNWLmpwZyJ9:joseph-rowntree-foundation:uv_iZTSKkHCGg-3016rCPo9CyKtDTuLL4hDAAoljObo?width=750&height=750", email: "iain.porter@jrf.org.uk", linkedin: "https://www.linkedin.com/in/iainkporter/", x: "https://x.com/IainKPorter", bluesky: "https://bsky.app/profile/iainkporter.bsky.social" },
    { name: "Isobel Richardson", role: "Policy Assistant", img: "https://media.ffycdn.net/eu/joseph-rowntree-foundation/3GDr2eE6D8tPgDzqa7E4.jpg?width=750&height=750", email: "isobel.richardson@jrf.org.uk" },
    { name: "Katie Schmuecker", role: "Principal Policy Adviser", img: FR+"eyJvYXV0aCI6eyJjbGllbnRfaWQiOiJjbGllbnQtbXpxYnlrbHNmdGR6aDd1dyJ9LCJwYXRoIjoiam9zZXBoLXJvd250cmVlLWZvdW5kYXRpb25cL2ZpbGVcL25icFBabzlhY1VZVlU4dGhQR0NKLmpwZyJ9:joseph-rowntree-foundation:FB2edCGXiJz92sjV1aNVmGbtqCcjW5ofa_HE4MzE_4w?width=750&height=750", email: "katie.schmuecker@jrf.org.uk", linkedin: "https://www.linkedin.com/in/katie-schmuecker-72912434/", x: "https://x.com/KatieSchmuecker" },
    { name: "Louise Woodruff", role: "Senior Policy Adviser", img: FR+"eyJvYXV0aCI6eyJjbGllbnRfaWQiOiJjbGllbnQtbXpxYnlrbHNmdGR6aDd1dyJ9LCJwYXRoIjoiam9zZXBoLXJvd250cmVlLWZvdW5kYXRpb25cL2ZpbGVcLzR5U2J1TkIzcDhBZkJuUDJLNkh4LmpwZyJ9:joseph-rowntree-foundation:OqGTJxwLfiP2pIbgIWxWd0EUHo7SiGzr7zEV7OQbZR8?width=750&height=750", email: "louise.woodruff@jrf.org.uk", linkedin: "https://www.linkedin.com/in/louise-woodruff-0253a7143/", x: "https://x.com/jrflouise" },
    { name: "Rosie Worsdale", role: "Senior Policy Adviser", img: FR+"eyJvYXV0aCI6eyJjbGllbnRfaWQiOiJjbGllbnQtbXpxYnlrbHNmdGR6aDd1dyJ9LCJwYXRoIjoiam9zZXBoLXJvd250cmVlLWZvdW5kYXRpb25cL2ZpbGVcL2JVTkp4MUdGSGl5eUxta3g2VnRtLnBuZyJ9:joseph-rowntree-foundation:KBbsjTXkOAo8-TJk_w7jq4ZtjZjDcZCQwYD4Z5gOdK8?width=750&height=750", email: "rosie.worsdale@jrf.org.uk" },
  ];

  const insightAndAnalysis = [
    { name: "Taha Bokhari", role: "Lead Analyst", img: FR+"eyJvYXV0aCI6eyJjbGllbnRfaWQiOiJjbGllbnQtbXpxYnlrbHNmdGR6aDd1dyJ9LCJwYXRoIjoiam9zZXBoLXJvd250cmVlLWZvdW5kYXRpb25cL2ZpbGVcL1NmeFFiRzQ0a1JvQnZTck56bUczLmpwZyJ9:joseph-rowntree-foundation:95qfJI8k9AJ2ZlS8D9Rj-z_B3DsfTKFwU98bidBc7Nw?width=750&height=750", email: "taha.bokhari@jrf.org.uk", linkedin: "https://www.linkedin.com/in/taha-bokhari-b31494a2/" },
    { name: "Joseph Elliott", role: "Lead Analyst", img: FR+"eyJvYXV0aCI6eyJjbGllbnRfaWQiOiJjbGllbnQtbXpxYnlrbHNmdGR6aDd1dyJ9LCJwYXRoIjoiam9zZXBoLXJvd250cmVlLWZvdW5kYXRpb25cL2ZpbGVcL05VUjZRSFltbVpObzdia3hTU0x4LmpwZyJ9:joseph-rowntree-foundation:F6zwI3CrpYzyGK6_YC8Ir7j6CauJ5q5Gn_Qh_YA-yXY?width=750&height=750", email: "joseph.elliott@jrf.org.uk", linkedin: "https://www.linkedin.com/in/joseph-e-9a76908b/", x: "http://x.com/j_elliott94" },
    { name: "Scot Hunter", role: "Analyst", img: FR+"eyJvYXV0aCI6eyJjbGllbnRfaWQiOiJjbGllbnQtbXpxYnlrbHNmdGR6aDd1dyJ9LCJwYXRoIjoiam9zZXBoLXJvd250cmVlLWZvdW5kYXRpb25cL2ZpbGVcL1lBNnBXTGY3TkVVc0VMaGt4UUhhLnBuZyJ9:joseph-rowntree-foundation:DYWG4lgYhUpc32E-ZcgY7iEpYqT912YBx_UsnRvsGzU?width=750&height=750", email: "scot.hunter@jrf.org.uk", linkedin: "https://www.linkedin.com/in/scot-hunter-51a43119b/", bluesky: "https://bsky.app/profile/scothunter.bsky.social" },
    { name: "Francisca Ladouch", role: "Analyst", img: FR+"eyJvYXV0aCI6eyJjbGllbnRfaWQiOiJjbGllbnQtbXpxYnlrbHNmdGR6aDd1dyJ9LCJwYXRoIjoiam9zZXBoLXJvd250cmVlLWZvdW5kYXRpb25cL2ZpbGVcL2VMSmt6QnZvM3VZalpmVzZQVWdQLmpwZyJ9:joseph-rowntree-foundation:1o5DeLDi-XbXl0DSSZVvhAo_vIllT4RJOvR_Bzt5we8?width=750&height=750", email: "francisca.ladouch@jrf.org.uk", linkedin: "https://www.linkedin.com/in/franciscaladouch" },
    { name: "Peter Matejic", role: "Chief Analyst", img: FR+"eyJvYXV0aCI6eyJjbGllbnRfaWQiOiJjbGllbnQtbXpxYnlrbHNmdGR6aDd1dyJ9LCJwYXRoIjoiam9zZXBoLXJvd250cmVlLWZvdW5kYXRpb25cL2ZpbGVcL0JnakpiNDN0bnp6SEQ4VUcydWlpLmpwZyJ9:joseph-rowntree-foundation:GY6fKPiDB_IBkMjgWBM2FDvFRIxiCaYJm9HnURfitEk?width=750&height=750", email: "peter.matejic@jrf.org.uk", x: "http://x.com/StatsPeter" },
    { name: "Becky Milne", role: "Lead Analyst", img: FR+"eyJvYXV0aCI6eyJjbGllbnRfaWQiOiJjbGllbnQtbXpxYnlrbHNmdGR6aDd1dyJ9LCJwYXRoIjoiam9zZXBoLXJvd250cmVlLWZvdW5kYXRpb25cL2ZpbGVcL1dlUnFmejNVbjUydGpGdEw5aDJpLmpwZyJ9:joseph-rowntree-foundation:5pprb1fk-B4em43FOaXvK6W1qKOxcVUwX6brySs2fzY?width=750&height=750", email: "becky.milne@jrf.org.uk" },
    { name: "Sam Tims", role: "Lead Analyst", img: FR+"eyJvYXV0aCI6eyJjbGllbnRfaWQiOiJjbGllbnQtbXpxYnlrbHNmdGR6aDd1dyJ9LCJwYXRoIjoiam9zZXBoLXJvd250cmVlLWZvdW5kYXRpb25cL2ZpbGVcL0J2SGdoYU1RNkFwMzJtVWcxNzJqLmpwZyJ9:joseph-rowntree-foundation:pvWuDQYFY9U0fZyLWLLGNTvJaqcL_u5W33djQAoPMOY?width=750&height=750", email: "sam.tims@jrf.org.uk" },
    { name: "Andrew Wenham", role: "Senior Analyst", img: FR+"eyJvYXV0aCI6eyJjbGllbnRfaWQiOiJjbGllbnQtbXpxYnlrbHNmdGR6aDd1dyJ9LCJwYXRoIjoiam9zZXBoLXJvd250cmVlLWZvdW5kYXRpb25cL2ZpbGVcL1JvVEZ4YWg5Y1JVRXRVbndIeTVHLmpwZyJ9:joseph-rowntree-foundation:lGelXkRY1Ohn0LlNIl1FD0AOm3sn4C_dvbG29v25q5o?width=750&height=750", email: "andrew.wenham@jrf.org.uk", x: "https://x.com/AnalysisAndrew" },
  ];

  const insightInfrastructure = [
    { name: "Aleks Collingwood", role: "Partnership Insight Manager", img: FR+"eyJvYXV0aCI6eyJjbGllbnRfaWQiOiJjbGllbnQtbXpxYnlrbHNmdGR6aDd1dyJ9LCJwYXRoIjoiam9zZXBoLXJvd250cmVlLWZvdW5kYXRpb25cL2ZpbGVcL3R1VkFlSGM0M1ozcVRGZXJyVVVVLmpwZyJ9:joseph-rowntree-foundation:r-4lGyQSxIguG5TsNZGY-EXXbMYvTR-0Lmy8HtXFzTU?width=750&height=750", email: "aleks.collingwood@jrf.org.uk", x: "https://x.com/jrfAleks" },
    { name: "Caitlin Loftus", role: "Senior Quantitative Researcher", img: "https://media.ffycdn.net/eu/joseph-rowntree-foundation/HNXVDnVjiJWMbJj43JoV.png?width=750&height=750", email: "caitlin.loftus@jrf.org.uk", linkedin: "https://www.linkedin.com/in/caitlin-loftus/" },
    { name: "Alex Luckett", role: "Experiential Insight Research Officer", img: "https://media.ffycdn.net/eu/joseph-rowntree-foundation/3Qroc9zQm3AoynA1AgqF.png?width=750&height=750", email: "alex.luckett@jrf.org.uk", linkedin: "http://www.linkedin.com/in/alex-luckett" },
    { name: "Kirsty O'Rourke", role: "Engagement Lead", img: FR+"eyJvYXV0aCI6eyJjbGllbnRfaWQiOiJjbGllbnQtbXpxYnlrbHNmdGR6aDd1dyJ9LCJwYXRoIjoiam9zZXBoLXJvd250cmVlLWZvdW5kYXRpb25cL2ZpbGVcL0Y5a2pvdm5SUHpKVUxWNFZCSjZILmpwZyJ9:joseph-rowntree-foundation:JELf5cS9eCxuGK5TKX5JJt2X7S0Devxh3qSTD7sSvTc?width=750&height=750", email: "kirsty.orourke@jrf.org.uk", linkedin: "https://www.linkedin.com/in/kirsty-o-rourke-965b10207/" },
    { name: "Rosario Piazza", role: "Chief Insight Architect", img: FR+"eyJvYXV0aCI6eyJjbGllbnRfaWQiOiJjbGllbnQtbXpxYnlrbHNmdGR6aDd1dyJ9LCJwYXRoIjoiam9zZXBoLXJvd250cmVlLWZvdW5kYXRpb25cL2ZpbGVcL2dBVVJMdGFNWUozVkdLZDVzRFRGLmpwZyJ9:joseph-rowntree-foundation:KI3dF_kfMkLz--qVNEe9lm6g3OzLMnIyS6gyT2Q8zpo?width=750&height=750", email: "rosario.piazza@jrf.org.uk", linkedin: "https://www.linkedin.com/in/rosario-piazza-234a5848/", x: "https://x.com/rosariop_jrf" },
    { name: "Rivka Smith", role: "Experiential Insight Lead Researcher", img: "https://media.ffycdn.net/eu/joseph-rowntree-foundation/XC6Rfvup2xxuYCYi4AZ5.png?width=750&height=750", email: "rivka.smith@jrf.org.uk", linkedin: "http://www.linkedin.com/in/dr-rivka-smith-38812b277" },
    { name: "Emma Wincup", role: "Qualitative Insight Manager", img: FR+"eyJvYXV0aCI6eyJjbGllbnRfaWQiOiJjbGllbnQtbXpxYnlrbHNmdGR6aDd1dyJ9LCJwYXRoIjoiam9zZXBoLXJvd250cmVlLWZvdW5kYXRpb25cL2ZpbGVcL2tyMTY0Z2U3cUVmWEI2Sm10Y2Z1LmpwZyJ9:joseph-rowntree-foundation:1iOWHr6pxJK7J1eTMfozYRkqExK9Q5_1nSU_M4QNPu4?width=750&height=750", email: "emma.wincup@jrf.org.uk", linkedin: "http://www.linkedin.com/in/DrEmmaWincupJRF", x: "http://x.com/DrEWincup" },
  ];

  const communicationsAndPublicE = [
    { name: "Harriet Anderson", role: "Head of Media", img: FR+"eyJvYXV0aCI6eyJjbGllbnRfaWQiOiJjbGllbnQtbXpxYnlrbHNmdGR6aDd1dyJ9LCJwYXRoIjoiam9zZXBoLXJvd250cmVlLWZvdW5kYXRpb25cL2ZpbGVcL1pIeFVRaE5mUGZGQ2ZVQjNGYmhULmpwZyJ9:joseph-rowntree-foundation:YDmm9aL-qf9e1D-C9lBhuOtjR7D8PNwo4WpUDdBH-0s?width=750&height=750", email: "harriet.anderson@jrf.org.uk" },
    { name: "Sophie Anderson", role: "Public Affairs Officer", img: "https://media.ffycdn.net/eu/joseph-rowntree-foundation/MAtsbKy391UYcRdFPrc5.png?width=750&height=750", email: "sophie.anderson@jrf.org.uk", linkedin: "https://www.linkedin.com/in/sophie-anderson-87860727a/" },
    { name: "Erika Becerra", role: "Creative Designer", img: FR+"eyJvYXV0aCI6eyJjbGllbnRfaWQiOiJjbGllbnQtbXpxYnlrbHNmdGR6aDd1dyJ9LCJwYXRoIjoiam9zZXBoLXJvd250cmVlLWZvdW5kYXRpb25cL2ZpbGVcL0hkaHN0N2JlUWVwOTduNlJKUEJQLmpwZyJ9:joseph-rowntree-foundation:dxemepfgx8eEFHkLDe_Uc_m-FN-QsvKjLDd-o-pba7o?width=750&height=750", email: "erika.becerra@jrf.org.uk" },
    { name: "Nathan Blackwood", role: "Social Media Manager", img: FR+"eyJvYXV0aCI6eyJjbGllbnRfaWQiOiJjbGllbnQtbXpxYnlrbHNmdGR6aDd1dyJ9LCJwYXRoIjoiam9zZXBoLXJvd250cmVlLWZvdW5kYXRpb25cL2ZpbGVcL2N0RDJ2cXpXQnVINHhKOFVZZUo2LmpwZyJ9:joseph-rowntree-foundation:CwC0BzPhYFejSmX8B_KtKS197SlQbeu2EOWSmkmaIpM?width=750&height=750", email: "nathan.blackwood@jrf.org.uk", linkedin: "https://www.linkedin.com/in/nathan-blackwood-b26493201/", x: "https://x.com/nathanbjourno" },
    { name: "Megan Davies", role: "Media Manager", img: "https://media.ffycdn.net/eu/joseph-rowntree-foundation/VFbjHUaXTQuVXxz2a5Wx.png?width=750&height=750", email: "megan.davies@jrf.org.uk" },
    { name: "Joe Farnworth", role: "Senior Public Affairs Officer", img: FR+"eyJvYXV0aCI6eyJjbGllbnRfaWQiOiJjbGllbnQtbXpxYnlrbHNmdGR6aDd1dyJ9LCJwYXRoIjoiam9zZXBoLXJvd250cmVlLWZvdW5kYXRpb25cL2ZpbGVcL3VqeXRUd2NCTlZCbTN2YVJNRGhTLmpwZyJ9:joseph-rowntree-foundation:IscKLhsbARK9V9VbBCSKwZ3AtSbAc3acSq1h2_qkeyQ?width=750&height=750", email: "joe.farnworth@jrf.org.uk", linkedin: "https://www.linkedin.com/in/joemfm/", x: "https://x.com/joemfm" },
    { name: "Martyn Hall", role: "Head of Design and Production", img: FR+"eyJvYXV0aCI6eyJjbGllbnRfaWQiOiJjbGllbnQtbXpxYnlrbHNmdGR6aDd1dyJ9LCJwYXRoIjoiam9zZXBoLXJvd250cmVlLWZvdW5kYXRpb25cL2ZpbGVcL0ZVeFYzNFpxTmtrSHJDNzZTbkFSLmpwZyJ9:joseph-rowntree-foundation:VgQZIXXbCuVrSH80vOATUeCxTSBk4IND9sW1DyvtGJk?width=750&height=750", email: "martyn.hall@jrf.org.uk" },
    { name: "Holly Leese", role: "Creative Designer", img: "https://media.ffycdn.net/eu/joseph-rowntree-foundation/pPiNCVtGaSNu6dw1jusD.jpg?width=750&height=750", email: "holly.leese@jrf.org.uk" },
    { name: "Malou Lindholm", role: "Head of Stakeholder Engagement", img: FR+"eyJvYXV0aCI6eyJjbGllbnRfaWQiOiJjbGllbnQtbXpxYnlrbHNmdGR6aDd1dyJ9LCJwYXRoIjoiam9zZXBoLXJvd250cmVlLWZvdW5kYXRpb25cL2ZpbGVcL0daQzlUaFhKU2JReWlTVXBLMjFCLmpwZyJ9:joseph-rowntree-foundation:oDbtUJod9NKuVFM2pTf6rrWJf6JA50o5fTaUb_ZNRhU?width=750&height=750", email: "malou.lindholm@jrf.org.uk", linkedin: "https://www.linkedin.com/in/maloulindholm/" },
    { name: "Liz McCulloch", role: "Senior Campaigns and Public Affairs Manager", img: FR+"eyJvYXV0aCI6eyJjbGllbnRfaWQiOiJjbGllbnQtbXpxYnlrbHNmdGR6aDd1dyJ9LCJwYXRoIjoiam9zZXBoLXJvd250cmVlLWZvdW5kYXRpb25cL2ZpbGVcL21VSzE4aXJ1cXZzeXB2TWthZ3JtLnBuZyJ9:joseph-rowntree-foundation:ex9MbBLMsKauPbyCsv7xRgZ1qA5_jJimnd1kInHdJy8?width=750&height=750", email: "liz.mcculloch@jrf.org.uk" },
    { name: "Nina Mearns", role: "Content Delivery Coordinator", img: "https://media.ffycdn.net/eu/joseph-rowntree-foundation/myG1n5jQ5V3rL9e5Xoh3.jpg?width=750&height=750", email: "nina.mearns@jrf.org.uk" },
    { name: "Maddy Moore", role: "Senior Campaigns and Public Affairs Manager", img: FR+"eyJvYXV0aCI6eyJjbGllbnRfaWQiOiJjbGllbnQtbXpxYnlrbHNmdGR6aDd1dyJ9LCJwYXRoIjoiam9zZXBoLXJvd250cmVlLWZvdW5kYXRpb25cL2ZpbGVcL0N2U1NEQVB5RktYYU5zbUJKd2o1LmpwZyJ9:joseph-rowntree-foundation:KUhAn1xkCwV05PLDWEgqIJ7b1zuLtkguseW2dZmKQEQ?width=750&height=750", email: "maddy.moore@jrf.org.uk", linkedin: "http://linkedin.com/in/MaddyMMoore" },
    { name: "Husna Mortuza", role: "Associate Director for Public Engagement", img: FR+"eyJvYXV0aCI6eyJjbGllbnRfaWQiOiJjbGllbnQtbXpxYnlrbHNmdGR6aDd1dyJ9LCJwYXRoIjoiam9zZXBoLXJvd250cmVlLWZvdW5kYXRpb25cL2ZpbGVcL2NNM1VXdHJmMVczZ0hQUm1aWEs3LmpwZyJ9:joseph-rowntree-foundation:c1-8B-U74T-t2YDcH3e-ILyBaBt-FXjhjIB0wVcOAZM?width=750&height=750", email: "husna.mortuza@jrf.org.uk" },
    { name: "Daisy Sands", role: "Head of Policy Campaigns and Impact", img: FR+"eyJvYXV0aCI6eyJjbGllbnRfaWQiOiJjbGllbnQtbXpxYnlrbHNmdGR6aDd1dyJ9LCJwYXRoIjoiam9zZXBoLXJvd250cmVlLWZvdW5kYXRpb25cL2ZpbGVcL0t6U2toTXBadGlmb0NCaUFEd2l0LmpwZyJ9:joseph-rowntree-foundation:TBoGvI_49ApUS8M_QPSeqf9nIelPuHpbU_Uc_Wn3KLQ?width=750&height=750", email: "daisy.sands@jrf.org.uk", linkedin: "https://www.linkedin.com/in/daisy-sands-0b78b11/", x: "https://x.com/sandsdaisy" },
    { name: "Thea Shahrokh", role: "Learning and Impact Lead (Movement Effectiveness)", img: "https://media.ffycdn.net/eu/joseph-rowntree-foundation/zd7h3hiTjafgc5jWuzUq.jpg?width=750&height=750", email: "thea.shahrokh@jrf.org.uk" },
    { name: "Naomi Southwell", role: "Media Manager", img: FR+"eyJvYXV0aCI6eyJjbGllbnRfaWQiOiJjbGllbnQtbXpxYnlrbHNmdGR6aDd1dyJ9LCJwYXRoIjoiam9zZXBoLXJvd250cmVlLWZvdW5kYXRpb25cL2ZpbGVcL1FiUEVpcVFvUGVEUXp6ZkpCallkLmpwZyJ9:joseph-rowntree-foundation:xskJvU7fPqI2jLXLNxNty7aVsgdevyl_VxZsrN4yH3w?width=750&height=750", email: "naomi.southwell@jrf.org.uk" },
    { name: "Kristýna Šteflová", role: "Senior Campaigns Officer", img: FR+"eyJvYXV0aCI6eyJjbGllbnRfaWQiOiJjbGllbnQtbXpxYnlrbHNmdGR6aDd1dyJ9LCJwYXRoIjoiam9zZXBoLXJvd250cmVlLWZvdW5kYXRpb25cL2ZpbGVcL2FLQ1hOS3NrS2EzZWViejdxN1VjLmpwZyJ9:joseph-rowntree-foundation:xUW52EalURoOiiRTBc2CyYseuzlITHLKTBzJYdyPoOM?width=750&height=750", email: "kristyna.steflova@jrf.org.uk", linkedin: "https://www.linkedin.com/in/steflova/" },
    { name: "Natalie Tate", role: "Project Lead for Talking about Homes", img: FR+"eyJvYXV0aCI6eyJjbGllbnRfaWQiOiJjbGllbnQtbXpxYnlrbHNmdGR6aDd1dyJ9LCJwYXRoIjoiam9zZXBoLXJvd250cmVlLWZvdW5kYXRpb25cL2ZpbGVcL2lacU1Xbzg5YnNacDFacmtucWN1LmpwZyJ9:joseph-rowntree-foundation:U1sNhpE0eIPVRLFnExsjOaFqdFXu4kbXEFYlQZLFqTU?width=750&height=750", email: "natalie.tate@jrf.org.uk", linkedin: "https://www.linkedin.com/in/natalie-tate-58a0071ba" },
    { name: "Cassandra Walker", role: "Programme Lead (Movement Effectiveness)", img: FR+"eyJvYXV0aCI6eyJjbGllbnRfaWQiOiJjbGllbnQtbXpxYnlrbHNmdGR6aDd1dyJ9LCJwYXRoIjoiam9zZXBoLXJvd250cmVlLWZvdW5kYXRpb25cL2ZpbGVcL1BWMjhZNWVRWk1OczN0MkpLb1Y4LnBuZyJ9:joseph-rowntree-foundation:r6AkwsFXnGYwFwwlNKX51_0ASzmGbvuHS0sZymHz4Ps?width=750&height=750", email: "cassandra.walker@jrf.org.uk" },
    { name: "Josh Westerling", role: "Senior Campaigns and Public Affairs Manager", img: "https://media.ffycdn.net/eu/joseph-rowntree-foundation/JZpBobocxQwggtBBcYuf.png?width=750&height=750", email: "josh.westerling@jrf.org.uk" },
  ];

  const equityDiversityAndInclus = [
    { name: "Sofiya Gatens", role: "Head of Equity, Diversity and Inclusion", img: FR+"eyJvYXV0aCI6eyJjbGllbnRfaWQiOiJjbGllbnQtbXpxYnlrbHNmdGR6aDd1dyJ9LCJwYXRoIjoiam9zZXBoLXJvd250cmVlLWZvdW5kYXRpb25cL2ZpbGVcLzR1dUhCbWNGdFFCUFdGNWRKQ0hTLmpwZyJ9:joseph-rowntree-foundation:Z9oHOAORqn-kkPVatGcyxhuB9CbJkAC-45P57tkcs8Y?width=750&height=750", email: "sofiya.gatens@jrf.org.uk", linkedin: "http://www.linkedin.com/in/sofiya-gatens" },
    { name: "Melissa Polkey", role: "Equity, Diversity and Inclusion Officer", img: FR+"eyJvYXV0aCI6eyJjbGllbnRfaWQiOiJjbGllbnQtbXpxYnlrbHNmdGR6aDd1dyJ9LCJwYXRoIjoiam9zZXBoLXJvd250cmVlLWZvdW5kYXRpb25cL2ZpbGVcL0tlSGE2aUM4NWtmeUdDMWFOdThKLmpwZyJ9:joseph-rowntree-foundation:S-xvIh7L2dxPE3EUw29gzValSpbFnrdqlFHO_s0hWAE?width=750&height=750", email: "melissa.polkey@jrf.org.uk", linkedin: "https://www.linkedin.com/in/melissapolkey/" },
  ];

  const emergingFutures = [
    { name: "Victoria Hughes", role: "Programme Lead (Emerging Futures)", img: FR+"eyJvYXV0aCI6eyJjbGllbnRfaWQiOiJjbGllbnQtbXpxYnlrbHNmdGR6aDd1dyJ9LCJwYXRoIjoiam9zZXBoLXJvd250cmVlLWZvdW5kYXRpb25cL2ZpbGVcL0QxU3NSU0ptYWo0a3BBNEJvNXR2LmpwZyJ9:joseph-rowntree-foundation:HuPiviDeBfggfSy82JzsKRi87EaE-iG0DbYJGD_y9hg?width=750&height=750", email: "victoria.hughes@jrf.org.uk", x: "http://x.com/VictoriaHughe5" },
    { name: "Liv Jackson", role: "Programme and Partnerships Lead (Emerging Futures)", img: FR+"eyJvYXV0aCI6eyJjbGllbnRfaWQiOiJjbGllbnQtbXpxYnlrbHNmdGR6aDd1dyJ9LCJwYXRoIjoiam9zZXBoLXJvd250cmVlLWZvdW5kYXRpb25cL2ZpbGVcLzZBS2oxZmM3WXhvTTd5MUdWVVl0LmpwZyJ9:joseph-rowntree-foundation:Sy0TTOR0YoAKuk-fm_ZChspZg-7xddIZA4xi35T1zaM?width=750&height=750", email: "liv.jackson@jrf.org.uk" },
    { name: "Kate McLaven", role: "York Local Lead (Emerging Futures)", img: FR+"eyJvYXV0aCI6eyJjbGllbnRfaWQiOiJjbGllbnQtbXpxYnlrbHNmdGR6aDd1dyJ9LCJwYXRoIjoiam9zZXBoLXJvd250cmVlLWZvdW5kYXRpb25cL2ZpbGVcLzZZbVpnQUw3MWt4bkFjaHg3RzhjLmpwZyJ9:joseph-rowntree-foundation:fBobal3AtHByKj7UaEwWSlTN_aUIq41jPujJzXmp4xk?width=750&height=750", email: "kate.mclaven@jrf.org.uk", linkedin: "https://www.linkedin.com/in/kate-mclaven-915280149/" },
    { name: "Emma Shaw", role: "Transforming Wealth Lead (Emerging Futures)", img: FR+"eyJvYXV0aCI6eyJjbGllbnRfaWQiOiJjbGllbnQtbXpxYnlrbHNmdGR6aDd1dyJ9LCJwYXRoIjoiam9zZXBoLXJvd250cmVlLWZvdW5kYXRpb25cL2ZpbGVcL3h3U1F2M0xyQTdONFlIZFJ1ZUo5LmpwZyJ9:joseph-rowntree-foundation:JYPMusNr5LdfizT5sTb7fOovfA0cJMtse6VNbdtyv9E?width=750&height=750", email: "emma.shaw@jrf.org.uk", linkedin: "https://www.linkedin.com/in/emmakshaw/" },
  ];

  const scotlandWalesAndNorthern = [
    { name: "Chris Birt", role: "Associate Director for Scotland, Wales and Northern Ireland", img: FR+"eyJvYXV0aCI6eyJjbGllbnRfaWQiOiJjbGllbnQtbXpxYnlrbHNmdGR6aDd1dyJ9LCJwYXRoIjoiam9zZXBoLXJvd250cmVlLWZvdW5kYXRpb25cL2ZpbGVcL05CdW51WW1VUEY5emZRaXVSU251LmpwZyJ9:joseph-rowntree-foundation:qWhz6mpB-bdHGbbR0sjvfF80y1VXSld3YZg_hq4KcE8?width=750&height=750", email: "chris.birt@jrf.org.uk", linkedin: "https://www.linkedin.com/in/chris-b-401715114/", x: "https://x.com/cdbirt" },
    { name: "Carla Cebula", role: "Lead Analyst (Scotland)", img: FR+"eyJvYXV0aCI6eyJjbGllbnRfaWQiOiJjbGllbnQtbXpxYnlrbHNmdGR6aDd1dyJ9LCJwYXRoIjoiam9zZXBoLXJvd250cmVlLWZvdW5kYXRpb25cL2ZpbGVcL1dNcUhpQnFKUW9Fd2ZqNFBxdGhDLmpwZyJ9:joseph-rowntree-foundation:v5IEbUB63roLRvG218J7DPpy5u8PkAfCGnTs82sl_yI?width=750&height=750", linkedin: "https://www.linkedin.com/in/carla-cebula-b89a5188/", x: "https://x.com/CarlaOnion" },
    { name: "Christine Ellison", role: "Senior Analyst (Northern Ireland)", img: FR+"eyJvYXV0aCI6eyJjbGllbnRfaWQiOiJjbGllbnQtbXpxYnlrbHNmdGR6aDd1dyJ9LCJwYXRoIjoiam9zZXBoLXJvd250cmVlLWZvdW5kYXRpb25cL2ZpbGVcL05KQlBqcXMxZGlXdjFmTkJzbzV5LmpwZyJ9:joseph-rowntree-foundation:ScKQPLV1Tkl3aBYxVFrlXDwf75EWf4QqvHqR5aqd-Nc?width=750&height=750", email: "christine.ellison@jrf.org.uk" },
    { name: "Jack Evans", role: "Senior Policy Adviser (Scotland)", img: FR+"eyJvYXV0aCI6eyJjbGllbnRfaWQiOiJjbGllbnQtbXpxYnlrbHNmdGR6aDd1dyJ9LCJwYXRoIjoiam9zZXBoLXJvd250cmVlLWZvdW5kYXRpb25cL2ZpbGVcL1BuNVlWMUtxdGpMeGFDQlpjdGsxLmpwZyJ9:joseph-rowntree-foundation:e6-SFVLX9qkH2PXgTwcOlRKO1YAdxRN4cHs8fubRa5Q?width=750&height=750", email: "jack.evans@jrf.org.uk", x: "https://x.com/jackdmevans" },
    { name: "Charlotte Gorman", role: "Senior Policy Adviser (Scotland)", img: "https://media.ffycdn.net/eu/joseph-rowntree-foundation/o3AVPbqNemiX4uq5YooS.jpg?width=750&height=750", email: "charlotte.gorman@jrf.org.uk", linkedin: "https://www.linkedin.com/in/charlotte-gorman-885385379/?skipRedirect=true" },
    { name: "Annie McKenzie", role: "Policy and Research Adviser (Scotland)", img: FR+"eyJvYXV0aCI6eyJjbGllbnRfaWQiOiJjbGllbnQtbXpxYnlrbHNmdGR6aDd1dyJ9LCJwYXRoIjoiam9zZXBoLXJvd250cmVlLWZvdW5kYXRpb25cL2ZpbGVcL0dLV3ZkNnhpelJvRVVHUTdzU2pMLmpwZyJ9:joseph-rowntree-foundation:fZ07at3ZaMLRmki_7wqlrcQckjEQimgOtwahlMwTHWQ?width=750&height=750", email: "annie.mckenzie@jrf.org.uk" },
    { name: "Sheena McMullen", role: "Senior Policy Adviser (Northern Ireland)", img: FR+"eyJvYXV0aCI6eyJjbGllbnRfaWQiOiJjbGllbnQtbXpxYnlrbHNmdGR6aDd1dyJ9LCJwYXRoIjoiam9zZXBoLXJvd250cmVlLWZvdW5kYXRpb25cL2ZpbGVcL0E1WXBSeDFxSkFpN3lKWlkxa2h1LmpwZyJ9:joseph-rowntree-foundation:KcnL1xYB6dSMiyllaXvkUfot4HQLj0q2_gBra3T00MA?width=750&height=750", email: "sheena.mcmullen@jrf.org.uk", x: "https://x.com/mcmullen_sheena", bluesky: "https://bsky.app/profile/sheenamcmullen.bsky.social" },
    { name: "Ursula O’Hare", role: "Head of Northern Ireland", img: FR+"eyJvYXV0aCI6eyJjbGllbnRfaWQiOiJjbGllbnQtbXpxYnlrbHNmdGR6aDd1dyJ9LCJwYXRoIjoiam9zZXBoLXJvd250cmVlLWZvdW5kYXRpb25cL2ZpbGVcL3VNTEVpQjdZVWVhZHpWZXd3djJBLmpwZyJ9:joseph-rowntree-foundation:fLVUzQBiT2FYDJ9KO5BMRrj3VmUj50CjvxD4B1WLKtA?width=750&height=750", email: "ursula.ohare@jrf.org.uk" },
  ];

  const socialInvestment = [
    { name: "Harmony Chan", role: "Social Investment Portfolio Manager", img: FR+"eyJvYXV0aCI6eyJjbGllbnRfaWQiOiJjbGllbnQtbXpxYnlrbHNmdGR6aDd1dyJ9LCJwYXRoIjoiam9zZXBoLXJvd250cmVlLWZvdW5kYXRpb25cL2ZpbGVcL2hwU0pxTnpxdXJHMnpIRTNEcmJXLmpwZyJ9:joseph-rowntree-foundation:Y2thVUSpzeiFKT0t3yaVx0Sn7GRTETg2_nV6cpiZS0o?width=750&height=750", email: "harmony.chan@jrf.org.uk", linkedin: "https://www.linkedin.com/in/harmonyc/" },
    { name: "Jessica Harneyford", role: "Social Investment Portfolio Manager", img: FR+"eyJvYXV0aCI6eyJjbGllbnRfaWQiOiJjbGllbnQtbXpxYnlrbHNmdGR6aDd1dyJ9LCJwYXRoIjoiam9zZXBoLXJvd250cmVlLWZvdW5kYXRpb25cL2ZpbGVcL1h3bkRtV0NLRTRWZU1RSGRNQnZwLmpwZyJ9:joseph-rowntree-foundation:r3_gnSiVzNYhDRZ5nTXa8mDGJzKFcARJMEPuQdZJAuo?width=750&height=750", email: "jessica.harneyford@jrf.org.uk", linkedin: "https://www.linkedin.com/in/jessicaharneyford/" },
    { name: "Denise Holle", role: "Head of Social Investment", img: FR+"eyJvYXV0aCI6eyJjbGllbnRfaWQiOiJjbGllbnQtbXpxYnlrbHNmdGR6aDd1dyJ9LCJwYXRoIjoiam9zZXBoLXJvd250cmVlLWZvdW5kYXRpb25cL2ZpbGVcLzdvejlhUXVzTHdBQ3ZiUENZNXhTLmpwZyJ9:joseph-rowntree-foundation:me0ahHcD93MtC8pIPs0hK1OUbMl1Oi362W-5UPwdfqE?width=750&height=750", email: "denise.holle@jrf.org.uk" },
    { name: "Dominika Kubala-Martin", role: "Portfolio Operations Manager", img: "https://media.ffycdn.net/eu/joseph-rowntree-foundation/X9YyXBi5csJNVLQ75MEo.jpg?width=750&height=750", email: "dominika.kubalamartin@jrf.org.uk", linkedin: "https://www.linkedin.com/in/dkubalamartin/" },
    { name: "Lena Talib", role: "Social Investment Portfolio Manager", img: FR+"eyJvYXV0aCI6eyJjbGllbnRfaWQiOiJjbGllbnQtbXpxYnlrbHNmdGR6aDd1dyJ9LCJwYXRoIjoiam9zZXBoLXJvd250cmVlLWZvdW5kYXRpb25cL2ZpbGVcLzlweEZOVWdQcmZOTEpRSHR2Q05kLmpwZyJ9:joseph-rowntree-foundation:IJ7Ghm2Q_tw4GHZVIzmp8aUyn1Zr6a_QfoPHh786OEo?width=750&height=750", email: "lena.talib@jrf.org.uk" },
  ];

  const investments = [
    { name: "Erinch Sahan", role: "Associate Director for Investment", img: "https://media.ffycdn.net/eu/joseph-rowntree-foundation/ogkg9AP3eEVt7XFPNU9g.jpg?width=750&height=750", email: "erinch.sahan@jrf.org.uk", linkedin: "https://www.linkedin.com/in/erinch-sahan/", x: "https://x.com/ErinchSahan", bluesky: "https://bsky.app/profile/erinchsahan.bsky.social" },
    { name: "Jaspal Sian", role: "Investment Portfolio Manager", img: FR+"eyJvYXV0aCI6eyJjbGllbnRfaWQiOiJjbGllbnQtbXpxYnlrbHNmdGR6aDd1dyJ9LCJwYXRoIjoiam9zZXBoLXJvd250cmVlLWZvdW5kYXRpb25cL2ZpbGVcL3dXVUc4SzE1TWJqa2lob2RUTXZCLmpwZyJ9:joseph-rowntree-foundation:YRaZdMp62z2YNWoc_j25azvUUjfLgLF5BeIjRugPJUc?width=750&height=750", email: "jaspal.sian@jrf.org.uk" },
  ];

  const MailIcon = () => (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="1"/><polyline points="3,7 12,13 21,7"/></svg>);
  const LinkedInIcon = () => (<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 11.001-4.12 2.06 2.06 0 010 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z"/></svg>);
  const XIcon = () => (<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M13.5 10.6L20.9 2h-1.8l-6.4 7.5L7.6 2H2l7.8 11.4L2 22h1.8l6.8-7.9L16.1 22H22l-8.5-11.4z"/></svg>);
  const BlueskyIcon = () => (<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 10.8c-1.087-2.114-4.046-6.053-6.798-7.995C2.566.944 1.561 1.266.902 1.565.139 1.908 0 3.08 0 3.768c0 .69.378 5.65.624 6.479.815 2.736 3.713 3.66 6.383 3.364-3.911.58-7.386 2.005-2.83 7.078 5.013 5.19 6.87-1.113 7.823-4.308.953 3.195 2.05 9.271 7.733 4.308 4.267-4.308.687-6.498-3.224-7.078 2.67.296 5.568-.628 6.383-3.364.246-.829.624-5.789.624-6.479 0-.688-.139-1.86-.902-2.203-.659-.299-1.664-.621-4.3 1.24C16.046 4.747 13.087 8.686 12 10.8z"/></svg>);

  const Person = ({ name, role, img, email, linkedin, x, bluesky }) => (
    <article className="person">
      <div className="person__photo"><img src={img} alt={name} loading="lazy" /></div>
      <div className="person__body">
        <h3 className="person__name"><a href="#">{name}</a></h3>
        <p className="person__role">{role}</p>
        <ul className="person__contact person__contact--icons">
          {email && <li><a href={"mailto:" + email} className="person__icon" aria-label={"Email " + name}><MailIcon /></a></li>}
          {linkedin && <li><a href={linkedin} className="person__icon" aria-label={name + " on LinkedIn"}><LinkedInIcon /></a></li>}
          {x && <li><a href={x} className="person__icon" aria-label={name + " on X"}><XIcon /></a></li>}
          {bluesky && <li><a href={bluesky} className="person__icon" aria-label={name + " on Bluesky"}><BlueskyIcon /></a></li>}
        </ul>
      </div>
    </article>
  );

  const sections = [
    { id: "directors", title: "Our directors", people: ourDirectors },
    { id: "policy-and-ideas", title: "Policy and ideas", people: policyAndIdeas },
    { id: "insight-and-analysis", title: "Insight and analysis", people: insightAndAnalysis },
    { id: "insight-infrastructure", title: "Insight infrastructure", people: insightInfrastructure },
    { id: "communications", title: "Communications and public engagement", people: communicationsAndPublicE },
    { id: "edi", title: "Equity, diversity and inclusion", people: equityDiversityAndInclus },
    { id: "emerging-futures", title: "Emerging futures", people: emergingFutures },
    { id: "nations", title: "Scotland, Wales and Northern Ireland", people: scotlandWalesAndNorthern },
    { id: "social-investment", title: "Social investment", people: socialInvestment },
    { id: "investments", title: "Investments", people: investments },
  ];

  const [navOpen, setNavOpen] = React.useState(true);
  const [pinned, setPinned] = React.useState(false);
  const [current, setCurrent] = React.useState(sections[0].title);
  const jlRef = React.useRef(null);
  const userToggled = React.useRef(false);

  React.useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) {
          const sec = sections.find(s => s.id === en.target.id);
          if (sec) setCurrent(sec.title);
        }
      });
    }, { rootMargin: "-30% 0px -60% 0px" });
    sections.forEach(s => { const el = document.getElementById(s.id); if (el) obs.observe(el); });

    const nav = jlRef.current;
    const inline = document.querySelector('.jumplinks--inline');
    let pinObs;
    if (inline) {
      pinObs = new IntersectionObserver(([e]) => {
        const isPinnedNow = !e.isIntersecting;
        userToggled.current = false;
        setPinned(isPinnedNow);
        setNavOpen(false);
      }, { threshold: 0, rootMargin: "-42px 0px 0px 0px" });
      pinObs.observe(inline);
    }

    // Native <details> hides content when closed regardless of CSS, so on
    // desktop we force every section open; on mobile only directors starts open.
    const frame = nav && nav.closest('.proto-stage__frame');
    let prevWide = null;
    const syncOpen = () => {
      const wide = frame ? frame.clientWidth > 820 : window.innerWidth > 820;
      if (wide === prevWide) return;
      prevWide = wide;
      const secs = document.querySelectorAll('.people-section');
      secs.forEach((d, i) => { if (wide) d.open = true; else d.open = (i === 0); });
    };
    syncOpen();
    let ro;
    if (frame && 'ResizeObserver' in window) { ro = new ResizeObserver(syncOpen); ro.observe(frame); }
    else window.addEventListener('resize', syncOpen);

    return () => { obs.disconnect(); if (pinObs) pinObs.disconnect(); if (ro) ro.disconnect(); else window.removeEventListener('resize', syncOpen); };
  }, []);

  const jump = (e, id) => {
    e.preventDefault();
    setNavOpen(false);
    const el = document.getElementById(id);
    if (!el) return;
    el.open = true;
    const top = el.getBoundingClientRect().top + window.scrollY - 72;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  return (
    <>
      <nav className="breadcrumb" aria-label="Breadcrumb">
        <div className="container"><ol><li><a href="#">Home</a></li></ol></div>
      </nav>

      <section className="hero hero--split hero--navy">
        <div className="hero__split">
          <div className="hero__split-copy">
            <h1>Our people</h1>
            <p className="hero__lede">Meet our leadership team and our teams of experts. You can also learn more about our trustees.</p>
          </div>
          <div className="hero__split-media">
            <img src={R('peopleHero', 'assets/our-people.jpg')} alt="JRF staff gathered in conversation" />
          </div>
        </div>
      </section>

      <div className="jumplinks-sentinel" aria-hidden="true"></div>

      <nav className="jumplinks jumplinks--inline" aria-label="You are currently reading">
        <div className="jumplinks__panel jumplinks__panel--static">
          <div className="container">
            <div className="jumplinks__current jumplinks__current--inline">
              <span className="jumplinks__current-label">You are currently reading:</span>
              <span className="jumplinks__current-title">{current}</span>
            </div>
          </div>
          <hr className="jumplinks__keyline" aria-hidden="true" />
          <div className="container">
            <ul className="jumplinks__grid">
              {sections.map(s => (
                <li key={s.id}><a href={"#" + s.id} onClick={(e) => jump(e, s.id)}>{s.title}</a></li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      <nav ref={jlRef} className={"jumplinks jumplinks--pinned" + (navOpen ? " is-open" : "") + (pinned ? " is-visible" : "")} aria-label="On this page" aria-hidden={!pinned}>
        <div className="jumplinks__bar">
          <div className="container jumplinks__bar-inner">
            <span className="jumplinks__current">
              <span className="jumplinks__current-label">You are currently reading:</span>
              <span className="jumplinks__current-title">{current}</span>
            </span>
            <button type="button" className="jumplinks__toggle" aria-expanded={navOpen} aria-controls="jumplinks-list" tabIndex={pinned ? 0 : -1} onClick={() => { userToggled.current = true; setNavOpen(o => !o); }}>
              <span>{navOpen ? "Close" : "View all sections"}</span>
              <span className="jumplinks__toggle-icon material-symbols-outlined" aria-hidden="true">expand_more</span>
            </button>
          </div>
        </div>
        <div id="jumplinks-list" className="jumplinks__panel">
          <div className="container">
            <ul className="jumplinks__grid">
              {sections.map(s => (
                <li key={s.id}><a href={"#" + s.id} onClick={(e) => jump(e, s.id)}>{s.title}</a></li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      {sections.map((s, idx) => (
        <details key={s.id} id={s.id} className={"section people-section section--" + (idx % 2 === 0 ? "cream" : "paper")} open={idx === 0}>
          <summary className="people-section__summary">
            <div className="container">
              <h2 className="h-section">{s.title}</h2>
              <span className="people-section__chevron material-symbols-outlined" aria-hidden="true">expand_more</span>
            </div>
          </summary>
          <div className="container">
            <div className="people-grid">
              {s.people.map((p, i) => <Person key={i} {...p} />)}
            </div>
          </div>
        </details>
      ))}
    </>
  );
}

window.PeoplePage = PeoplePage;
