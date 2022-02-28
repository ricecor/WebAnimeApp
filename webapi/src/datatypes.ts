type RandomAnime = {
  results: Array<Anime>;
};

// Define the type User to match the JSON structure from https://randomuser.me/api
type Anime = {
  anime_id: number
  anime_name: string
  anime_img: string
};

export { Anime, RandomAnime };
