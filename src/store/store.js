import { configureStore, createSlice } from '@reduxjs/toolkit'

const initialUserState = { user: null };

const userSlice = createSlice(
    {
        name: 'user',
        initialState: initialUserState,
        reducers: {

        }

    }
);
const initialAuthState = { isAuthenticated: false };

const authSlice = createSlice(
    {
        name: 'authentication',
        initialState: initialAuthState,
        reducers: {
            login(state) {
                state.isAuthenticated = true;
            },
            logout(state) {
                state.isAuthenticated = false;
            },

        }

    }
);


const store = configureStore({
    reducer: {
        user: userSlice.reducer,
        auth: authSlice.reducer
    },
});

export const userActions = userSlice.actions;
export const authActions = authSlice.actions;

export default store;