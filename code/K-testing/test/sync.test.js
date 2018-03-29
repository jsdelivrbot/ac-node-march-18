// ============================================================================

const expect = require('chai').expect;
const should = require('chai').should;

should();

// ============================================================================

describe('Split/join', () => {

    let m = "mocha";

    it('TDD version', () => {
        expect(m.split("").length).to.equal(5);
        expect(m.split("").join("")).to.equal(m);
    });

    it('BDD version', () => {
        m.split("").should.have.lengthOf(5);
        m.split("").join("").should.equal(m);
    });

});
// ============================================================================
