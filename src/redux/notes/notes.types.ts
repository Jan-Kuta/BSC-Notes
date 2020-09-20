export type Note = {
    id: number
    title: string
}

export type NotesState = {
    loading: boolean
    data: Note[]
    error: string | null
}
