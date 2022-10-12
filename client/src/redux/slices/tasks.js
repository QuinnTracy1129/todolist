import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { browse, save, destroy, update } from "../services";

const initialState = {
    tasks: [],
    page: 1,
    maxPage: 5,
    totalPages: 1,
    isLoading: false,
    isError: false,
    message: "",
  },
  entity = "tasks";

export const BROWSE = createAsyncThunk(
  `${entity}/browse`,
  async (key, thunkAPI) => {
    try {
      return await browse(entity, key);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const SAVE = createAsyncThunk(
  `${entity}/save`,
  async (item, thunkAPI) => {
    try {
      return await save(entity, item);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const UPDATE = createAsyncThunk(
  `${entity}/update`,
  async (item, thunkAPI) => {
    try {
      return await update(entity, item.data, item.id);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const DESTROY = createAsyncThunk(
  `${entity}/destroy`,
  async (id, thunkAPI) => {
    try {
      return await destroy(entity, id);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const taskSlice = createSlice({
  name: entity,
  initialState,
  reducers: {
    PAGINATION: (state, data) => {
      state.page = data.payload;
    },
    RESET: state => initialState,
  },
  extraReducers: builder => {
    builder
      // BROWSE
      .addCase(BROWSE.pending, state => {
        state.isLoading = true;
      })
      .addCase(BROWSE.fulfilled, (state, action) => {
        state.tasks = action.payload.array;
        state.totalPages = action.payload.totalPages;
        state.isLoading = false;
      })
      .addCase(BROWSE.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })

      // SAVE
      .addCase(SAVE.pending, state => {
        state.isLoading = true;
      })
      .addCase(SAVE.fulfilled, (state, action) => {
        state.isLoading = false;
        if (state.tasks.length < state.maxPage) {
          state.tasks.push(action.payload);
        } else {
          state.page++;
        }
      })
      .addCase(SAVE.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })

      // UPDATE
      .addCase(UPDATE.pending, state => {
        state.isLoading = true;
      })
      .addCase(UPDATE.fulfilled, (state, action) => {
        state.isLoading = false;
        const index = state.tasks.findIndex(e => e._id === action.payload._id);
        state.tasks[index] = action.payload;
      })
      .addCase(UPDATE.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })

      // DESTROY
      .addCase(DESTROY.pending, state => {
        state.isLoading = true;
      })
      .addCase(DESTROY.fulfilled, (state, action) => {
        state.isLoading = false;
        const index = state.tasks.findIndex(e => e._id === action.payload);
        state.tasks.splice(index, 1);
        if (state.totalPages > 1) {
          if (state.page === state.totalPages) {
            // if last page and totalPages are greater than 1, safe to go back another page
            if (state.tasks.length < 1) {
              state.page--;
            }
          }
        }
      })
      .addCase(DESTROY.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { RESET, PAGINATION } = taskSlice.actions;
export default taskSlice.reducer;
