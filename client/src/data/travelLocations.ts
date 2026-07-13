export type TravelLocation = {
  city: string;
  country: string;
  lat: number;
  lon: number;
  offsetX?: string;
  offsetY?: string;
};

export const atlasLocations: TravelLocation[] = [
  {
    city: "New York",
    country: "United States",
    lat: 40.7128,
    lon: -74.006,
    offsetX: "4px",
    offsetY: "-5px",
  },
  {
    city: "Boston",
    country: "United States",
    lat: 42.3601,
    lon: -71.0589,
    offsetX: "7px",
    offsetY: "-10px",
  },
  {
    city: "Los Angeles",
    country: "United States",
    lat: 34.0522,
    lon: -118.2437,
    offsetX: "-5px",
    offsetY: "3px",
  },
  {
    city: "San Francisco",
    country: "United States",
    lat: 37.7749,
    lon: -122.4194,
    offsetX: "-8px",
    offsetY: "-4px",
  },
  {
    city: "Houston",
    country: "United States",
    lat: 29.7604,
    lon: -95.3698,
    offsetX: "0px",
    offsetY: "8px",
  },
  {
    city: "Austin",
    country: "United States",
    lat: 30.2672,
    lon: -97.7431,
    offsetX: "-5px",
    offsetY: "-3px",
  },
  {
    city: "Miami",
    country: "United States",
    lat: 25.7617,
    lon: -80.1918,
    offsetX: "4px",
    offsetY: "6px",
  },
  {
    city: "Chicago",
    country: "United States",
    lat: 41.8781,
    lon: -87.6298,
  },
  {
    city: "New Orleans",
    country: "United States",
    lat: 29.9511,
    lon: -90.0715,
    offsetX: "5px",
    offsetY: "2px",
  },
  {
    city: "Atlanta",
    country: "United States",
    lat: 33.749,
    lon: -84.388,
    offsetX: "2px",
    offsetY: "-5px",
  },
  {
    city: "Portland",
    country: "United States",
    lat: 45.5152,
    lon: -122.6784,
    offsetX: "-10px",
    offsetY: "-8px",
  },
  {
    city: "Gifu",
    country: "Japan",
    lat: 35.4233,
    lon: 136.7607,
    offsetX: "-5px",
    offsetY: "4px",
  },
  {
    city: "Novosibirsk",
    country: "Russia",
    lat: 55.0084,
    lon: 82.9357,
  },
  {
    city: "Kyiv",
    country: "Ukraine",
    lat: 50.4501,
    lon: 30.5234,
    offsetX: "7px",
    offsetY: "-4px",
  },
  {
    city: "Reykjavik",
    country: "Iceland",
    lat: 64.1466,
    lon: -21.9426,
  },
  {
    city: "Mexico City",
    country: "Mexico",
    lat: 19.4326,
    lon: -99.1332,
  },
  {
    city: "Athens",
    country: "Greece",
    lat: 37.9838,
    lon: 23.7275,
    offsetX: "6px",
    offsetY: "8px",
  },
  {
    city: "Warsaw",
    country: "Poland",
    lat: 52.2297,
    lon: 21.0122,
    offsetX: "-3px",
    offsetY: "-9px",
  },
  {
    city: "Punta Cana",
    country: "Dominican Republic",
    lat: 18.5601,
    lon: -68.3725,
  },
  {
    city: "Rome",
    country: "Italy",
    lat: 41.9028,
    lon: 12.4964,
    offsetX: "-6px",
    offsetY: "-8px",
  },
  {
    city: "Bari",
    country: "Italy",
    lat: 41.1171,
    lon: 16.8719,
    offsetX: "4px",
    offsetY: "2px",
  },
  {
    city: "Venice",
    country: "Italy",
    lat: 45.4408,
    lon: 12.3155,
    offsetX: "5px",
    offsetY: "-13px",
  },
  {
    city: "Geneva",
    country: "Switzerland",
    lat: 46.2044,
    lon: 6.1432,
    offsetX: "-9px",
    offsetY: "-4px",
  },
];

export const slugifyTravelCity = (city: string) =>
  city.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");

export const getTravelLocationBySlug = (slug: string) =>
  atlasLocations.find((location) => slugifyTravelCity(location.city) === slug);
