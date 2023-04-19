/*



L'objectif est de faire une fonction pour substituer Paul Pogba par Corentin Tolisso et afficher le nouveau object teamSemiFinal



*/



const teamSemiFinal = {

  competition: '2018 FIFA World Cup',

  country: 'France',

  opponent_country: 'Belgium',

  match: 'Semi final',

  coach: 'Didier Deschamps',

  players: {

    goalkeeper: 'Hugo Lloris',

    forwards: ['Kylian Mbappé', 'Antoine Griezmann', 'Blaise Matuidi', 'Olivier Giroud'],

    defenders: ['Benjamin Pavard', 'Raphaël Varane', 'Samuel Umtiti', 'Lucas Hernandez'],

    midfielders: ['Paul Pogba', "N'Golo Kanté"],

    substitutes: ['Steven Nzonzi', 'Corentin Tolisso', 'Nabil Fekir']

  },

};

function main(obj) {
  const temp = obj.players.substitutes[1];

  obj.players.substitutes[1] = obj.players.midfielders[0];
  obj.players.midfielders[0] = temp;


  return obj;
}

console.log(main(teamSemiFinal));
