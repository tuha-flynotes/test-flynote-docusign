import { Box } from "@material-ui/core";
import React, { ChangeEvent, FC } from "react";
import { default as ReactSignatureCanvas, default as SignatureCanvas } from 'react-signature-canvas';
import { IAnchor } from '../../../types/Anchor';
import { IItem } from '../../../types/Item';
import FieldLabel from "../FieldLabel";
import { useStyles } from './styles';

interface FieldInputProps extends IAnchor, IItem {
  value: string;
  type: string;
  onChange: (params: { id: number; value: string }) => void;
}

const FieldInput: FC<FieldInputProps> = (props) => {
  const sigPad = React.useRef<ReactSignatureCanvas>();
  const { value, x, y, id, onChange, type } = props;
  const classes = useStyles({ x, y, type });
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange({ id, value: event.target.value });
  };

  const handleEndDrawSignature = (e: MouseEvent) => {
    const trimmedDataURL = sigPad.current?.getTrimmedCanvas().toDataURL('image/png');
    onChange?.({ id, value: trimmedDataURL || '' })
  }

  const callbackRef = (instance: ReactSignatureCanvas) => {
    sigPad.current = instance;
  }

  if (type === 'text') {
    return <input className={classes.input} value={value} onChange={handleChange} />;
  }

  if (type === 'signature') {
    return (
      <Box className={classes.input}>
        <SignatureCanvas
          penColor='black'
          canvasProps={{ width: 130, height: 86, className: 'sigCanvas' }}
          onEnd={handleEndDrawSignature}
          ref={callbackRef}
        />
      </Box>

    );
  }

  return <FieldLabel {...props} />;
};

export default FieldInput;
