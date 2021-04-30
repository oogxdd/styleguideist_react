import { useContext } from 'react'
import { AppContext } from 'context'

import { Button, Input, Checkbox, Slider } from 'components/atoms'
import { CheckboxGroup, ProductCard } from 'components/molecules'
import { Comments, Feed } from 'components/organisms'
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

      {/* molecules */}
      {selectedComponent === 'checkbox-group' && <CheckboxGroup />}
      {selectedComponent === 'product-card' && <ProductCard />}

      {/* organisms */}
      {selectedComponent === 'comments' && <Comments />}
      {selectedComponent === 'feed' && <Feed />}

      {/* templates */}
      {selectedComponent === 'ecommerce' && <Ecommerce />}
      {selectedComponent === 'blog' && <Blog />}
    </div>
  )
}

export default Preview
