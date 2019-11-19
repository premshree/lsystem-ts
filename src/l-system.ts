/**
 * A simple L-System implementation in TypeScript
 */

type Axiom = string;
interface Productions {
  [key: string]: string;
}

interface ProductionFunctions {
  [key: string]: () => void;
}

interface LSystemProperties {
  axiom: Axiom;
  productions: Productions;
  functions: ProductionFunctions;
}

/* eslint import/prefer-default-export: 0 */
class LSystem {
  axiom: Axiom;

  productions: Productions;

  functions: ProductionFunctions;

  generations: number;

  constructor(lsystem: LSystemProperties) {
    this.axiom = lsystem.axiom;
    this.productions = lsystem.productions;
    this.functions = lsystem.functions;
    this.generations = 0;
  }

  setProductions(productions: Productions): LSystem {
    this.productions = productions;
    return this;
  }


  getString(generations: number): string {
    const fragmentIterator = this.getStringFragment(generations);
    let it = fragmentIterator.next();
    while (it) {
      if (it.done) {
        return it.value;
      }
      it = fragmentIterator.next();
    }

    return '';
  }


  * getStringFragment(generations: number): IterableIterator<string> {
    let gens: number = generations;
    if (this.axiom === null) {
      throw new Error('Axiom is null!');
    }

    let lsys = this.axiom;

    while (gens > 0) {
      lsys = Array.prototype.map.call(lsys, (char: string) => this.productions[char] || char).join('');
      gens -= 1;
      yield lsys;
    }

    return lsys;
  }

  produce(generations: number): void {
    this.generations = generations;
    const string = this.getString(generations);
    Array.prototype.forEach.call(string, (char: string) => {
      /* eslint no-unused-expressions: 0 */
      this.functions[char] && this.functions[char]();
    });
  }
}

export default LSystem;
