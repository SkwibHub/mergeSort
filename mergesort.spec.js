describe('Split Array function', function () {
    var array;
    beforeEach(function () {
        stringArray = ['apple', 'dog', 'cat', 'banana'];
    })

    it('is able to take an empty array', function () {
        expect(split([])).toEqual([]);
    });

    it('is able to take an array with one element', function () {
        expect(split([1])).toEqual([1]);
    });

    it('is able to take and split an array with two elements', function () {
        expect(split([1, 2])).toEqual([[1],[2]]);
    });

    it('is able to split an array into two halves', function () {
        expect(split([1,4,2,3])).toEqual([[1,4],[2,3]]);
        expect(split([1,2,6,3,5,7,4])).toEqual([[1,2,6],[3,5,7,4]]);
        expect(split([1,2,6,3,5,7,4,8,10,9])).toEqual([[1,2,6,3,5],[7,4,8,10,9]]);
    });

    it('is able to merge two arrays into one sorted array', function () {
        expect(merge([1,4],[2,3])).toEqual([1,2,3,4]);
        expect(merge([1,4,5],[2,3])).toEqual([1,2,3,4,5]);
        expect(merge([1,4,6,7],[2,3,5,8])).toEqual([1,2,3,4,5,6,7,8]);
    });

    it('is able to merge two arrays into one sorted array, while one array is empty', function () {
        expect(merge([1,4],[])).toEqual([1,4]);
    });

    it('is able to work with strings', function () {
        expect(mergeSort(stringArray)).toEqual(['apple','banana','cat','dog']);
    });
});