"use client";
import { useEffect, useState } from "react";
import { BancosJson } from "../utils/bancos";
import { fetchBancoData } from "../services/dolarService";

export default function useFetchBancos() {
  const [bancoSeleccionado, setBancoSeleccionado] = useState({
    name: BancosJson[0].name,
    endpoint: BancosJson[0].endpoint,
    compra: "",
    venta: "",
    fecha: "",
  });

  const [loading, setloading] = useState(true);

  useEffect(() => {
    setloading(true);
    const fetchData = async () => {
      try {
        const data = await fetchBancoData(bancoSeleccionado.endpoint);

        const { compra, venta, fecha } = data;

        setBancoSeleccionado((prevState) => ({
          ...prevState,
          compra,
          venta,
          fecha,
        }));
        setloading(false);
      } catch (error) {
        console.error("Error al obtener los datos del banco", error);
      }
    };

    if (bancoSeleccionado.endpoint) {
      fetchData();
    }
  }, [bancoSeleccionado.endpoint]);

  return { bancoSeleccionado, setBancoSeleccionado, loading };
}