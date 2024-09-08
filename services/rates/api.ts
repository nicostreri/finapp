import axios from "axios";
import type { Rates } from "~/components/currencies/types";

export async function getRatesOfUSD(apiKey: string): Promise<Rates | false> {
  const serviceUrl = `https://finance.streri.com/cotizaciones.php?id=${Date.now()}`;
  const { data } = await axios.get(serviceUrl);

  if (!data) {
    console.error("api unavailable");
    return false;
  }

  return data.rates;
}
