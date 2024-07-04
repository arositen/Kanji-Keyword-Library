export interface KanjiEntry {
    hIndex: number,
    character: string,
    characterType: string,
    keyword: string,
    story: string,
    readings?: {
        kunyomi: string[],
        onyomi: string[],
    },
    meaningAsPrimitive?: string[],
    primitiveNotes?: string
}