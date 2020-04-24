import * as validateInput from './validateInput.js';

describe('isValidUrl function', () => {
    it('returns true if valid url else returns false', () => {
        expect(validateInput.isValidUrl('https://en.wikipedia.org/wiki/Abraham_Lincoln')).toBe(true);
    });
});

describe('isValidUrl function', () => {
    it('returns true if valid url else returns false', () => {
        expect(validateInput.isValidUrl('not valid url')).toBe(false);
    });
});

describe('isValidText function', () => {
    it('returns true if valid text else returns false', () => {
        expect(validateInput.isValidText('valid text')).toBe(true);
    });
});

describe('isValidText function', () => {
    it('returns true if valid text else returns false', () => {
        expect(validateInput.isValidText('123 is not a valid text')).toBe(false);
    });
});