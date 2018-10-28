export interface Direction {
  up: DirectionUp;
  down: DirectionDown;
}

type DirectionUp = 'Up';
type DirectionDown = 'Down';

export type DirectionState = DirectionUp | DirectionDown;
