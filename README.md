# 붓결 드로잉

갤럭시 탭과 S펜에 맞춘 웹 그림 앱. 단일 HTML, 외부 라이브러리 없음.

## 구조
- `src/app.html` — 원본 (claude.ai 아티팩트와 같은 본문 형태)
- `public/index.html` — 배포용 완전한 문서 (`node build.mjs` 로 생성, 커밋에 포함)
- `wrangler.jsonc` — Cloudflare 배포 설정 (`public/` 를 정적 자산으로)

## 고치고 배포하기
1. `src/app.html` 수정
2. `node build.mjs`
3. 커밋 후 `main` 에 push → Cloudflare가 자동 배포

## 주요 기능
필압 브러시(펜·연필·에어브러시·마커·지우개), S펜 버튼 지우개, 손떨림 보정, 레이어(합성 모드·투명 픽셀 잠금),
채우기·스포이드, 두 손가락 이동·확대·회전, 두/세 손가락 탭 실행 취소/다시 실행, 자동 저장(IndexedDB), PNG 저장.
