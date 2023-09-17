const selectIsLoggedIn = state => state.auth.isLoggedIn;

const selectUser = state => state.auth.selectUser;

const selectIsRefreshing = state => state.auth.isRefreshing;

export { selectIsLoggedIn, selectUser, selectIsRefreshing };
