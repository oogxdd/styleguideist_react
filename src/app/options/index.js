import Color from './color'
import Spacing from './spacing'
import Radius from './radius'
import Style from './style'
import Font from './font'

const Options = () => {
  return (
    <div className="w-96 border-r flex flex-col p-4">
      <Color />
      <Spacing />
      <Radius />
      <Style />
      <Font />
    </div>
  )
}

export default Options
