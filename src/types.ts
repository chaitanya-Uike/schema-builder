export interface StringSchema {
    name: string
    type: "string"
    validations: validation[]
}

export interface validation {
    name: string
    value: string
}

export interface ObjectSchema {
    name: string
    type: "object",
    properties: (StringSchema | ObjectSchema)[]
    required: string[]
}

export type Schema = StringSchema | ObjectSchema