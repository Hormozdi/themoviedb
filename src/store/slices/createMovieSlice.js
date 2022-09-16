import { callHttp } from "../../utils/httpService";

const createMovieSlice = (set, get) => ({
  movie: {},
  getMovie: async (id) => {
    const res = await callHttp("get", `movie/${id}`);
    set({ movie: res });
  },
  resetMovie: () => {
    set({ movie: {} });
  },
});

export default createMovieSlice;
