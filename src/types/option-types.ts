export interface Option {
  value: string
  label: string
  checkedValue: boolean
  id: string
}

export interface CommonData {
  data: {
    selects: Record<string, string>
    label: string
    options: Option[]
  }
}