export const FIREBASE_API_KEY = import.meta.env.VITE_FIREBASE_API_KEY;
export const USER_AVATAR = [
   "https://occ-0-2611-3662.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABSWAoqy2791lBE1OdRITDVkDmtBGm0I3HinOzmhXUJnkqEBYMCHElaI8TtCv_J22CNbxfaf7NC7FZr4s0fxFLVgrXHln3pRMzVWN.png?r=181",
   "https://occ-0-2611-3662.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABVsrmU9HCosVLWJev-r2TgDG0YmqgkCzHk4IogCqoezXGqLBTO8WYiEsZzLa7wHfy5kUpS83uFaFJCJvPv-PT8crwDnybkL1fy80.png?r=72e",
   "https://occ-0-2611-3662.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABfc2NGa6lIcAJVA6TOdGwQ921W3_2jicZyTZfp6rgNO3xGdvDHy1o1FYXVEz3YqxnIcX71bT6gPtBf3nhpZ3XyDcITrHPTI5jJ3J.png?r=145",
   "https://occ-0-2611-3662.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABVy2_XUhT73OmjpVmwUCEHzqmQPr4KCzW2BDHesl4hzaFniV_jmE73qjSMbBnOCtq46IAH4q-QnoeR7k09shYfPQkWoSRfVpxWOA.png?r=962",
];

export const TMDB_API_OPTIONS = {
   method: "GET",
   headers: {
      accept: "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_KEY}`,
   },
};

export const NETFLIX_BG_URL = `https://assets.nflxext.com/ffe/siteui/vlv3/154a9550-ce07-4e28-819c-63185dd849f8/web/IN-en-20250106-TRIFECTA-perspective_27b02e7c-f668-4639-9e82-1a5485084b2a_large.jpg`;

export const TMDB_API = "https://api.themoviedb.org/3";
export const TMDB_MOVIE_API = TMDB_API + "/movie";
export const TMDB_SHOW_API = TMDB_API + "/tv";
export const TMDB_IMAGE_URL = "https://image.tmdb.org/t/p/original";
export const OPEN_AI_API_KEY = import.meta.env.VITE_OPEN_AI_API_KEY;
