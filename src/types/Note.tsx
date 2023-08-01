export interface Note {
  id: number;
  name: string;
  category: string;
  content: string;
  created: string;
  archived: boolean;
}
export interface NoteState {
  notes: Note[];
}