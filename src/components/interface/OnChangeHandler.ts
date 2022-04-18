export type OnChangeHandler<T> = (value: any, originalEvent: T) => void;

export interface OnChangeHandlerProps<T> {
  onChange?: OnChangeHandler<T>;
}
