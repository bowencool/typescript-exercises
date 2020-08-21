class Animal {
	numLegs: number = 0;
}

class Bee extends Animal {}

//? where is the document about `new`?
function createInstance<A extends Animal>(c: new () => A): A {
	return new c();
}
