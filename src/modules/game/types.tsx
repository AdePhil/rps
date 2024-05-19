export enum GameMode {
  SINGLE_PLAYER = 1,
  TWO_PLAYER = 2,
}

export type Player = {
  id: string;
  name: string;
  isComputer: boolean;
  choice?: Move;
  score: number;
};

export enum Move {
  ROCK = 1,
  PAPER = 2,
  SCISSORS = 3,
}

export enum GameState {
  PlayerDetails,
  Playing,
  Result,
}

export type GameResult =
  | {
      winner: Player;
      loser: Player;
      winnerChoice: Move;
      loserChoice: Move;
      drawChoice?: undefined;
    }
  | {
      winner?: undefined;
      loser?: undefined;
      winnerChoice?: undefined;
      loserChoice?: undefined;
      drawChoice: Move;
    };
