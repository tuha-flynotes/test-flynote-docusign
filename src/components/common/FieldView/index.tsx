import React from "react";
import { IAnchor } from '../../../types/Anchor';
import { IItem } from '../../../types/Item';
import FieldLabel from "../FieldLabel";
import { useStyles } from './styles';

interface IProps extends IItem, IAnchor {
  value: string;
  onChange: (params: { id: number; value: string }) => void;
}

const FieldView = (props: IProps): JSX.Element => {
  const { value, x, y, id, onChange, type } = props;
  const classes = useStyles({ x, y });
  if (type === 'text') {
    return (
      <div className={classes.view}>{value}</div>
    );
  }

  if (type === 'signature') {
    return (
      <img
        className={classes.signatureView}
        src={JSON.parse(value).signatureValue}
      />
    );
  }

  return <FieldLabel {...props} />;
};

export default FieldView;
