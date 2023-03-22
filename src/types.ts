export interface StringSchema {
    name: string
    type: "string"
    validations: validation[]
    id: string
    required?: boolean
}

export interface validation {
    name: string
    value: string
}

export interface ObjectSchema {
    name: string
    type: "object",
    properties: (StringSchema | ObjectSchema)[]
    required?: boolean
    id: string
}

export type Schema = StringSchema | ObjectSchema