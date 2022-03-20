import { Categories } from "./categories";

export function caqi(mean: number, catgories: Categories): number {
  const category = catgories.find(
    ([, , [minValue, maxValue]]) => mean >= minValue && mean < maxValue
  );

  if (category === undefined) {
    return 0;
  }

  const [description, [aqiMin, aqiMax], [valueMin, valueMax]] = category;

  const aqi =
    ((mean - valueMin) * (aqiMax - aqiMin)) / (valueMax - valueMin) + aqiMin;

  return aqi
}
