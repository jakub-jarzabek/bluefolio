import { Blob } from 'react-blob'
interface BlobProps {
  style?: any
  props?: any
}
export const BackgroundBlob: React.FC<BlobProps> = ({ style, props }) => (
  <>
    <Blob
      size="700px"
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
    <Blob
      size="700px"
      style={{
        position: 'absolute',
        bittom: '-5',
        left: '-15%',
        zIndex: 1,
        backgroundColor: '#21D4FD',
        color: 'white',
        opacity: 0.05,
        fontSize: '50vh',
        ...style,
      }}
      {...props}
    />
  </>
)

export const CardsBlob: React.FC<BlobProps> = ({ style, props }) => (
  <>
    <Blob
      size="400px"
      style={{
        position: 'absolute',
        top: '40%',
        right: '15%',
        zIndex: 1,
        backgroundColor: '#FF10F0',
        color: 'white',
        opacity: 0.05,
        fontSize: '50vh',
        ...style,
      }}
      {...props}
    />
    <Blob
      size="400px"
      style={{
        position: 'absolute',
        left: '5%',
        zIndex: 1,
        backgroundColor: '#FF10F0',
        color: 'white',
        opacity: 0.05,
        fontSize: '50vh',
        ...style,
      }}
      {...props}
    />
  </>
)
