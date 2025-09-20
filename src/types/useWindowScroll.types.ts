export interface ICoords {
	x: number;
	y: number;
}
export type PartCoords = Partial<ICoords>;

export type UseWindowScrollReturn = [ICoords, (arg: PartCoords) => void];
