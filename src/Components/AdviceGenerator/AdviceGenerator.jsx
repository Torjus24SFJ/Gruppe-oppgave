import { useState } from "react";
import style from "./AdviceGenerator.module.css";

export function AdviceGenerator() {
  const [advice, setAdvice] = useState(
    "It is easy to sit up and take notice, what's difficult is getting up and taking action"
  ); 
  const [id, setId] = useState(null); 
  const [loading, setLoading] = useState(false);

  const loadQuote = () => {
    if (loading) return; 
    setLoading(true); 

    fetch("https://api.adviceslip.com/advice")
      .then((response) => response.json())
      .then((data) => {
        setId(data.slip.id); 
        setAdvice(data.slip.advice);
      })
      .finally(() => setLoading(false)); 
  };

  return (
    <section className={style.card_section}>
      <div className={style.card_content}>
        <div className={style.card_head}>
          <h3>ADVICE #{id}</h3>
        </div>
        <div className={style.card_quote}>
          <q>
            {loading ? "Loading new advice..." : advice} 
          </q>
        </div>
        <div className={style.card_divider}>
          <img
            src="./src/Components/AdviceGenerator/assets/pattern-divider-desktop.svg"
            alt="divider"
          />
        </div>
        <div className={style.card_button}>
          <div
            className={style.card_dice}
            onClick={loadQuote}
            style={loading ? { cursor: "not-allowed" } : {}}
          >
            <div className={style.card_dice_icon}>
              <img
                src="./src/Components/AdviceGenerator/assets/icon-dice.svg"
                alt="dice icon"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
