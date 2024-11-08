export type Field = {
    id: string,
    dimensions?: FieldDimensions,
    building?: Building
}

export type FieldDimensions = {
    fieldId?: string,
    x: number,
    y: number,
    w: number,
    h: number,
}

export type Cost = {
    coins?: string,
    energy?: string,
    ecoCredits?: string,
}

export type Consumption = {
    energy: string
}

export type Benefit = {
    residents?: string,
    energy?: string,
}   


export type Building = {
    type: "windTurbine" | "house" | "ecoCommandCenter"
    level: number,
    name?: string,
    description?: string,
    imageUrl?: string
    cost?: Cost,
    consumption?: Consumption,
    benefit?: Benefit,
    maxBuilt?: number,
}
