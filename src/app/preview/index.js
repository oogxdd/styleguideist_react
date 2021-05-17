import { useContext } from 'react'
import { AppContext } from 'context'

import { Button, Input, Checkbox, Slider, Textarea, Radio, Select, Video, Logo } from 'components/atoms'
import { CheckboxGroup, ProductCard, RadioGroup, Feature } from 'components/molecules'
import { Comments, Feed, Form } from 'components/organisms'
import { Ecommerce, Blog } from 'components/templates'

const Preview = () => {
  const { selectedComponent } = useContext(AppContext)

  return (
    <div className="flex items-center justify-center w-full h-full">
      {/* atoms */}
      {selectedComponent === 'button' && <Button />}
      {selectedComponent === 'input' && <Input />}
      {selectedComponent === 'checkbox' && <Checkbox />}
      {selectedComponent === 'slider' && <Slider />}
      {selectedComponent === 'textarea' && <Textarea />}
      {selectedComponent === 'radio' && <Radio />}
      {selectedComponent === 'select' && <Select />}
      {selectedComponent === 'video' && <Video />}
      {selectedComponent === 'logo' && <Logo />}

      {/* molecules */}
      {selectedComponent === 'checkbox-group' && <CheckboxGroup />}
      {selectedComponent === 'product-card' && <ProductCard />}
      {selectedComponent === 'radio-group' && <RadioGroup />}
      {selectedComponent === 'feature' && <Feature />}

      {/* organisms */}
      {selectedComponent === 'comments' && <Comments />}
      {selectedComponent === 'feed' && <Feed />}
      {selectedComponent === 'form' && <Form />}

      {/* templates */}
      {selectedComponent === 'ecommerce' && <Ecommerce />}
      {selectedComponent === 'blog' && <Blog />}
    </div>
  )
}

export default Preview
