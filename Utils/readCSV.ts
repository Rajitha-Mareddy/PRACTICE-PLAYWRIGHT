import fs from 'fs'
import path from 'path'
import { parse } from 'csv-parse/sync'

export function readCSV(filePath: string) {

  const fullPath = path.resolve(filePath)

  console.log(fullPath)
console.log(fs.existsSync(fullPath))

  const fileContent = fs.readFileSync(fullPath, 'utf-8')

  return parse(fileContent, {
    columns: true,
    skip_empty_lines: true
  })
}