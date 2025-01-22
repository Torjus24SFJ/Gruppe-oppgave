import style from "./ResultatOversikt.module.css";

export function ResultatOversikt() {
    const score = {
        "totalscore": 76,
        "reaction": 80,
        "memory": 92,
        "verbal": 61,
        "visual": 73
    }


  return (
    <>
      <section className={style.results_section}>
        <div className={style.card_container}>
          <div className={style.card}>
            <div className={style.card_content_l}>
              <p className={style.result}>Your Result</p>
              <div className={style.circle}>
                <h2 className={style.head_count}>{score.totalscore}</h2>
                <p className={style.circle_p}>of 100</p>
              </div>
              <div className={style.score}>
                <p className={style.score_h}>Great</p>
                <p className={style.score_p}>
                  You scored higher than 65% of the people who have taken these
                  tests.
                </p>
              </div>
            </div>
            <div className={style.card_content_r}>
                <h2 className={style.summary}>Summary</h2>
              <div className={style.rounded}>
                <div className={style.round_red}>
                  <img className={style.round_img} 
                    src="/src/assets/images/ResultatOversikt/icon-reaction.svg"
                    alt=""
                    />
                  <p>Reaction</p>
                  <p className={style.score_rounded}>80 / 100</p>
                </div>
                <div className={style.round_yellow}>
                  <img className={style.round_img} 
                    src="/src/assets/images/ResultatOversikt/icon-memory.svg"
                    alt=""
                  />
                  <p>Memory</p>
                  <p className={style.score_rounded}>92 / 100</p>
                </div>
                <div className={style.round_green}>
                  <img className={style.round_img} 
                    src="/src/assets/images/ResultatOversikt/icon-verbal.svg"
                    alt=""
                  />
                  <p>Verbal</p>
                  <p  className={style.score_rounded}>61 / 100</p>
                </div>
                <div className={style.round_blue}>
                  <img className={style.round_img} 
                    src="/src/assets/images/ResultatOversikt/icon-visual.svg"
                    alt=""
                  />
                  <p>Visual</p>
                  <p className={style.score_rounded}>73 / 100</p>
                </div>
                <div className={style.btn}>Continue</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
