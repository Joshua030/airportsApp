export const API_BASE_URL = process.env.API_BASE_URL!;
export const API_ACCESS_KEY = process.env.API_ACCESS_KEY!;
export const NODE_ENV = process.env.NODE_ENV;

if (NODE_ENV === "development") {
  if (!API_BASE_URL) throw new Error("API_BASE_URL is missing in development");
  if (!API_ACCESS_KEY)
    throw new Error("API_ACCESS_KEY is missing in development");
}

// Helper to inject access_key automatically
const withKey = (endpoint: string) =>
  `${endpoint}?access_key=${API_ACCESS_KEY}`;

export const api = {
  base: API_BASE_URL,

  airports: {
    list: withKey(`${API_BASE_URL}/airports`),
    getById: (id: string | number) => withKey(`${API_BASE_URL}/airports/${id}`),
  },
};
