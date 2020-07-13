declare module "stats" {
	// type Comparator = Parameters<typeof Array.prototype.sort>;
	type Comparator<T> = (a: T, b: T) => number;
	interface Fn {
	  <T>(input: T[], comparator: Comparator<T>): number;
	}

	// export const getMaxIndex: Fn;
	// export const getMaxElement: Fn;
	export const getMinIndex: Fn;
	// export const getMinElement: Fn;
	// export const getMedianIndex: Fn;
	// export const getMedianElement: Fn;
	// export const getAverageValue: Fn;
	export function getMaxIndex<T>(
		input: T[],
		comparator: Comparator<T>
	): number;

	// export const getMinIndex: typeof getMaxIndex;
	export const getMedianIndex: typeof getMaxIndex;

	export function getMaxElement<T>(
		input: T[],
		comparator: Comparator<T>
	): T;
	export const getMinElement: typeof getMaxElement;
	export const getMedianElement: typeof getMaxElement;

	export function getAverageValue<T>(
		input: T[],
		fn: (arg0: T) => number
	): number;
}
