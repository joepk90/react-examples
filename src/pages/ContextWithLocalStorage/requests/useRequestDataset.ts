import { useState } from "react";

const datasets = [
  ["328425111", "328425222", "328425333", "328425444"],
  ["273483111", "273483222", "273483333", "273483444"],
  ["372382111", "372382222", "372382333", "372382444"],
  ["384284111", "384284222", "384284333", "384284444"],
  ["988357111", "988357222", "988357333", "988357444"],
  ["392238111", "392238222", "392238333", "392238444"],
  ["110239111", "110239222", "110239333", "110239444"],
];

export type DatasetArray = string[];

export const useRequestDataset = (index: number) => {
  const [dataset, setDataset] = useState<DatasetArray>([]);

  setTimeout(() => {
    setDataset(datasets[index]);
  }, 500);

  const refetch = () => datasets[index];

  return { dataset, refetch };
};
