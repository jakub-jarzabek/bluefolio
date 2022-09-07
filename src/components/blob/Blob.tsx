import { Blob } from 'react-blob'
export const BackgroundBlob = ({ style, props }) => (
  <Blob
    size="100vh"
    style={{
      position: 'absolute',
      top: '-15%',
      right: '-15%',
      zIndex: 1,
      backgroundColor: '#21D4FD',
      color: 'white',
      opacity: 0.05,
      fontSize: '50vh',
      ...style,
    }}
    {...props}
  />
)
