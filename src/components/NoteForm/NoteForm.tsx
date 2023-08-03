import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { editNote, addNote } from '../../store/noteSlice';
import './NoteForm.css';
import { Note } from '../../types/Note';
const createdDate = new Date();
const createdDateString = createdDate.toLocaleString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
});

interface NoteFormProps {
    editNoteId: number | null;
    setEditNoteId: React.Dispatch<React.SetStateAction<number | null>>;
    handleCloseModal: () => void;
}

const NoteForm: React.FC<NoteFormProps> = ({ editNoteId, setEditNoteId, handleCloseModal }) => {
    const [noteName, setNoteName] = useState('');
    const [noteCategory, setNoteCategory] = useState('');
    const [noteContent, setNoteContent] = useState('');

    const dispatch = useDispatch();
    const notes = useSelector((state: RootState) => state.notes.notes);

    useEffect(() => {
        if (editNoteId !== null) {
            const fetchedNote = fetchNoteDetails(editNoteId, notes);
            setNoteName(fetchedNote.name);
            setNoteCategory(fetchedNote.category);
            setNoteContent(fetchedNote.content);
        } else {
            setNoteName('');
            setNoteCategory('');
            setNoteContent('');
        }
    }, [editNoteId, notes]);

    const handleSaveNote = (e: React.FormEvent) => {
        e.preventDefault();

        if (editNoteId !== null) {
            dispatch(
                editNote({
                    id: editNoteId,
                    updatedNote: {
                        name: noteName,
                        category: noteCategory,
                        content: noteContent,
                    },
                })
            );
        } else {
            dispatch(
                addNote({
                    id: Date.now(),
                    name: noteName,
                    created: createdDateString,
                    category: noteCategory,
                    content: noteContent,
                    archived: false,
                })
            );
        }

        setNoteName('');
        setNoteCategory('');
        setNoteContent('');
        setEditNoteId(null);
        handleCloseModal();
    };

    
    const fetchNoteDetails = (id: number, notes: Note[]): Note => {
        const foundNote = notes.find((note) => note.id === id);
        if (foundNote) {
            return foundNote;
        } else {
            return { id: 0, name: '', category: '', content: '', created: '', archived: false };
        }
    };

    return (
        <div className="note-form-container">
            <h2>{editNoteId !== null ? 'Edit Note' : 'Create New Note'}</h2>
            <form onSubmit={handleSaveNote}>
                <div className="form-group">
                    <label htmlFor="note-name">Name: </label>
                    <input
                        type="text"
                        id="note-name"
                        value={noteName}
                        onChange={(e) => setNoteName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="note-category">Category: </label>
                    <select
                        id="note-category"
                        value={noteCategory}
                        onChange={(e) => setNoteCategory(e.target.value)}
                        required
                    >
                        <option value="">Select Category</option>
                        <option value="Task">Task</option>
                        <option value="Random Thought">Random Thought</option>
                        <option value="Idea">Idea</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="note-content">Content: </label>
                    <textarea
                        id="note-content"
                        value={noteContent}
                        onChange={(e) => setNoteContent(e.target.value)}
                        required
                    ></textarea>
                </div>
                <div className="form-buttons">
                    <button type="submit">{editNoteId !== null ? 'Save' : 'Create'}</button>
                </div>
            </form>
        </div>
    );
};

export default NoteForm;
