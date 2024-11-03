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

export type Building = {
    type: "windTurbine" | "house" | "ecoCommandCenter"
    level: number,
    description?: string,
    url?: string
}
