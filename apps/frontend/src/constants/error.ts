export type ErrorMessage = {
  status?: number
  title: string
  message: string
  buttonName?: string
  routePath?: string
}

export const ERROR_MESSAGES: {
  [key: string]: ErrorMessage
} = {
  400: {
    title: '입력 정보 오류',
    message: '입력한 정보를 확인하세요.',
    buttonName: '재요청',
  },
  403: {
    title: '접근 권한 없음',
    message: '접근 권한이 없습니다.',
    buttonName: '홈으로 가기',
    routePath: '/',
  },
  404: {
    title: '데이터 조회 실패',
    message: '요청하신 데이터가 존재하지 않습니다.',
  },
  500: {
    title: '서버 오류 발생',
    message: '잠시 후 다시 시도해 주세요.',
    buttonName: '재요청',
  },
  default: {
    title: '알 수 없는 오류',
    message: '잠시 후 다시 시도해 주세요.',
    buttonName: '재요청',
  },
}
