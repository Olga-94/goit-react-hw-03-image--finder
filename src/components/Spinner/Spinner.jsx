import React from 'react';
import { ThreeDots } from 'react-loader-spinner';
import { LoaderBox } from './Spinner.styled';

export const Spinner = () => {
  return (
    <LoaderBox>
      <ThreeDots
        type="ThreeDots"
        color="#3f51b5"
        height={200}
        width={200}
        timeout={30000}
      />
    </LoaderBox>
  );
}
