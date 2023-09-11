import fs from 'fs'
import path from 'path'

const decksDirectory = path.join(process.cwd(), 'data', 'decks') // The process.cwd() method returns the current working directory of the Node.js process.

export async function getDeck(deck: string) {
  const fullPath = path.join(decksDirectory, `${deck}.json`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  return JSON.parse(fileContents)
}