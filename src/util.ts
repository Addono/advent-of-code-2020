import * as fs from 'fs'

export const loadData = (defaultPath: string): Buffer => {
  const pathname = process.argv[2] ?? defaultPath

  console.log(`Loading input from: ${pathname}`)

  return fs.readFileSync(pathname)
}

export const loadDataAsStringArray = (defaultPath: string): string[] => loadData(defaultPath).toString().split("\n")

export const sum = (a: number, b: number) => a + b

export const multiply = (a: number, b: number) => a * b
