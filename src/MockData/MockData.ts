export type MockDataType = {
    id: number;
    name: string;
    info: string;
    price: number;
    color: ColorType[]
}

type ColorType = {
    id: number,
    color: string
}

export const MockData: MockDataType[] = [{
    id: 1,
    name: 'Zebronics head phone',
    info: 'A portable headphone with a battery life of 20 hours and IP67 rating. Comes with a 3 years warranty.',
    price: 100,
    color: [
        {id: 1, color: '#EE4444'},
        {id: 2, color: '#3C81F6'},
        {id: 3, color: '#000000'}]
}]