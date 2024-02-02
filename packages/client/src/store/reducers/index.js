import userSlice from "../slices/userSlice";

// Combine reducers
export const rootReducer = {
    userReducer: userSlice.reducer,
};