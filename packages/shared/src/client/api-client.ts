export type ApiClientConfig = {
  baseUrl: string;
  getAccessToken?: () => string | null;
};

export type RequestOptions = {
  method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
  body?: unknown;
  headers?: Record<string, string>;
};

export const createApiClient = ({ baseUrl, getAccessToken }: ApiClientConfig) => {
  const request = async <T>(path: string, options: RequestOptions = {}): Promise<T> => {
    const token = getAccessToken?.();

    const response = await fetch(`${baseUrl}${path}`, {
      method: options.method ?? 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
        ...(options.headers ?? {})
      },
      body: options.body ? JSON.stringify(options.body) : undefined
    });

    if (!response.ok) {
      const message = await response.text();
      throw new Error(`API request failed (${response.status}): ${message}`);
    }

    return (await response.json()) as T;
  };

  return { request };
};
