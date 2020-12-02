import * as fs from 'fs'

export const loadData = (defaultPath: string): Buffer => {
  const pathname = process.argv[2] ?? defaultPath

  console.log(`Loading input from: ${pathname}`)

  return fs.readFileSync(pathname)
}
