export async function getJoursFeries() {
  const url = `https://calendrier.api.gouv.fr/jours-feries/metropole.json`
  const data = await fetch(url)
  const response = await data.json()
  return response
}


export async function getVacancesScolaires(){
  const url = "https://data.education.gouv.fr/api/explore/v2.1/catalog/datasets/fr-en-calendrier-scolaire/records?limit=20&refine=start_date%3A%222024%22&refine=location%3A%22Lille%22&refine=annee_scolaire%3A%222024-2025%22&refine=annee_scolaire%3A%222023-2024%22"
  const data = await fetch(url)
  const response = await data.json()
  return response.results
}


// async function getJoursFeries() {
//   // const url = `https://calendrier.api.gouv.fr/jours-feries/metropole/${annee.value}.json`
//   const url = `https://calendrier.api.gouv.fr/jours-feries/metropole.json`
//   const data = await fetch(url)
//   const response = await data.json()
//   const jourFeries = Object.keys(response)
//   jourFeries.forEach(jour => {

//    attributes.value.push({
//     dates : jour,
//     highlight: {
//         color: 'green',
//         fillMode: 'solid',
//         contentClass: 'italic',
//       },
//     popover: {
//       label: 'Jour férié',
//     },

//     });
//     }
//       )
// }

// getJoursFeries()


