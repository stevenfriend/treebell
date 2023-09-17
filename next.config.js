/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  output: 'export',
 
  // Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
  trailingSlash: true,

  basePath: '/treebell',
  
  env: {
    basePath: '/treebell',
  },

  images: { 
    unoptimized: true 
  }
}
 
module.exports = nextConfig
