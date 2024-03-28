// const generals = [
//   {
//     id: 1,
//     image:
//       "https://static.wikia.nocookie.net/kingdom-anime/images/3/3a/Kan_Ki_Anime_Season_5.png/revision/latest?cb=20230925104859",
//     name: "General A",
//     faction: "Allies",
//     title: "Commander-in-Chief",
//   },
//   {
//     id: 2,
//     image:
//       "https://static.wikia.nocookie.net/kingdom-anime/images/3/3a/Kan_Ki_Anime_Season_5.png/revision/latest?cb=20230925104859",
//     name: "General B",
//     faction: "Axis",
//     title: "Strategist",
//   },
//   {
//     id: 3,
//     image:
//       "https://static.wikia.nocookie.net/kingdom-anime/images/3/3a/Kan_Ki_Anime_Season_5.png/revision/latest?cb=20230925104859",
//     name: "General C",
//     faction: "Allies",
//     title: "Field Marshal",
//   },
//   {
//     id: 4,
//     image:
//       "https://static.wikia.nocookie.net/kingdom-anime/images/3/3a/Kan_Ki_Anime_Season_5.png/revision/latest?cb=20230925104859",
//     name: "General D",
//     faction: "Axis",
//     title: "Tactician",
//   },
// ];

const generalNames = [
  "Shin",
  "Huan Yi",
  "Wang Jian",
  "Wang Yi",
  "Bai Qi",
  "Lord Biao",
  "Meng Wu",
  "Meng Aao",
  "Meng Tian",
  "Wang Ben",
  "Yotanwa",
  "Teng",
  "Wang He",
  "Zhang Tang",
  " Kai Meng",
  "Li Mu",
  "Lian Po",
  "Pang Nuan",
  "Qing She",
  "Wu Qing",
  "Yui Yeng",
  "Zi Yong Bai",
];

const generalsPictures = [
  "https://cdn.myanimelist.net/images/characters/2/241101.jpg",
];

const genStrength = [
  85, 98, 97, 96, 95, 94, 92, 82, 81, 83, 84, 88, 76, 74, 79, 98, 96, 92, 90,
  80, 77, 72,
];

const genFactions = [
  "Qin",
  "Qin",
  "Qin",
  "Qin",
  "Qin",
  "Qin",
  "Qin",
  "Qin",
  "Qin",
  "Qin",
  "Qin",
  "Qin",
  "Qin",
  "Qin",
  "Zhao",
  "Zhao",
  "Zhao",
  "Zhao",
  "Zhao",
  "Zhao",
  "Zhao",
  "Zhao",
];

const generals = generalNames.map((name, index) => ({
  id: index + 1,
  name: name,
  image: generalsPictures[index],
  strength: genStrength[index],
  faction: genFactions[index],
}));

console.log(generals);

export default generals;
