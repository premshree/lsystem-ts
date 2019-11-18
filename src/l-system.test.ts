import util from 'util';
import LSystem from './l-system';


describe('LSystem', () => {
  describe('Plant Fractal', () => {
    const properties = {
      axiom: 'X',
      productions: {
        X: 'F-[[X]+X]+F[+FX]-X',
        F: 'FF',
      },
      functions: {},
    };
    const lsystem = new LSystem(properties);
    it('returns the correct strings for various generations', () => {
      let expected = 'FF-[[F-[[X]+X]+F[+FX]-X]+F-[[X]+X]+F[+FX]-X]+FF[+FFF-[[X]+X]+F[+FX]-X]-F-[[X]+X]+F[+FX]-X';
      expect(lsystem.getString(2)).toEqual(expected);

      expected = 'FFFF-[[FF-[[F-[[X]+X]+F[+FX]-X]+F-[[X]+X]+F[+FX]-X]+FF[+FFF-[[X]+X]+F[+FX]-X]-F-[[X]+X]+F[+FX]-X]+FF-[[F-[[X]+X]+F[+FX]-X]+F-[[X]+X]+F[+FX]-X]+FF[+FFF-[[X]+X]+F[+FX]-X]-F-[[X]+X]+F[+FX]-X]+FFFF[+FFFFFF-[[F-[[X]+X]+F[+FX]-X]+F-[[X]+X]+F[+FX]-X]+FF[+FFF-[[X]+X]+F[+FX]-X]-F-[[X]+X]+F[+FX]-X]-FF-[[F-[[X]+X]+F[+FX]-X]+F-[[X]+X]+F[+FX]-X]+FF[+FFF-[[X]+X]+F[+FX]-X]-F-[[X]+X]+F[+FX]-X';
      expect(lsystem.getString(3)).toEqual(expected);
    });
  });

  describe('Hilbert Curve', () => {
    const properties = {
      axiom: 'A',
      productions: {
        A: 'lBfrAfArfBl',
        B: 'FrAflBfBlfArF',
      },
      functions: {},
    };
    const lsystem = new LSystem(properties);
    it('returns the correct strings for various generations', () => {
      let expected = 'lFrAflBfBlfArFfrlBfrAfArfBlflBfrAfArfBlrfFrAflBfBlfArFl';
      expect(lsystem.getString(2)).toEqual(expected);

      expected = 'lFrlBfrAfArfBlflFrAflBfBlfArFfFrAflBfBlfArFlflBfrAfArfBlrFfrlFrAflBfBlfArFfrlBfrAfArfBlflBfrAfArfBlrfFrAflBfBlfArFlflFrAflBfBlfArFfrlBfrAfArfBlflBfrAfArfBlrfFrAflBfBlfArFlrfFrlBfrAfArfBlflFrAflBfBlfArFfFrAflBfBlfArFlflBfrAfArfBlrFl';
      expect(lsystem.getString(3)).toEqual(expected);
    });
  });
});
