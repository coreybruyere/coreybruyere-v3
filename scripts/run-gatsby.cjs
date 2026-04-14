'use strict'

const { spawnSync } = require('child_process')
const path = require('path')

const root = path.resolve(__dirname, '..')
process.chdir(root)

const gatsbyCli = require.resolve('gatsby/cli.js')
const nodeMajor = parseInt(process.versions.node.split('.')[0], 10)
const legacy = '--openssl-legacy-provider'
const parts = (process.env.NODE_OPTIONS || '')
  .split(/\s+/)
  .filter(Boolean)
if (
  nodeMajor >= 17 &&
  !parts.some((p) => p.includes('openssl-legacy-provider'))
) {
  parts.push(legacy)
}
process.env.NODE_OPTIONS = parts.join(' ')

const child = spawnSync(
  process.execPath,
  [gatsbyCli, ...process.argv.slice(2)],
  { cwd: root, stdio: 'inherit', env: process.env }
)

if (child.error) {
  console.error(child.error)
  process.exit(1)
}
process.exit(child.status === null ? 1 : child.status)
