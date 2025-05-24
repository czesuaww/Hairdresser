import { useEffect, useState } from "react";

const translations = {
  pl: "cześć",
  en: "hi",
  cz: "novinki",
};
const Welcome = ({ lang }) => {
  const [text, setText] = useState("");

  useEffect(() => {
    setText(translations[lang] || "DUPA"); //translations[lang] oznacza: "weź z obiektu translations tę wartość, której klucz to wartość zmiennej lang". To nie jest tablica, tylko dynamiczny dostęp do właściwości obiektu.
  }, [lang]);
  return <h1>{text}</h1>;
};

export default Welcome;
