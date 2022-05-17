const books = [
    {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
      },
      releaseYear: 1991,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: {
        name: 'J. R. R. Tolkien',
        birthYear: 1892,
      },
      releaseYear: 1954,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: {
        name: 'Isaac Asimov',
        birthYear: 1920,
      },
      releaseYear: 1951,
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: {
        name: 'Frank Herbert',
        birthYear: 1920,
      },
      releaseYear: 1965,
    },
    {
      id: 5,
      name: 'A Coisa',
      genre: 'Terror',
      author: {
        name: 'Stephen King',
        birthYear: 1947,
      },
      releaseYear: 1986,
    },
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: {
        name: 'H. P. Lovecraft',
        birthYear: 1890,
      },
      releaseYear: 1928,
    },
  ];
  
  // Exercício 1 - 

  function authorBornIn1947(data) {
   const first = books.find(birth => birth.author.birthYear === 1947);
   return first;
  }

  //console.log(authorBornIn1947());

// Exercício 2 -

function smallerName() {
  let nameBook = 0;
  // escreva aqui o seu código

  books.forEach((book) => {
    if (nameBook == 0 || book.name.length < nameBook.length) {
      nameBook = book.name;
    }
  });
  // Variável nameBook que receberá o valor do menor nome;
  return nameBook;
}

//console.log(smallerName());

// Exercício 3 -

function getNamedBook() {
  const named = books.find(num => num.name.length === 26);
  return named;
}

//console.log(getNamedBook());

// Exercício 4 -

function booksOrderedByReleaseYearDesc() {
  const ordem = books.sort((a, b) => a.releaseYear - b.releaseYear);
  return ordem;
}

//console.log(booksOrderedByReleaseYearDesc());

// Exercício 5 -

function everyoneWasBornOnSecXX() {
  const seculo = books.every(sec => sec.author.birthYear > 1900);
  return seculo;
}

//console.log(everyoneWasBornOnSecXX());

// Exercício 6 - 

function someBookWasReleaseOnThe80s() {
  const algum = books.some(alg => alg.releaseYear >= 1980);
  return algum;
}

//console.log(someBookWasReleaseOnThe80s());

// Exercício 7 -

function authorUnique() {
  return books.every((book) =>
    !books.some((bookSome) =>
      (bookSome.author.birthYear === book.author.birthYear)
      && (bookSome.author.name !== book.author.name)));
}

console.log(authorUnique())