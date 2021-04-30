import { useContext } from 'react'
import { AppContext } from 'context'
import { atoms, molecules, organisms, templates } from 'data'

const Components = () => {
  const { selectedSection, selectedComponent, setComponent } = useContext(
    AppContext,
  )

  return (
    <div className="w-96 border-r flex flex-col">
      {selectedSection === 'atoms' &&
        atoms.map((component) => (
          <Component
            active={component.value === selectedComponent}
            onClick={() => setComponent(component.value)}
            key={component.value}
          >
            {component.label}
          </Component>
        ))}
      {selectedSection === 'molecules' &&
        molecules.map((component) => (
          <Component
            active={component.value === selectedComponent}
            onClick={() => setComponent(component.value)}
            key={component.value}
          >
            {component.label}
          </Component>
        ))}
      {selectedSection === 'organisms' &&
        organisms.map((component) => (
          <Component
            active={component.value === selectedComponent}
            onClick={() => setComponent(component.value)}
            key={component.value}
          >
            {component.label}
          </Component>
        ))}
      {selectedSection === 'templates' &&
        templates.map((component) => (
          <Component
            active={component.value === selectedComponent}
            onClick={() => setComponent(component.value)}
            key={component.value}
          >
            {component.label}
          </Component>
        ))}
    </div>
  )
}

const Component = ({ children, active, onClick }) => (
  <span
    onClick={onClick}
    style={active ? { color: 'blue', textDecoration: 'underline' } : {}}
    className="cursor-pointer hover:underline"
  >
    {children}
  </span>
)

export default Components
