import Header from "@/components/shared/Header";
import React from "react";
import { transformationTypes } from "@/constants";

function AddTransformationTypePage({ params: { type } }: SearchParamProps) {
  const transformation = transformationTypes[type];
  return (
    <div>
      <Header title={transformation.title} subtitle={transformation.subTitle} />
    </div>
  );
}

export default AddTransformationTypePage;
