describe('Split Array function', function() {
    var array;
    beforeEach(function () {
        sortedArray = [1, 4, 12, 15, 18, 34, 56, 77, 78, 80];
        unsortedArray = [23, 5, 86, 32, 11, 45, 72, 15, 32];
        stringArray = ['apple', 'dog', 'cat', 'banana']
    })
    
    it('is able to split an array into two halves', function() {
            expect(split([1,2])).toEqual([[1],[2]]);
    });

  });