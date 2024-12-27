type Method = 'GET' | 'POST' | 'PUT' | 'DELETE';

function returnCorrectRequest(method: Method, data: unknown = {}): RequestInit {
  if (method === 'GET') {
    return {
      method: method,
      headers: {
        'Content-Type': 'application/json',
      },
    };
  }

  return {
    method: method,
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  };
}

export async function sendApiRequest<T>(
  url: string,
  method: Method,
  data: unknown = {},
): Promise<T> | never {
  try {
    const response = await fetch(url, returnCorrectRequest(method, data));
    if (!response.ok) {
      throw new Error(`An error has ocurred: ${response.status}`);
    }

    return (await response.json()) as Promise<T>;
  } catch (err) {
    console.error(err);
    throw new Error(`An error has ocurred.`);
  }
}
