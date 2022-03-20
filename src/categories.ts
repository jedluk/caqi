type AQIRange = [number, number];
type ConcentrationRange = [number, number];

type Category = [string, AQIRange, ConcentrationRange];
export type Categories = Category[];

const US_EPA_PM25: Categories = [
  ["good", [0, 50], [0, 15.4]],
  ["moderate", [51, 100], [15.5, 40.4]],
  ["unhealty for sensitive groups", [101, 150], [40.5, 65.4]],
  ["unhealthy", [151, 200], [65.5, 150.4]],
  ["very unhealthy", [201, 300], [150.5, 250.4]],
  ["hazardous", [301, 500], [250.5, 500.4]],
];

const US_EPA_PM10: Categories = [
  ["good", [0, 50], [0, 54]],
  ["moderate", [51, 100], [55, 154]],
  ["unhealty for sensitive groups", [101, 150], [155, 254]],
  ["unhealthy", [151, 200], [255, 354]],
  ["very unhealthy", [201, 300], [355, 424]],
  ["hazardous", [301, 500], [425, 604]],
];

export const CATEGORIES: Record<"pm25" | "pm10", Categories> = {
  pm10: US_EPA_PM10,
  pm25: US_EPA_PM25,
};
