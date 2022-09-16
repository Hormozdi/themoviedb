import { callHttp } from "../../utils/httpService";

const createGenreSlice = (set, get) => ({
  genres: [],
  carousels: [],
  getGenres: async () => {
    const res = await callHttp("get", "/genre/movie/list");
    set(res);
  },
  getGenreMovies: async (genreId) => {
    const res = await callHttp("get", `genre/${genreId}/movies`);
    const { genres, carousels } = get();
    const genre = genres.find((el) => el.id === genreId);
    const newGenreObject = { ...genre, movies: res.results };
    set({ carousels: [...carousels, newGenreObject] });
  },
});

export default createGenreSlice;
