export interface Visibility {
  visible: VisibilityVisible;
  hidden: VisibilityHidden;
}

type VisibilityVisible = 'visible';
type VisibilityHidden = 'hidden';
export type VisibilityState = VisibilityVisible | VisibilityHidden;
