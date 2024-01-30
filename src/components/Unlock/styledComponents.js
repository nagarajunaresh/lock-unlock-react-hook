// Style your elements here
// styledComponents.js
import styled from 'styled-components'

export const LockUnlockWrapper = styled.div`
  text-align: center;
  margin: 20px;
`

export const StatusHeading = styled.p`
  font-family: 'Roboto';
  color: ${({isLocked}) => (isLocked ? 'red' : 'green')};
`

export const LockUnlockImage = styled.img`
  width: 100px; // Adjust the size as needed
  margin-bottom: 10px;
`
export const ToggleButton = styled.button`
  background-color: #06b6d4;
  color: white;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border: none;
  border-radius: 4px;
`
