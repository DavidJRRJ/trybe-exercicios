const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
  ];
  
  function flatten(acc, element) {
    acc.push(element);
    return acc;
  }

  console.log(arrays.reduce(flatten));