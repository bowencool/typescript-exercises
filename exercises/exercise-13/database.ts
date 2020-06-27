import * as fs from "fs";
export class Database<T extends { [k: string]: any }> {
	protected filename: string;
	protected fullTextSearchFieldNames: string[];

	constructor(filename: string, fullTextSearchFieldNames: string[]) {
		this.filename = filename;
		this.fullTextSearchFieldNames = fullTextSearchFieldNames;
	}

	// todo
	async find(query: Query<T>): Promise<T[]> {
		const rez: T[] = [];
		const content: T[] = fs
			.readFileSync(this.filename, { encoding: "utf-8" })
			.split("\n")
			.filter((s) => s.startsWith("E"))
			.map((s) => JSON.parse(s.replace(/^E/, "")));

		for (let t of content) {
			console.log(t);
		}
		return rez;
	}
}
function query2judgement<T>(query: Query<T>) {
	let keys: string[] = Object.keys(query);
	return function (t: T): boolean {
		for (let key in keys) {
			if (key === '$and') {

			}
			// if (key in t) {
			// 	return query[key] === t[key];
			// }
		}
		return false;
	};
}

type CompareKeys = "$eq" | "$gt" | "$lt";
type Query<T> =
	| {
			$text: string;
	  }
	| {
			[K in keyof T]?: { $in: T[K][] };
	  }
	| {
			[K in keyof T]?: { [K1 in CompareKeys]?: T[K] };
	  }
	| {
			[K in "$and" | "$or"]?: {
				[K in keyof T]?: { [K1 in CompareKeys]?: T[K] };
			}[];
	  };

// interface Query<T> {
// 	[K in CompareKeys]: { [K1 in CompareKeys]?: T[K] };
// }
