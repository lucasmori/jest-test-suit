const student = require('./student')

describe('test Suit for students', () => {
    it('Should return 10 when notes are 5, 3 and 2', () => {
        const notes = [5, 3, 2]
        expect(student.sum(notes)).toEqual(10)
    })

    it('Should return 0 when one of the notes are 0', () => {
        const notes = [1, 2, 3, 0]
        expect(student.sum(notes)).toEqual(0)
    })

    it('Should fold the note when the student has more than 5 notes', () => {
        const notes = [1, 2, 3, 4, 5, 6, 7]
        expect(student.sum(notes)).toEqual(56)
    })

    it('Should fold the note when the note is greater than 9', () => {
        const notes = [10, 5, 3]
        expect(student.sum(notes)).toEqual(28)
    })
})