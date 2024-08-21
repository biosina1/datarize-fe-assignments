import styles from './ImageView.module.scss'
import DefaultImage from '../../../assets/images/default-image.svg?react'

interface ImageViewProps extends React.HTMLAttributes<HTMLImageElement> {
  isError: boolean
  className?: string
}

const ImageView = ({ isError, ...props }: ImageViewProps) => {
  return isError ? (
    <DefaultImage className={`${styles.defaultImage} ${props.className ?? ''}`} title="기본 이미지" />
  ) : (
    <img {...props} />
  )
}

export default ImageView
