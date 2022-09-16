import create from "zustand";
import createGenreSlice from "./slices/createGenreSlice";

const useStore = create((set, get) => ({
  ...createGenreSlice(set, get),
}));

export default useStore;
