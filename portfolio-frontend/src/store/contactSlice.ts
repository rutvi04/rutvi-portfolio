import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the initial state for the contact form
interface ContactState {
  formData: {
    name: string;
    email: string;
    message: string;
  };
  status: string;
}

const initialState: ContactState = {
  formData: {
    name: '',
    email: '',
    message: '',
  },
  status: '',
};

// Create the contact slice
const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    updateFormData: (state, action: PayloadAction<{ field: string; value: string }>) => {
      const { field, value } = action.payload;
      state.formData[field as keyof typeof state.formData] = value;
    },
    setStatus: (state, action: PayloadAction<string>) => {
      state.status = action.payload;
    },
    resetForm: (state) => {
      state.formData = { name: '', email: '', message: '' };
      state.status = '';
    },
  },
});

export const { updateFormData, setStatus, resetForm } = contactSlice.actions;

export default contactSlice.reducer;
