import { GameResult, Move, Player } from "@/modules/game/types";
import { v4 as uuidv4 } from "uuid";

export const getGameResult = (player1: Player, player2: Player): GameResult => {
  if (!player1.choice || !player2.choice)
    throw new Error("Player choice is missing");

  if (player1.choice === player2.choice)
    return {
      drawChoice: player1.choice,
    };

  if (player1.choice === Move.ROCK && player2.choice === Move.SCISSORS) {
    return {
      winner: player1,
      loser: player2,
      winnerChoice: Move.ROCK,
      loserChoice: Move.SCISSORS,
    };
  }

  if (player1.choice === Move.SCISSORS && player2.choice === Move.ROCK) {
    return {
      winner: player2,
      loser: player1,
      winnerChoice: Move.ROCK,
      loserChoice: Move.SCISSORS,
    };
  }

  return player1.choice > player2.choice
    ? {
        winner: player1,
        loser: player2,
        winnerChoice: player1.choice,
        loserChoice: player2.choice,
      }
    : {
        winner: player2,
        loser: player1,
        winnerChoice: player2.choice,
        loserChoice: player1.choice,
      };
};

export const generateComputerChoice = () => {
  const random = Math.floor(Math.random() * 3) + 1;
  return random as Move;
};

export const createPlayer = (details: Partial<Player>): Player => {
  const { name = "Computer", isComputer = true } = details;
  return { id: uuidv4(), name, isComputer, score: 0 };
};
