import { configureStore } from '@reduxjs/toolkit';
import noteReducer from '../store/noteSlice';

const store = configureStore({
    reducer: {

        notes: noteReducer,
    },

    preloadedState: {
        notes: {
            notes: [{
                id: 1,
                name: 'Note 1',
                category: 'Task',
                content: 'This is the content of Note 1.',
                created: 'August 1, 2023',
                archived: false,
            },
            {
                id: 2,
                name: 'Note 2',
                category: 'Random Thought',
                content: 'This is the content of Note 2.',
                created: 'August 1, 2023',
                archived: false,
            },
            {
                id: 3,
                name: 'Note 3',
                category: 'Random Thought',
                content: 'This is the content of Note 3.',
                created: 'August 1, 2023',
                archived: true,
            },
            {
                id: 4,
                name: 'Note 4',
                category: 'Idea',
                content: 'This is the content of Note 4.',
                created: 'August 1, 2023',
                archived: false,
            },
            {
                id: 5,
                name: 'Note 5',
                category: 'Task',
                content: 'This is the content of Note 5.',
                created: 'August 1, 2023',
                archived: false,
            },
            {
                id: 6,
                name: 'Note 2',
                created: 'August 1, 2023',
                category: 'Random Thought',
                content: 'This is a random thought for 07/29/2023 and another date 08/05/2023.',
                archived: false,
            }, {
                id: 7,
                name: 'Note 7',
                category: 'Task',
                content: 'This is the content of Note 7.',
                created: 'August 1, 2023',
                archived: false,
            }]
        },
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;