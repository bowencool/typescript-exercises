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

type NoRetFn = (...args: any[]) => void;
// type NoRetFn = () => void;
// interface NoRetFn {
// 	// (...args: any[]): void;
// 	(n:number): void;
// }
function debounce<F extends NoRetFn>(fn: F) {}

// ? WTF
const foo: NoRetFn = (n: number) => n;

debounce(foo);
