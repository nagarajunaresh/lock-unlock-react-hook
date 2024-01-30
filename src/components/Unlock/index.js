import {useState} from 'react'
import {
  LockUnlockWrapper,
  StatusHeading,
  LockUnlockImage,
  ToggleButton,
} from './styledComponents' // Adjust the path based on your project structure

const LockUnlockComponent = () => {
  const [isLocked, setIsLocked] = useState(true)

  const toggleLock = () => {
    setIsLocked(prevIsLocked => !prevIsLocked)
  }

  return (
    <LockUnlockWrapper>
      <LockUnlockImage
        src={
          isLocked
            ? 'https://assets.ccbp.in/frontend/hooks/lock-img.png'
            : 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'
        }
        alt={isLocked ? 'lock' : 'unlock'}
      />
      <StatusHeading isLocked={isLocked}>
        {isLocked ? 'Your Device is Locked' : 'Your Device is Unlocked'}
      </StatusHeading>
      <ToggleButton onClick={toggleLock}>
        {isLocked ? 'Unlock' : 'Lock'}
      </ToggleButton>
    </LockUnlockWrapper>
  )
}

export default LockUnlockComponent
