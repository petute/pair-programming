import { type NextPage } from "next";
import { useState } from "react";

const Home: NextPage = () => {
  const [board, setBoard] = useState<Array<Array<String>>>([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);

  const [player, setPlayer] = useState<"x" | "o">("x");

  const createBoard = () => {
    let boardHtml: Array<JSX.Element> = [];

    for (const row of board) {
      boardHtml.push(
        <div className="flex">
          {row.map((field, i) => {
            return (
              <div
                className="h-24 w-24 border-2"
                onClick={() => {
                  let temp = board;

                  temp[board?.indexOf(row)][i] = player;

                  setPlayer((p) => (p === "x" ? "o" : "x"));
                  setBoard(temp);
                }}
              >
                {field}
              </div>
            );
          })}
        </div>
      );
    }

    return boardHtml;
  };

  return <>{createBoard()}</>;
};

export default Home;
