import { cocktailLists, mockTailLists } from "../../constants";

function Cocktails() {
  return (
    <section
      id="cocktails"
      relative
      className="noisy inset-0 size-full bg-[url('/images/noise.png')] relative z-10   border border-transparent"
    >
      <img
        src="/images/cocktail-left-leaf.png"
        alt=""
        className="absolute left-0 md:bottom-0 md:top-auto -top-20 md:w-fit w-1/3"
      />

      <img
        src="/images/cocktail-right-leaf.png"
        alt=""
        className="absolute right-0 md:bottom-0 md:top-auto -top-20 md:w-fit w-1/3"
      />

      <div className="list">
        <div className="poplular">
          <h2>Most Popular Cocktails: </h2>
          <ul>
            {mockTailLists.map((item) => (
              <li key={item.name}>
                <div className="md:me-28">
                  <h3>{item.name}</h3>
                  <p>
                    {item.country} | {item.detail}
                  </p>
                  <span>- {item.price}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="loved">
        <h2>Most loved Cocktails: </h2>
        <ul>
          {cocktailLists.map((item) => (
            <li key={item.name}>
              <div className="me-28">
                <h3>{item.name}</h3>
                <p>
                  {item.country} | {item.detail}
                </p>
              </div>
              <span>- {item.price}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Cocktails;
