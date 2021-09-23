import "./styles.css";
import React, { useState } from "react";

const database = {
  books: [
    {
      name: "Rich Dad Poor Dad",
      ratings: "4.7/5 | Robert Kiyosaki & Sharon Lechter"
    },
    {
      name: "The Psychology of Money",
      ratings: "4.4/5 | Morgen Housel"
    },
    {
      name: "Atomic Habits",
      ratings: "4.4/5 | James Clear"
    },
    {
      name: "The Subtle Art of Not Giving a F*ck",
      ratings: "3.9/5 | Mark Manson"
    }
  ],
  series: [
    {
      name: "F.R.I.E.N.D.S",
      ratings: "8.8/10 | Sitcom | 10 Seasons"
    },
    {
      name: "Peaky Blinders",
      ratings: "8.8/10 | Drama | 8 Seasons"
    },
    {
      name: "The Vampire Diaries",
      ratings: "7.7/10 | Drama | 8 Seasons"
    },
    {
      name: "The Originals",
      ratings: "8.2/10 | Drama | 4 Seasons"
    },
    {
      name: "Legacies",
      ratings: "7.4/10 | Drama | 4 Seasons"
    },
    {
      name: "Money Heist",
      ratings: "8.3/10 | Thriller | 5 Seasons"
    }
  ],
  movies: [
    {
      name: "3 Idiots",
      ratings: "8.4/10 | Comedy/Romance"
    },
    {
      name: "Jobs",
      ratings: "6/10 | Drama/Drama"
    },
    {
      name: "Gravity",
      ratings: "7.7/10 | Sci-fi/Thriller"
    },
    {
      name: "A Wednesday",
      ratings: "8.1/10 | Thriller/Mystery"
    }
  ]
};

export default function App() {
  const [selctedTopic, getSecletedTopic] = useState("books");

  function topicClickHandler(topic) {
    getSecletedTopic(topic);
  }

  return (
    <div className="App">
      <h1>my suggestions</h1>
      <p>
        Hey! Thank you for checking out some of my suggestions. Hope you like
        them:)
      </p>
      <div>
        {Object.keys(database).map((topic) => (
          <button
            onClick={() => topicClickHandler(topic)}
            key={topic}
            style={{
              margin: "1rem 0.5rem",
              padding: "0.5rem",
              border: "solid 1.5px black",
              borderRadius: "1rem",
              backgroundColor: "#FEE2E2",
              cursor: "pointer",
              fontSize: "large"
            }}
          >
            {topic}
          </button>
        ))}
      </div>
      <div style={{ textAlign: "left" }}>
        <ul>
          {database[selctedTopic].map((suggestion) => (
            <li
              key={suggestion.name}
              style={{
                padding: "1rem",
                border: "1px solid #FECACA",
                margin: "1rem 0",
                borderRadius: "1rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}>{suggestion.name}</div>
              <div style={{ fontSize: "smaller" }}>{suggestion.ratings}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
