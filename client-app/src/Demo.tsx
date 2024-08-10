export interface IDuck {
    name: string;
    numLegs: number;
    makeSound: (sound: string) => void;
}

const duck1: IDuck =
{
    name: "monkey",
    numLegs: 2,
    makeSound: (sound: string) => console.log(sound)
}
const duck2: IDuck =
{
    name: "donkey",
    numLegs: 2,
    makeSound: (sound: string) => console.log(sound)
}

export const ducks = [duck1, duck2]