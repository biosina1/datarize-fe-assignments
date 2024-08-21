<h1>데이터라이즈 과제</h1>

<h2>실행 방법</h2>

1. **프로젝트 받아오기**

   ```sh
   git clone https://github.com/biosina1/datarize-fe-assignments.git
   ```

2. **의존성 설치**

   ```sh
   cd apps
   yarn install
   ```

3. **실행**
   ```sh
    yarn start-server
    yarn start-client
   ```

<h2>기술 스택</h2>

- React
- TypeScript
- Vite
- `TanStack Query`
- `SCSS(CSS Module)`
- `Axios`
- `Rechart`

<h2>폴더 구조</h2>

```sh
├── public
├── src
│   ├── apis
│   ├── assets
│   ├── clients
│   ├── components
│   ├── constants
│   ├── contexts
│   ├── pages
│   ├── queries
│   ├── styles
│   ├── types
│   ├── utils
│   ├── App.tsx
│   ├── main.tsx
│   ├── vite-env.d.tsx
├── .eslintrc.cjs
├──  package.json
├──  tsconfig.app.json
├──  tsconfig.json
├──  tsconfig.node.json
├──  vite.config.ts
```

<h2>기능 구현</h2>

<h3>가격대별 구매 빈도 차트</h3>

- 차트 구현
  - Rechart 라이브러리를 활용하여 BarChart 구현
  - X축 가격 범위, Y축 구매 수량 표출
  - 각 라벨 및 툴팁 영문을 한글로 포맷팅
- 기간 조회
  - 디폴트 조회 기간 `7.1 ~ 7.31`
  - 조회 기간 변경 시 API 재요청 및 차트 갱신

<h3>가장 많이 구매한 고객 목록 및 검색 기능</h3>

- 이름 검색
  - 이름 검색 후 검색 버튼 클릭 시 API 요청
  - 존재하지 않는 이름 검색 시 메시지 표출
- 정렬 순서
  - 오름차순, 내림차순 셀렉트 박스 구현
  - 각 옵션 선택 시 API 재요청 및 고객 목록 갱신
- 검색 및 정렬 순서에 따른 고객 목록 표출
- 고객 목록 아이템 클릭 시 고객 구매 상세 페이지로 이동

<h3>고객 ID 기반 상세 기능</h3>

- 고객 구매 내역 목록 표출
