import Options from './options'
import Components from './components'
import Sections from './sections'
import Preview from './preview'

const App = () => {
  return (
    <div className="flex h-screen">
      <Options />
      <Components />
      <div className="flex flex-col w-full">
        <Sections />
        <Preview />
      </div>
    </div>
  )
}

export default App
