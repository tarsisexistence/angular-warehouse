// tslint:disable-next-line:file-name-casing
import { SimpleChange } from '@angular/core';

export interface SimpleTypedChange<T> extends SimpleChange {
  previousValue: T;
  currentValue: T;
}

export function OnChange<T = any>(
  callback: (value: T, simpleChange?: SimpleTypedChange<T>) => void
): (target: any, key: PropertyKey) => void {
  let cachedValue: T;
  let isFirstChange: boolean;

  return (target: any, key: PropertyKey) => {
    Object.defineProperty(target, key, {
      get: (): T => cachedValue,
      set(nextValue: T): void {
        isFirstChange = isFirstChange === undefined;

        if (cachedValue === nextValue) {
          return;
        }

        const simpleChange: SimpleTypedChange<T> = {
          firstChange: isFirstChange,
          previousValue: cachedValue,
          currentValue: nextValue,
          isFirstChange: () => isFirstChange
        };

        cachedValue = nextValue;

        // tslint:disable-next-line:no-invalid-this
        callback.call(this, cachedValue, simpleChange);
      }
    });
  };
}
