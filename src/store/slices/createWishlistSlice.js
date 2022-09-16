import { callHttp } from "../../utils/httpService";

const createWishlistSlice = (set, get) => ({
  wishlistIds: [],
  wishlistMovies: {},
  getWishlistFromLocalstorage: () => {
    let { wishlistIds } = get();
    if (!wishlistIds?.length) {
      wishlistIds = JSON.parse(localStorage.getItem("wishlistIds"));
      if (wishlistIds?.length) {
        set({ wishlistIds });
      }
    }
  },
  addToWishlist: (id) => {
    let { wishlistIds } = get();
    const { getWishlistFromLocalstorage } = get();
    if (!wishlistIds?.length) {
      getWishlistFromLocalstorage();
      wishlistIds = get().wishlistIds;
    }

    wishlistIds = [...wishlistIds, id];
    set({ wishlistIds });
    localStorage.setItem("wishlistIds", JSON.stringify(wishlistIds));
  },
  removeFromWishlist: (id) => {
    let { wishlistIds } = get();
    const { getWishlistFromLocalstorage } = get();
    if (!wishlistIds?.length) {
      getWishlistFromLocalstorage();
      wishlistIds = get().wishlistIds;
    }

    wishlistIds = wishlistIds.filter((el) => el !== id);
    set({ wishlistIds });
    localStorage.setItem("wishlistIds", JSON.stringify(wishlistIds));
  },
  addMovieToWishlist: async () => {
    const { wishlistIds, wishlistMovies } = get();

    for (let i = 0; i < wishlistIds.length; i++) {
      const id = wishlistIds[i];
      if (!wishlistMovies[id]) {
        wishlistMovies[id] = await callHttp("get", `movie/${id}`);
      }
    }
    set({ wishlistMovies });
  },
});

export default createWishlistSlice;
