import { useState } from 'react'
import ImageView from './ImageView'

type ImageProps = React.ComponentProps<'img'>

// 이미지 로드 실패 시 기본 이미지로 대체해주는 공용 컴포넌트
const Image = (props: ImageProps) => {
  const [isError, setIsError] = useState(!props.src)

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    setIsError(true)
    props?.onError?.(e)
  }

  const handleImageLoad = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    setIsError(false)
    props?.onLoad?.(e)
  }

  return <ImageView {...props} isError={isError} onLoad={handleImageLoad} onError={handleImageError} />
}

export default Image
