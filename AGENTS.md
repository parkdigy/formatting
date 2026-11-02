# 에이전트 코딩 가이드

## 프로젝트

`@pdg/formatting`은 TypeScript 포맷팅 npm 라이브러리다. `src/index.ts`는 사업자번호·날짜·숫자·개인번호·전화번호·버전의 명명된 함수를 내보내고, 같은 함수를 짧은 이름으로 묶은 기본 객체도 제공한다. 날짜 처리에는 peer dependency인 `dayjs`를 사용한다.

- 구현과 공개 진입점: `src/`, `src/index.ts`
- API 동작 테스트: `test/*.test.ts` (Jest와 ts-jest)
- 예제: `examples/` (별도 npm 프로젝트, 현재 콘솔 출력 예제)
- 빌드와 배포: `rollup.config.js`, `package.json`, 추적 중인 생성물 `dist/`
- 상세 구조와 주의점: [프로젝트 구조](docs/agents/project.md)
- 구현 절차: [npm 패키지 개발 스킬](.agents/skills/npm-package-development/SKILL.md)

## 작업 원칙

1. `git status --short`와 관련 소스·설정을 먼저 읽고 기존 변경을 보존한다.
2. 요청 범위에 맞게 수정한다. 공개 API 변경 시 명명된 내보내기와 기본 객체, 타입, 테스트, README와 예제의 영향을 함께 확인한다. 기존 동작을 변경할 때는 호환성도 살핀다.
3. 문서와 작업 결과는 한글로 작성한다. 식별자와 명령은 원래 표기를 사용한다.
4. `dist/`는 직접 편집하지 않는다. 빌드가 `dist/*`를 삭제하고 다시 생성하므로 실행 전에 추적·미추적 파일과 기존 변경을 확인하고 보존한다.
5. 패키지 진입점·모듈 형식 변경 시 배포 파일과 실제 소비자의 `import`, `require`, 타입 해석을 검증한다. 현재 `type: module`과 CommonJS `.js` 출력의 조합은 Node 소비 환경에서 별도 확인이 필요하다.
6. 커밋·푸시·npm 게시 명령은 요청받은 경우에만 실행한다. `npm run pub`는 실제 게시를 수행하며, `git:commit`, `reset:gitignore`, `reinstall:module`도 작업 트리를 변경하므로 일반 검증에 사용하지 않는다.

## 검증

`.nvmrc`에 지정된 Node와 npm을 사용한다. 의존성이 없으면 루트에서 `npm install`을 실행한다. 예제는 `examples/`에서 별도로 설치한다. 잠금 파일은 Git 제외 대상이다.

```sh
npm run tsc
npm run lint
npm test -- --runInBand --watchman=false
```

루트 타입 검사와 lint는 `src/`만 대상으로 한다. 테스트는 ts-jest가 변환한다. 예제 변경 시 `cd examples && ./node_modules/.bin/tsc --noEmit && npm run dev`로 별도 확인한다.

빌드 관련 변경 시 `npm run build`를 확인한다. 이 명령은 Watchman 감시 설정 재등록, 테스트, Rollup 순으로 실행된다. Watchman이 없거나 접근 오류가 나면 위 테스트와 `./node_modules/.bin/rollup -c --bundleConfigAsCjs`를 별도로 실행하고 표준 빌드 전체의 통과로 보고하지 않는다. 배포 설정 변경 시 `npm pack --dry-run`과 실제 소비 환경도 확인한다.

문서만 수정할 때는 링크·경로·명령이 실제 설정과 일치하는지 확인한다. 완료 보고에는 변경 내용, 실행한 검증과 결과, 미확인 사항을 남긴다.
