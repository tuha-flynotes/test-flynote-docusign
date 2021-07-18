import { Box } from "@material-ui/core";
import React, { ChangeEvent, FC } from "react";
import { IAnchor } from '../../../types/Anchor';
import { IItem } from '../../../types/Item';
import FieldLabel from "../FieldLabel";
import { ISignature } from "../SignatureCreate";
import FieldSignatureInput from "./FieldSignatureInput";
import { useStyles } from './styles';

interface FieldInputProps extends IAnchor, IItem {
  value: string;
  type: string;
  onChange: (params: { id: number; value: string }) => void;
}

const FieldInput: FC<FieldInputProps> = (props) => {
  const { value, x, y, id, onChange, type } = props;
  const classes = useStyles({ x, y, type });
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange({ id, value: event.target.value });
  };

  const handleChangeSignature = (value: ISignature) => {
    const valueString = JSON.stringify(value);
    onChange({ id, value: valueString })
  }

  if (type === 'text') {
    return <input className={classes.input} value={value} onChange={handleChange} />;
  }

  if (type === 'signature') {
    return (
      <Box className={classes.input}>
        <FieldSignatureInput onChange={handleChangeSignature} value={JSON.parse(value || '{}')} />
      </Box>
    );
  }

  return <FieldLabel {...props} />;
};

export default FieldInput;
