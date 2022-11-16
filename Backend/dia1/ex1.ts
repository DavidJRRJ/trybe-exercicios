class Student {
  private _enrollment: string;
  private _name: string;
  private _examsGrades: number[];
  private _worksGrades: number[];
  
  constructor(enrollment: string, name: string) {
    this._enrollment = enrollment;
    this._name = name;
    this._examsGrades = [];
    this._worksGrades = [];
  }

  get enrollment(): string {
    return this._enrollment;
  }

  set enrollment(value: string) {
    this._enrollment = value;
  }

  get name(): string {
    return this.name;
  }

  set name(value: string) {
    if (value.length < 3) {
      throw new Error('O nome deve conter no mínimo 3 caracteres.');
    }

    this._name = value;
  }

  get examsGrades(): number[] {
    return this._examsGrades;
  }

  set examsGrades(value: number[]) {
    if (value.length > 4) {
      throw new Error('A pessoa só pode possuir 4 notas de provas.');
    }

    this._examsGrades = value;
  }

  get worksGrades(): number[] {
    return this._worksGrades;
  }

  set worksGrades(value: number[]) {
    if (value.length > 2) {
      throw new Error('A pessoa só pode possuir 2 notas de trabalho.');
    }

    this._worksGrades = value;
  }

  sumGrades(): number {
    const noteExams = this.examsGrades.reduce((acc, curr) => {
     return acc += curr;
    }, 0);
    const noteWorks = this.worksGrades.reduce((acc, curr) => {
      return acc += curr;
    }, 0);

    return noteExams + noteWorks
  }

  averageGrade(): number {
    const sumGrades = this.sumGrades();

    return Math.round(sumGrades / 6);
  }
}

// teste

const personOne = new Student('202001011', 'Gabriel Barbosa');

personOne.examsGrades = [9, 8, 7, 10];
personOne.worksGrades = [7, 8];
console.log(personOne.sumGrades());
console.log(personOne.averageGrade());

console.log(personOne);

const personTwo = new Student('202001012', 'Giorgian Arrascaeta');

personTwo.examsGrades = [10, 9, 9, 10];
personTwo.worksGrades = [10, 9.5];

console.log(personTwo);



