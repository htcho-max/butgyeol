// src/app.html(본문 형태, 아티팩트와 같은 원본) → public/index.html(완전한 문서, Cloudflare 배포용)
// public/ 의 sw.js · manifest · 아이콘은 직접 관리하는 파일. 버전을 올리면 sw.js 의 CACHE 이름도 함께 바뀜.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
const body = readFileSync(new URL('./src/app.html', import.meta.url), 'utf8');
const ver = (body.match(/const VERSION='([^']+)'/) || [])[1] || 'dev';
const head = '<!doctype html><html lang="ko"><head><meta charset="utf-8">'
  + '<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">'
  + '<meta name="theme-color" content="#f6f7f9" media="(prefers-color-scheme: light)">'
  + '<meta name="theme-color" content="#1f2228" media="(prefers-color-scheme: dark)">'
  + '<link rel="manifest" href="manifest.webmanifest">'
  + '<link rel="icon" href="icon-192.png" sizes="192x192">'
  + '<link rel="apple-touch-icon" href="apple-touch-icon.png">'
  + '<meta name="mobile-web-app-capable" content="yes">'
  + '<style>:root{padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px)}'
  + 'body{margin:0;font-size:14px}img{max-width:100%}[hidden]{display:none!important}</style>'
  + '<script>if("serviceWorker" in navigator&&location.protocol==="https:")addEventListener("load",()=>navigator.serviceWorker.register("sw.js").catch(()=>{}));</script>'
  + '</head><body>';
mkdirSync(new URL('./public/', import.meta.url), { recursive: true });
writeFileSync(new URL('./public/index.html', import.meta.url), head + body + '</body></html>');
const swPath = new URL('./public/sw.js', import.meta.url);
const sw = readFileSync(swPath, 'utf8').replace(/const CACHE='[^']*'/, `const CACHE='butgyeol-${ver}'`);
writeFileSync(swPath, sw);
console.log('built public/index.html', ver);
