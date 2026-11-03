# 붓결 드로잉

갤럭시 탭과 S펜에 맞춘 웹 그림 앱. 주소: https://butgyeol.pages.dev/

## 구조
- `src/app.html` — 원본 (claude.ai 아티팩트와 같은 본문 형태). 버전은 `const VERSION`
- `public/index.html` — 배포용 완전한 문서 (`node build.mjs` 로 생성, 커밋에 포함)
- `public/sw.js` · `manifest.webmanifest` · 아이콘 — 앱 설치(PWA)·오프라인. 빌드할 때 sw.js 캐시 이름이 버전에 맞춰 바뀜
- `public/_headers` — sw.js·index.html 캐시하지 않기 (Cloudflare Pages)

## 고치고 배포하기
1. `src/app.html` 수정 (기능을 바꾸면 VERSION 올리기)
2. `node build.mjs`
3. 커밋 후 `main` 에 push → Cloudflare Pages가 자동 배포 (빌드 명령 없음, 출력 디렉터리 `public`)

## 기능
- 브러시 33종 + 지우개 (잉크·드로잉·칠하기·질감·효과 탭, 즐겨찾기, 내 브러시 복제·내보내기·가져오기), 브러시별 세부 설정(붓 끝 모양·흩뿌리기·흔들림·무지개·수채 가장자리·색 섞기·합성 방식)
- 레이어(합성 모드 16종·투명 픽셀 잠금·클리핑·마스크·폴더(통과)·참조·잠금), 채우기(참조 레이어 기준), 스포이드
- 선택(사각형·올가미·전체·반전) → 선택 안에만 그리기/채우기, 지우기, 새 레이어로 복사
- 변형: 이동·크기·회전·뒤집기
- 작품 보관함(이 기기 브라우저 IndexedDB): 여러 작품, 이름 바꾸기·복제·삭제
- 내보내기: PNG, PSD(ag-psd, 레이어 유지), 작품 파일(.json, 다시 열기 가능)
- 제스처: 두 손가락 이동·확대·회전, 두/세 손가락 탭 실행 취소/다시 실행, 길게 눌러 색 뽑기
