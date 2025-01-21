import style from "./MatKort.module.css";

export function MatKort() {
  return (
    <>
      <section className={style["recipe_page_section"]}>
        <div className={style.container}>
          <div className={style.recipe_page_content}>
            <img src="./src/assets/images/MatKort/image-omelette.jpeg" alt="" />
            <h1 className={style.recipe_page_content_h1}>
              Simple Omelette Recipe
            </h1>
            <p>
              An easy and quick dish, perfect for any meal. This classic
              omelette combines beaten eggs cooked to perfection, optionally
              filled with your choice of cheese, vegetables, or meats.
            </p>
            <div className={style.prep_container}>
              <h3>Preparation time</h3>
              <ul>
                <li>
                  <span className={style.boldText}>Total:</span> Approximately
                  10 minutes
                </li>
                <li>
                  <span className={style.boldText}>Preparation:</span> 5 minutes
                </li>
                <li>
                  <span className={style.boldText}>Cooking:</span> 5 minutes
                </li>
              </ul>
            </div>
            <div className={style.ingredients_container}>
              <h2>Ingredients</h2>
              <ul>
                <li>2-3 large eggs</li>
                <li>Salt, to taste</li>
                <li>Pepper, to taste</li>
                <li>1 tablespoon of butter or oil</li>
                <li>
                  Optional fillings: cheese, diced vegetables, cooked meats,
                  herbs
                </li>
              </ul>
            </div>
            <span className={style.separator} />
            <div className={style.instructions_container}>
              <h2>Instructions</h2>
              <ul>
                <li>
                  <span className={style.boldText}>Beat the eggs:</span>
                  <span>
                    In a bowl, beat the eggs with a pinch of salt and pepper
                    until they are well mixed. You can add a table spoon of water or milk for a fluffier texture.
                  </span>
                </li>
                <li>
                  <span className={style.boldText}>Heat the pan:</span>
                </li>
                <li>
                  <span className={style.boldText}>Cook the omelette:</span>
                </li>
                <li>
                  <span className={style.boldText}>Add fillings(optional)</span>
                </li>
                <li>
                  <span className={style.boldText}>Fold and serve:</span>
                </li>
                <li>
                  <span className={style.boldText}>Enjoy:</span>
                </li>
              </ul>
            </div>
            <span className={style.separator} />
            <div className={style.nutrition_container}>
              <h2>Nutrition</h2>
              <div className={style.table}>
                <span className={style.separator} />
                <p>
                  <span>Calories</span>
                  <span className={style.nutritionalValue}>277kcal</span>
                </p>
                <span className={style.separator} />
                <p>
                  <span>Carbs</span>
                  <span className={style.nutritionalValue}>0g</span>
                </p>
                <span className={style.separator} />
                <p>
                  <span>Protein</span>
                  <span className={style.nutritionalValue}>20g</span>
                </p>
                <span className={style.separator} />
                <p>
                  <span>Fat</span>
                  <span className={style.nutritionalValue}>22g</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
