let { API_URL } = process.env;


export default async function fetchImages() {
  try {
    const response = await fetch(process.env.API_URL);
    console.log(response);

  } catch (error) {
    console.error("Erro ao buscar dados:", error);
  }
}