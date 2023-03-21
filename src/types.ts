export interface StringSchema {
    type: "string"
    min?: number
    max?: number
    length?: number
    match?: RegExp
    includes?: string
    startsWith?: string
    endsWith?: string
    format?: "email" | "url" | "uuid" | "ip" | "phone-no" | "date"
    isAlpha?: boolean
    isAlNum?: boolean
    isNum?: boolean
}

export interface ObjectSchema {
    type: "object",
    properties: { [property: string]: StringSchema | ObjectSchema }
    required: string[]
}

export type Schema = StringSchema | ObjectSchema