import { createAsyncThunk, createSlice, AsyncThunk } from "@reduxjs/toolkit";


interface AsyncState {
    loading: boolean;
    data: any[];
    error: string;
}

const initialState : AsyncState = {
    loading: false,
    data: [],
    error: ""
}



export const fetchUsers: AsyncThunk<any, void, {}> = createAsyncThunk(
    'fetchUsers',
    async () => {
        try {

            const response = await fetch("https://fakestoreapi.com/products")
            return response.json()
        } catch(error){
            return error
        }
    }
)

const asyncSlice = createSlice({
    name: 'async',
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || "";
            });
    }
})


export default asyncSlice.reducer