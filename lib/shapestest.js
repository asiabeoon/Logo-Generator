const Validate = require('../shapes.js');

describe('Validate', () => {
  // TODO: Write a test that checks that the isLogo() meets all of the requirements
  

  describe('Shape Choice', () => {
    it('should return false if a triangle, circle or square is chosen ', () => {
      const validate = new Validate();
      const result = validate.isLogo('pass');

      expect(result).toEqual(false);
    });
  });

  // TODO: Write a test that checks if isLogo() returns false when the password does not contain at least 1 uppercase.

  describe('Shape Color', () => {
    it('should return false if a shape color isn\'t selected or recognized', () => {
      const validate = new Validate();
      const result = validate.isLogo('');

      expect(result).toEqual(false);
    });
  });

  // TODO: Write a test that checks if isLogo() returns false when the password does not contain at least 1 lowercase.

  describe('Shape Text-Length', () => {
    it('should return false if the text for the logo is less than 3 characters long', () => {
      const validate = new Validate();
      const result = validate.isLogo('');

      expect(result).toEqual(false);
    });
  });

  // TODO: Write a test that checks if isLogo() returns false when the password does not contain at least 1 number.

  describe('Shape Text-Color', () => {
    it('should return false if a text color isn\'t selected or recognized', () => {
      const validate = new Validate();
      const result = validate.isLogo('');

      expect(result).toEqual(false);
    });
  });

  // TODO: Write a test that checks if the isLogo() returns true when a shape and shape color is chosen, the text is 3 characters long and a text color is selected.

  describe('Password Valid', () => {
    it('should return true if logo returns true when a shape and shape color is chosen, the text is 3 characters long and a text color is selected.', () => {
      const validate = new Validate();
      const result = validate.isLogo('');

      expect(result).toEqual(false);
    });
  });
});
