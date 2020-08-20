type Lengthwise = {
	length: number;
};

function createList<T extends number | Lengthwise>(): T[] {
	return [] as T[];
}

const numberList = createList<number>(); // ok
const stringList = createList<string>(); // ok
const arrayList = createList<any[]>(); // ok
const boolList = createList<boolean>(); // error

// type NoReturnFn = () => void;
// interface NoReturnFn {
//   (...args: any[]): void;
// }
type NoReturnFn = (...args: any[]) => void;
const foo: NoReturnFn = (n: number) => n;

// function debounce<F extends NoReturnFn>(fn: F) {}
// debounce(foo);
