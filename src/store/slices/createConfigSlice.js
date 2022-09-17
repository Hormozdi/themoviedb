const createConfigSlice = (set, get) => ({
  config: {},
  setLoading: (status) => {
    let { config } = get();
    set({ config: { ...config, loading: status } });
  },
});

export default createConfigSlice;
