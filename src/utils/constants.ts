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

export const TMDB_API = "https://api.themoviedb.org/3/movie";
export const NOW_PLAYING_API = `${TMDB_API}/now_playing?language=en-US&page=1`;
