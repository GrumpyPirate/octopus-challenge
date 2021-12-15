import { FunctionComponent, useEffect, useState } from 'react';

import { Button, Controls, Label, LabelText, Quantity } from './constants';

interface Props {
  initialValue?: number;
  onChange: (newValue: number) => void;
  min?: number;
}

const QuantityField: FunctionComponent<Props> = function ({
  initialValue = 1,
  onChange,
  min = 1,
}) {
  const [value, setValue] = useState(initialValue);

  const onDecrementClick = () => {
    if (value > min) {
      setValue(value - 1);
    }
  };

  const onIncrementClick = () => {
    setValue(value + 1);
  };

  /**
   * Use a side-effect to:
   *  - Fire the 'onChange' callback prop, every time the value is changed
   */
  useEffect(() => {
    onChange(value);
  }, [onChange, value]);

  return (
    <Label htmlFor="product-quantity">
      <LabelText aria-label="Quantity" id="product-quantity-label">
        <span aria-hidden="true">QTY</span>
      </LabelText>
      <Controls>
        <Button
          type="button"
          aria-label="Decrease Quantity"
          onClick={onDecrementClick}
          disabled={value <= min}
        >
          -
        </Button>
        <Quantity
          role="textbox"
          aria-labelledby="product-quantity-label"
          aria-readonly="true"
        >
          {value}
        </Quantity>
        <Button
          type="button"
          aria-label="Increase Quantity"
          onClick={onIncrementClick}
        >
          +
        </Button>
      </Controls>
    </Label>
  );
};

export default QuantityField;
