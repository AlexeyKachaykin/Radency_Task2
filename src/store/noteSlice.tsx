import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Note, NoteState } from '../types/Note';




const initialState: NoteState = {
    notes: [],
};

const noteSlice = createSlice({
    name: 'notes',
    initialState,
    reducers: {
        addNote: (state, action: PayloadAction<Note>) => {
            state.notes.push(action.payload);
        },
        editNote: (state, action: PayloadAction<{ id: number; updatedNote: { name: string; category: string; content: string } }>) => {
            const { id, updatedNote } = action.payload;
            const existingNote = state.notes.find((note) => note.id === id);
            if (existingNote) {

                existingNote.name = updatedNote.name;
                existingNote.category = updatedNote.category;
                existingNote.content = updatedNote.content;
            }
        },
        archiveNote: (state, action: PayloadAction<number>) => {
            const id = action.payload;
            const existingNote = state.notes.find((note) => note.id === id);
            if (existingNote) {
                existingNote.archived = true;
            }
        },
        unarchiveNote: (state, action: PayloadAction<number>) => {
            const id = action.payload;
            const existingNote = state.notes.find((note) => note.id === id);
            if (existingNote) {
                existingNote.archived = false;
            }
        },
        deleteNote: (state, action: PayloadAction<number>) => {
            const id = action.payload;
            state.notes = state.notes.filter((note) => note.id !== id);
        },
    },
});

export const { addNote, editNote, archiveNote, unarchiveNote, deleteNote } = noteSlice.actions;
export default noteSlice.reducer;
