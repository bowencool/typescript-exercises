export type ElementOf<T extends Array<any>> = T extends (infer U)[] ? U : never;

type box = string[];
type whatsInBox = ElementOf<box>;

export type ConstructorParams<T> = T extends {
	new (...args: infer U): any
} ? U : never;

type params = ConstructorParams<RegExpConstructor>
