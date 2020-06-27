export class Database<T> {
  protected filename: string;
  protected fullTextSearchFieldNames: string[];

  constructor(filename: string, fullTextSearchFieldNames: string[]) {
    this.filename = filename;
    this.fullTextSearchFieldNames = fullTextSearchFieldNames;
  }

	// interface Q {}
  // todo
  async find(
    query: {
      [K in keyof T]: { $el: T[K] };
    }
  ): Promise<T[]> {
    return [];
  }
}
