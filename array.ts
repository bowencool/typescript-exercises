type whatArray<T extends Array<any>> = T extends (infer U)[] ? U : never;

type box = string[];
type whatsInBox = whatArray<box>; // string
// type aaa = box[number]
