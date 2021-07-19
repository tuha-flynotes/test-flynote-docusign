import { Box, Typography } from "@material-ui/core";
import React from "react";
import { IAnchor } from '../../../types/Anchor';
import { IItem } from '../../../types/Item';
import FieldLabel from "../FieldLabel";
import { useStyles } from './styles';

interface IProps extends IItem, IAnchor {
  value: string;
  onChange: (params: { id: number; value: string }) => void;
}

const FieldView = (props: IProps): JSX.Element | null => {
  const { value, x, y, id, type } = props;
  const classes = useStyles({ x, y });
  if (type === 'text') {
    return (
      <div key={id} className={classes.view}>{value}</div>
    );
  }

  if (type === 'signature') {
    const signatureData = JSON.parse(value || '{}');
    if (!signatureData.signatureValue) {
      return null;
    }
    return (
      <Box
        className={classes.signatureView}
        key={id}>
        <img
          key={id}
          className={classes.imgView}
          src={signatureData.signatureValue}
          alt="signature"
        />
        <Typography className={classes.signText}>{signatureData.fullName}</Typography>
      </Box>
    );
  }

  return <FieldLabel {...props} />;
};

export default FieldView;
