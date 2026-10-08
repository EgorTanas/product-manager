const API_URL = "https://dummyjson.com/products";

export async function getProducts() {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Nu s-au putut încărca produsele.");
  }

  return response.json();
}