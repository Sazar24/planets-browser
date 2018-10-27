function addProperty(item, id: number) {
    item.id = id;
};

describe('proofs', () => {

    const testArray: any[] = [
        { foo: "xxx1", bar: "yyy1" },
        { foo: "xxx2", bar: "yyy2" },
        { foo: "xxx3", bar: "yyy3" },
    ];
    const expectedOutput: any[] = [
        { foo: "xxx1", bar: "yyy1", id: 1 },
        { foo: "xxx2", bar: "yyy2", id: 2 },
        { foo: "xxx3", bar: "yyy3", id: 3 },
    ];

    it('should change item (adds property) in mapped array', () => {
        const result :any[] = testArray.map((item, index) => addProperty(item, index));

        expect(result).toEqual(expectedOutput);
    });
});