"use client";
import { ChangeEvent, useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [state, setState] = useState("");

  const handlerOnChange = (e: ChangeEvent<HTMLInputElement>) =>
    setState(e.target.value);

  const handlerClickCopyText = () => {
    navigator.clipboard.writeText(
      "https://wa.me/" + state.replace(/[\s-]/g, "")
    );
  };

  return (
    <main className={styles.main}>
      <form>
        <label>
          Generar link de WhatsApp
          <input
            placeholder="Ingresa el numero"
            type="text"
            onChange={handlerOnChange}
          />
        </label>
      </form>

      <button onClick={handlerClickCopyText}>{state}</button>
    </main>
  );
}
