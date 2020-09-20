export type Note = {
    id: number
    title: string
}

export type NotesState = {
    loading: boolean
    notes: Note[]
    error: string | null
}
