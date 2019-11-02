import React, {useEffect, useState} from 'react';
import PrimarySearchAppBar from './PrimarySearchAppBar'
import Slider from './Slider'
import DatePicker from './DatePicker'
import IntegrationReactSelect from './IntegrationReactSelect'
import './App.css';
import axios from 'axios';
import moment from 'moment';
import categories from './popular.json'

function App() {
  const [isLoading, setIsLoading] = useState(false);  // if loading clues
  const [clues, setClues] = useState([]);

  // difficulty slider
  const [dollarValue, setDollarValue] = useState(0);

  // used for DatePicker
  const [minDate, setMinDate] = useState(new Date("2010-01-01T21:11:54"));
  const handleMinDateChange = date => {
    setMinDate(date);
  };
  const [maxDate, setMaxDate] = useState(new Date("2011-01-01T21:11:54"));
  const handleMaxDateChange = date => {
    setMaxDate(date);
  };

  // searching for popular categories
  const [searchValue, setSearchValue] = useState(0);

  // filters clues and returns questions/answers matching constraints
  useEffect(() => {
    const getClues = async () => {
      const queries = []
      // difficulty
      if (dollarValue != 0) {
        queries.push(`value=${dollarValue}`);
      }
      // category
      if (searchValue !== 0) {
        queries.push(`category=${searchValue}`);
      }
      // date range
      queries.push(`min_date=${moment(minDate).format("YYYY-MM-DD")}`);
      queries.push(`max_date=${moment(maxDate).format("YYYY-MM-DD")}`);
      const queryString = queries.join('&');
      setIsLoading(true);
      const apiClues = await axios.get(`https://cors-anywhere.herokuapp.com/http://jservice.io/api/clues?${queryString}`);
      setIsLoading(false);
      setClues(apiClues.data);
    }
    getClues();
  }, [dollarValue, searchValue, minDate, maxDate]);

  const items = []
  for (const [index, value] of clues.entries()) {
    items.push(<p key={clues.question} />)
  }

  // displays clues or "Loading..."
  let showClues = clues;
  let content;
  if (isLoading) {
    content = <p> Loading... </p>
  } else {
    content = showClues.map(clue => {
      if (clue.question !== "" && clue.answer !== 0) {
          return <p key={clue.id}>
          <strong>Question:</strong> {clue.question} <br />
          <strong>Answer:</strong> {clue.answer} <br />
          </p> }
        }
      )
    }

  return (
    <div>
      <PrimarySearchAppBar />
      <div
        style={{
          marginLeft: 40,
          marginRight: 40,
        }}
      >
      <h2>Question: How do you filter Jeopardy questions?</h2>
      <h2>Answer: Use the components below to filter clues by date aired, category, and difficulty!</h2>
      <div
        style={{
          display: "flex",
        }}
      >
        <DatePicker
          label="Start Date"
          value={minDate}
          onChange={handleMinDateChange}
        />
        <DatePicker
          label="End Date"
          value={maxDate}
          onChange={handleMaxDateChange}
        />
      </div>
      <div>
      <br />
      <Slider
        setDollarValue={setDollarValue}
      />
      <IntegrationReactSelect
        value={searchValue}
        onChange={setSearchValue}
      />
      </div>
        {content}
    </div>
  </div>
  );
}

export default App;
