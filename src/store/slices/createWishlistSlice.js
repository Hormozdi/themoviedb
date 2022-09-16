const createWishlistSlice = (set, get) => ({
  wishlist: [],
  getWishlistFromLocalstorage: () => {
    let { wishlist } = get();
    if (!wishlist?.length) {
      wishlist = JSON.parse(localStorage.getItem("wishlist"));
      if (wishlist?.length) {
        set({ wishlist });
      }
    }
  },
  addToWishlist: (id) => {
    let { wishlist } = get();
    const { getWishlistFromLocalstorage } = get();
    if (!wishlist?.length) {
      getWishlistFromLocalstorage();
      wishlist = get().wishlist;
    }

    wishlist = [...wishlist, id];
    set({ wishlist });
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  },
  removeFromWishlist: (id) => {
    let { wishlist } = get();
    const { getWishlistFromLocalstorage } = get();
    if (!wishlist?.length) {
      getWishlistFromLocalstorage();
      wishlist = get().wishlist;
    }

    wishlist = wishlist.filter((el) => el !== id);
    set({ wishlist });
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  },
});

export default createWishlistSlice;
