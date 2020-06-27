declare module "stats" {
  // type Comparator = Parameters<typeof Array.prototype.sort>;
  type Comparator = (a: any, b: any) => number;
  // TODO
  interface Fn {
    (input: any[], comparator: Comparator): any;
  }

  export const getMaxIndex: Fn;
  export const getMaxElement: Fn;
  export const getMinIndex: Fn;
  export const getMinElement: Fn;
  export const getMedianIndex: Fn;
  export const getMedianElement: Fn;
  export const getAverageValue: Fn;
}
