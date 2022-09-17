import create from "zustand";
import createConfigSlice from "./slices/createConfigSlice";
import createGenreSlice from "./slices/createGenreSlice";
import createMovieSlice from "./slices/createMovieSlice";
import createWishlistSlice from "./slices/createWishlistSlice";

const mainStore = create((set, get) => ({
  ...createGenreSlice(set, get),
  ...createMovieSlice(set, get),
  ...createWishlistSlice(set, get),
  ...createConfigSlice(set, get),
}));

export default mainStore;
