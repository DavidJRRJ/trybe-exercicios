export function greeter(name: string):string {
    return `Olá, ${name}!`;
}

export function personAge(name: string, age: number): string {
    return `${name} tem ${age} anos!`;
}

export function add(x: number, y: number): number {
    return x + y;
}

export function sumArray(numbers: number[]): number {
    return numbers.reduce(add, 0);
}

export function triangle(base: number, height: number): number {
    return (base * height) /2;
}

export function square(side: number): number {
    return side ** 2;
}

export function rectangle(base: number, height: number): number {
    return base * height;
}

export function losango(dMaior: number, dMenor: number): number {
    return (dMaior * dMenor) /2;
}

export function trapezio(bMaior: number, bMenor: number, altura: number): number {
    return ((bMaior + bMenor) * altura) / 2;
}

export function circleArea(altura: number): number {
    return (altura ** 2) * 3.14;
}