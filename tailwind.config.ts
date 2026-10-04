import type { Config } from 'tailwindcss'
const config: Config = { content: ['./app/**/*.{ts,tsx}','./components/**/*.{ts,tsx}'], theme: { extend: { colors: { saffron:'#E65100', orange:'#FF7043', forest:'#2E7D32', green:'#4CAF50', slate:'#1E293B', cream:'#FFF8F0' }, boxShadow:{soft:'0 20px 60px rgba(30,41,59,.10)'} } }, plugins:[] }
export default config
