const BASE_URL = "https://berita-indo-api-next.vercel.app";

export class ApiError extends Error {
  constructor(
    message: string,
    public status: number,
  ) {
    super(message);
    this.name = "ApiError";
  }
}

export async function fetchApi<T>(endpoint: string): Promise<T> {
  const res = await fetch(`${BASE_URL}${endpoint}`, {
    next: { revalidate: 300 },
  });

  if (!res.ok) {
    throw new ApiError(`API error: ${res.status}`, res.status);
  }

  return res.json() as Promise<T>;
}
