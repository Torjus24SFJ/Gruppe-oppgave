import style from "./ResultatOversikt.module.css";

export function ResultatOversikt() {
  return (
    <>
      <section className={style.results_section}>
        <div className={style.card_container}>
          <div className={style.card}>
            <div className={style.card_content_l}>
                <p>Your Result</p>
              <div className={style.circle}>
                <p className={style.head_count}>76</p>
                <p>of 100</p>
                </div> 
              <div>
              </div>
              <div>
                <p>Great</p>
                <p>
                  You scored higher than 65% of the people who have taken thse
                  tests.
                </p>
              </div>
            </div>
            <div className={style.card_content_r}></div>
          </div>
        </div>
      </section>
    </>
  );
}
