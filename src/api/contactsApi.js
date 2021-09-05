const BASE_URL = "http://localhost:3030/contacts";

async function executeRequestAsync(url, options = {}) {
  const requestOptions = {
    ...options,
    ...{ headers: { "Content-Type": "application/json" } },
  };
  const response = await fetch(url, requestOptions);

  if (response.ok) {
    return await response.json();
  }

  throw new Error(
    `Contacts API failed with status ${response.statusText} during executing request.`
  );
}

export function fetchContacts() {
  return executeRequestAsync(BASE_URL);
}

export async function createContact(contact) {
  return executeRequestAsync(BASE_URL, {
    method: "POST",
    body: JSON.stringify(contact),
  });
}

export async function deleteContact(id) {
  return executeRequestAsync(`${BASE_URL}/${id}`, { method: "DELETE" });
}
