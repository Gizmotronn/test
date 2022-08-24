import ColourGlobe from '../components/ColourGlobe'
import ColourGlobe20 from '../components/ColourGlobe20'
import AudioGlobeBlack from '../components/AudioGlobeBlack'
import AudioGlobeGrey from '../components/AudioGlobeGrey'
import DataTest from '../components/DataTest'

const Anime = () => {
  return (
    <div style={{ display: 'flex' }}>
      <ColourGlobe />
      <ColourGlobe20 />
      <AudioGlobeBlack />
      <AudioGlobeGrey />
      <DataTest />
    </div>
  )
}

export default Anime
