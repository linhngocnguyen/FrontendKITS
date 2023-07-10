import { useState, useEffect } from "react";

function QuoteOfTheDay() {
  const [numQuotes, setNumQuotes] = useState(1);
  const [quotes, setQuotes] = useState([]);

  const handleNumChange = (event) => {
    setNumQuotes(parseInt(event.target.value));
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://localhost:3000/quote`);
      const data = await response.json();
      setQuotes(data);
    };
    fetchData();
  }, [numQuotes]);

  const quoteList = quotes.map((quote, index) => (
    <li key={index}>
        <p>{quote.quote}</p>
        <p>{quote.author}</p>
    </li>
  ));

  return (
    <div>
      <form>
        <label htmlFor="num">Number of quotes:</label>
        <input
          type="number"
          id="num"
          name="num"
          min="1"
          max="10"
          value={numQuotes}
          onChange={handleNumChange}
        />
      </form>
      <ul>{quoteList}</ul>
    </div>
  );
}

export default QuoteOfTheDay;