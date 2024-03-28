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
  "Cheng Hui",
  "Zi Yong Bai",
];

const generalsPictures = [
  "https://cdn.myanimelist.net/images/characters/2/241101.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMKCH3iCn6bpO4gSPyQiSeihFs_fv1RgGtUQ&usqp=CAU",
  "https://i.pinimg.com/originals/cc/46/a5/cc46a596dc833429d1ba073bc027369b.jpg",
  "https://cdn.myanimelist.net/r/200x268/images/characters/3/240321.jpg?s=ec1d963357de6c7ba889bed42708f68d",
  "https://cdn.myanimelist.net/r/200x268/images/characters/2/247413.jpg?s=b7fd7c6e4a863f267b2d4379d062b972",
  "https://i.pinimg.com/originals/f0/24/7c/f0247c08c86bb0fd0d0d5fd078895bb2.jpg",
  "https://myanimeshelf.com//upload/dynamic/2016-12/11/0d69b2ef52977a4fcc088ff7049dd5d02.jpg",
  "https://myanimeshelf.com//upload/dynamic/2016-11/26/rankingshare-850ecfd0065711e58d3806cfc7d1632b2afdf2ce511b3430042.jpg",
  "https://i.pinimg.com/736x/06/23/81/0623811c75c2407ee0ec12f4aadfa407.jpg",
  "https://i.pinimg.com/originals/6c/7c/9e/6c7c9e48e2dfb8a79a913ba29202c5e8.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXRwZ0hKBNSTSk4CvlgMonwBSD6TKV3eHn2w&usqp=CAU",
  "https://i.pinimg.com/736x/4d/54/37/4d5437085e4d433c6d9babd80dd3d3b4.jpg",
  "https://lostinanime.com/wp-content/uploads/2021/07/Kingdom-3-13-26.jpg",
  "https://cdn.myanimelist.net/r/200x268/images/characters/5/534728.jpg?s=bb0dd9f13afa363ede073f171e2aedbe",
  "https://i.pinimg.com/736x/26/56/fa/2656faf4bed4f7166e054ef09e6bee3b.jpg",
  "https://i.pinimg.com/736x/03/98/ab/0398aba5737ec5d3cddd5f23e45dc212.jpg",
  "https://imgsrv.crunchyroll.com/cdn-cgi/image/format=auto,width=1200,height=675,fit=contain,quality=70/catalog/crunchyroll/c47abcb701da797b78469c79db98b894.jpe",
  "https://i.pinimg.com/originals/db/d7/cf/dbd7cfc1934093beb0568973ef185017.jpg",
  "https://lostinanime.com/wp-content/uploads/2024/02/Kingdom-5-07-32.jpg",
  "https://lostinanime.com/wp-content/uploads/2022/05/Kingdom-4-06-34.jpg",
  "https://i.pinimg.com/736x/47/4b/31/474b31ff1dc975e23204da7730535582.jpg",
  "https://cdn.myanimelist.net/r/200x268/images/characters/7/247131.jpg?s=320c3eceaed2234f32f75ce870db740f",
];

const genStrength = [
  85, 98, 97, 96, 95, 94, 92, 82, 81, 83, 84, 88, 76, 74, 79, 98, 96, 92, 90,
  80, 77, 85,
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
  "Wei",
  "Zhao",
  "Zhao",
  "Zhao",
  "Zhao",
  "Wei",
  "han",
  "Chu",
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
