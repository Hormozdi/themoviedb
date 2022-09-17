import { callHttp } from "../../utils/httpService";

const createMovieSlice = (set, get) => ({
  movie: {},
  getMovie: async (id) => {
    const { setLoading } = get();
    setLoading(true);
    const res = await callHttp("get", `movie/${id}`);
    set({ movie: res });
    setLoading(false);
  },
  resetMovie: () => {
    set({ movie: {} });
  },
});

export default createMovieSlice;
