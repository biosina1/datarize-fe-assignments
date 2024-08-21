import { useNavigate } from 'react-router-dom'
import NotFoundView from './NotFoundView'

const NotFoundPage = () => {
  const navigate = useNavigate()

  const handleGoHomeButtonClick = () => {
    navigate('/')
  }

  return <NotFoundView onGoHomeButtonClick={handleGoHomeButtonClick} />
}

export default NotFoundPage
