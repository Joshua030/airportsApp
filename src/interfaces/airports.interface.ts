export interface Pagination {
  offset: number;
  limit: number;
  count: number;
  total: number;
}

export interface Airport {
  id: string;
  gmt: string | null;
  airport_id: string;
  iata_code: string;
  city_iata_code: string;
  icao_code: string | null;
  country_iso2: string;
  geoname_id: string | null;
  latitude: string;
  longitude: string;
  airport_name: string;
  country_name: string;
  phone_number: string | null;
  timezone: string | null;
}

export interface ApiResponse {
  pagination: Pagination;
  data: Airport[];
}
