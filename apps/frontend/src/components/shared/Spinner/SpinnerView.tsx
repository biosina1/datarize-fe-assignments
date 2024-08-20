import styles from './SpinnerView.module.scss'
import spinner from '../../../assets/images/spinner.gif'

interface SpinnerProps {
  className?: string
}

const Spinner = ({ className = '' }: SpinnerProps) => {
  return (
    <div className={`${styles.spinner} ${className}`}>
      <img src={spinner} alt="스피너" />
    </div>
  )
}

export default Spinner
