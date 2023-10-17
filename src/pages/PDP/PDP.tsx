import React from "react";
import { useParams } from 'react-router-dom'


const PDP: React.FC = () => {
  const params = useParams()

  return (
    <><p>{params.id}</p></>
  );
};

export default PDP;
