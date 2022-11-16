var Student = /** @class */ (function () {
    function Student(enrollment, name) {
        this._enrollment = enrollment;
        this._name = name;
        this._examsGrades = [];
        this._worksGrades = [];
    }
    Object.defineProperty(Student.prototype, "enrollment", {
        get: function () {
            return this._enrollment;
        },
        set: function (value) {
            this._enrollment = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "name", {
        get: function () {
            return this.name;
        },
        set: function (value) {
            if (value.length < 3) {
                throw new Error('O nome deve conter no mínimo 3 caracteres.');
            }
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "examsGrades", {
        get: function () {
            return this._examsGrades;
        },
        set: function (value) {
            if (value.length > 4) {
                throw new Error('A pessoa só pode possuir 4 notas de provas.');
            }
            this._examsGrades = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "worksGrades", {
        get: function () {
            return this._worksGrades;
        },
        set: function (value) {
            if (value.length > 2) {
                throw new Error('A pessoa só pode possuir 2 notas de trabalho.');
            }
            this._worksGrades = value;
        },
        enumerable: false,
        configurable: true
    });
    Student.prototype.sumGrades = function () {
        var noteExams = this.examsGrades.reduce(function (acc, curr) {
            return acc += curr;
        }, 0);
        var noteWorks = this.worksGrades.reduce(function (acc, curr) {
            return acc += curr;
        }, 0);
        return noteExams + noteWorks;
    };
    Student.prototype.averageGrade = function () {
        var sumGrades = this.sumGrades();
        return Math.round(sumGrades / 6);
    };
    return Student;
}());
// teste
var personOne = new Student('202001011', 'Gabriel Barbosa');
personOne.examsGrades = [9, 8, 7, 10];
personOne.worksGrades = [7, 8];
console.log(personOne.sumGrades());
console.log(personOne.averageGrade());
console.log(personOne);
var personTwo = new Student('202001012', 'Giorgian Arrascaeta');
personTwo.examsGrades = [10, 9, 9, 10];
personTwo.worksGrades = [10, 9.5];
console.log(personTwo);
