// src/app.html(본문 형태, 아티팩트와 같은 원본) → public/index.html(완전한 문서, Cloudflare 배포용)
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
const body = readFileSync(new URL('./src/app.html', import.meta.url), 'utf8');
const head = '<!doctype html><html lang="ko"><head><meta charset="utf-8">'
  + '<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">'
  + '<meta name="theme-color" content="#f6f7f9">'
  + '<style>:root{padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px)}'
  + 'body{margin:0;font-size:14px}img{max-width:100%}[hidden]{display:none!important}</style></head><body>';
mkdirSync(new URL('./public/', import.meta.url), { recursive: true });
writeFileSync(new URL('./public/index.html', import.meta.url), head + body + '</body></html>');
console.log('built public/index.html');
