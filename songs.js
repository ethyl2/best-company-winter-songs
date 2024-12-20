const songs = [
  {
    title: 'O Holy Night',
    artist: 'Nsync',
    embedUrl: null,
    url: 'https://www.youtube.com/watch?v=MXzJqRXLI08',
    recommender: 'Blake Farrow',
  },
  {
    title: 'All I Want For Christmas',
    artist: 'Chase Holfelder',
    embedUrl: null,
    url: 'https://www.youtube.com/watch?v=SDACj0tkD-s',
    recommender: 'McKell Staheli',
  },
  {
    title: 'Alone This Holiday',
    artist: 'The Used',
    embedUrl: null,
    url: 'https://www.youtube.com/watch?v=MXzJqRXLI08',
    recommender: 'Keaton Hawker',
  },
  {
    title: 'Last Christmas',
    artist: 'Wham!',
    embedUrl: 'https://www.youtube.com/embed/vquGpfbnqRc',
    embedIsDifferent: true,
    url: 'https://www.youtube.com/watch?v=E8gmARGvPlI',
    recommender: 'Caleb Moore & Keaton Hawker',
  },
  {
    title: 'Last Christmas',
    artist: 'Hilary Duff',
    embedUrl: null,
    url: 'https://www.youtube.com/watch?v=8vGm1d2hgDI',
    recommender: 'Caleb Moore',
  },
  {
    title: 'Baby It\'s Cold Outside',
    artist: 'Lydia Liza and Josiah Lemanski',
    embedUrl: 'https://www.youtube.com/embed/amK4U4pCTB8',
    url: 'https://www.youtube.com/watch?v=MXzJqRXLI08',
    recommender: 'Natie Poecker',
  },
  {
    title: 'It\'s Raining Tacos',
    artist: 'Parry Gripp',
    embedUrl: 'https://www.youtube.com/embed/xwIHONgzq-w',
    url: 'https://www.youtube.com/watch?v=MXzJqRXLI08',
    recommender: 'Heather Nuffer',
  },
  {
    title: 'Merry Christmas, Happy Holidays',
    artist: 'Nsync',
    embedUrl: null,
    url: 'https://www.youtube.com/watch?v=wKj92352UAE',
    recommender: 'Caleb Moore',
  },
  {
    title: 'God Rest Ye Merry Hippogriffs',
    artist: 'Midnight Sky',
    embedUrl: null,
    url: 'https://www.youtube.com/watch?v=70UPlfetoy4',
    recommender: 'Heather Nuffer',
  },
  {
    title: 'The Christmas Song (& Others)',
    artist: 'She and Him',
    embedUrl: null,
    url: 'https://www.youtube.com/playlist?list=PLEC2FCC95451E0F6E',
    recommender: 'McKell Staheli',
  },
  {
    title: 'Could I Hold The Baby?',
    artist: 'Rachel M. Goates',
    embedUrl: 'https://www.youtube.com/embed/L9iKKS5RVss',
    url: 'https://www.youtube.com/watch?v=L9iKKS5RVss',
    recommender: 'Heather Nuffer',
  },
  {
    title: 'Mele Kalikimaka',
    artist: 'Zooey Deschanel',
    embedUrl: null,
    url: 'https://www.youtube.com/watch?v=ZcNHZS0aDsQ',
    recommender: 'Caleb Moore',
  },
  {
    title: 'Still, Still, Still',
    artist: 'The Tabernacle Choir at Temple Square',
    embedUrl: 'https://www.youtube.com/embed/5rflf6NEQ6I',
    url: 'https://www.youtube.com/watch?v=ZcNHZS0aDsQ',
    recommender: 'Heather Nuffer',
  },
  {
    title: 'Noel',
    artist: 'Animaniacs',
    embedUrl: 'https://www.youtube.com/embed/OXyTqFLAVG4',
    url: 'https://www.youtube.com/watch?v=OXyTqFLAVG4',
    recommender: 'Heather Nuffer',
  },
  {
    title: 'Glittery',
    artist: 'Kacey Musgraves & Troye Sivan',
    embedUrl: null,
    url: 'https://youtu.be/tGyCr55HQPQ',
    recommender: 'Caleb Moore',
  },
  {
    title: 'Ribbons and Bows',
    artist: 'Kacey Musgraves',
    embedUrl: null,
    url: 'https://youtu.be/UsQelOfbJeQ',
    recommender: 'Caleb Moore',
  },
  {
    title: 'Puppy for Hanukkah',
    artist: 'Daveed Diggs',
    embedUrl: null,
    url: 'https://youtu.be/z8MkeIo2bUE',
    recommender: 'Chandler Hoopes',
  },
  {
    title: 'Jingle Bells',
    artist: 'Bleached',
    embedUrl: null,
    url: 'https://youtu.be/9evlQXXMcn8',
    recommender: 'Chandler Hoopes',
  },
  {
    title: 'December',
    artist: 'Earth, Wind & Fire',
    embedUrl: null,
    url: 'https://youtu.be/CjCWhwdnCd0',
    recommender: 'Kalicia Bateman',
  },
  {
    title: 'Christmas Will Really Be Christmas',
    artist: 'Black Pumas',
    embedUrl: 'https://www.youtube.com/embed/ZIuAGcSUtAM',
    url: 'https://youtu.be/ZIuAGcSUtAM',
    recommender: 'Chandler Hoopes',
  },
  {
    title: 'Christmas Shoes',
    artist: 'NewSong',
    embedUrl: null,
    url: 'https://youtu.be/MpkI7GW2V34',
    recommender: 'Christian Jones',
  },
  {
    title: 'Endless Love',
    artist: 'Jon Batiste & Aloe Blacc',
    embedUrl: null,
    url: 'https://youtu.be/Xwuwwx-ceks',
    recommender: 'Justin Ashby',
  },
  {
    title: 'Merry Christmas, Happy New Year',
    artist: 'Ingrid Michaelson & Zooey Deschanel',
    embedUrl: null,
    url: 'https://youtu.be/s9AU0gUGumE',
    recommender: 'Kalicia Bateman',
  },
  {
    title: 'We Three Kings',
    artist: 'Claymation Christmas',
    embedUrl: 'https://www.youtube.com/embed/tR53QamRpw0?si=tkWDqIOjWtx5KSU4',
    url: 'https://youtu.be/CnIFTtW1pko',
    recommender: 'Heather Nuffer',
  },
]

const songs2022 = [
  {
    title: 'Christmas Shoes',
    artist: 'NewSong',
    embedUrl: null,
    url: 'https://youtu.be/MpkI7GW2V34',
    recommender: 'Christian Jones',
    image: './images/ball1.png',
  },
  {
    title: 'All I Want For Christmas',
    artist: 'Mariah Carey',
    embedUrl: null,
    url: 'https://youtu.be/aAkMkVFwAoo',
    recommender: 'Courtney Monlux',
    image: './images/ball2.png',
  },
  {
    title: 'Dominick the Donkey',
    artist: 'Lou Monte',
    embedUrl: null,
    url: 'https://youtu.be/Ca5wXojemRM',
    recommender: 'Courtney Monlux',
    image: './images/ball3.png',
  },
  {
    title: 'Ding Dong Merrily On High',
    artist: 'Celtic Woman',
    embedUrl: null,
    url: 'https://youtu.be/7uyb2q18aPY',
    recommender: 'Heather Nuffer',
    image: './images/ball4.png',
  },
]
