const assert = require('assert');
const Maths = require('../Maths');

describe('Basic math test', function() {
    it('Test if 1 equals 1', function() {
        assert.equal(1, 1);
    })

    it('Test if 1 equal 2', function() {
        assert.equal(1, 2);
    })
}); 

describe('Math test', function() {
    it('Test if 1 + 1 = 2', function() {
        assert.equal(Maths.add(1, 1), 2);
    });

    it('Test if 2 - 1 = 1', function() {
        assert.equal(Maths.sub(2, 1),1);
    });

});