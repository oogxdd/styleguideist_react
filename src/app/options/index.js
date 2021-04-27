import Color from './color'
import Spacing from './spacing'
import Radius from './radius'
import Style from './style'

const Options = () => {
  return (
    <div className="w-96 border-r flex flex-col">
      <Color />
      <Spacing />
      <Radius />
      <Style />
    </div>
  )
}

export default Options
