import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { Note } from '../../types/Note';
import './SummaryTable.css';
import Table from '../Table/Table'; // Import the generic Table component

const SummaryTable: React.FC = () => {
    const notes: Note[] = useSelector((state: RootState) => state.notes.notes);

    const getNoteCountByCategoryAndStatus = (category: string, archived: boolean) => {
        return notes.filter((note) => note.category === category && note.archived === archived).length;
    };

    const categories: string[] = [];
    notes.forEach((note) => {
        if (!categories.includes(note.category)) {
            categories.push(note.category);
        }
    });

    const tableColumns = ['Note Category', 'Active', 'Archived'];

    return (
        <div className="summary-table">
            <Table
                data={categories.map((category) => ({
                    'Note Category': category,
                    Active: getNoteCountByCategoryAndStatus(category, false),
                    Archived: getNoteCountByCategoryAndStatus(category, true),
                }))}
                columns={tableColumns}
            />
        </div>
    );
};

export default SummaryTable;
