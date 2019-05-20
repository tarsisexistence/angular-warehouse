export interface SimpleTypedChange<T> {
  firstChange: boolean;
  previousValue: T;
  currentValue: T;

  isFirstChange(): boolean;
}

const components = new WeakSet();

// tslint:disable:no-invalid-this
export function OnChange<T = any>(
  callback: (value: T, simpleChange?: SimpleTypedChange<T>) => void
): (target: any, key: PropertyKey) => void {
  return (target: any, key: any) => {
    Object.defineProperty(target, key, {
      get(): T {
        return this[prvt(key)];
      },
      set(nextValue: T): void {
        const isFirstChange = !components.has(this);
        const value = this[prvt(key)];

        if (isFirstChange) {
          components.add(this);
        }

        if (value === nextValue) {
          return;
        }

        const simpleChange: SimpleTypedChange<T> = {
          previousValue: value,
          currentValue: nextValue,
          firstChange: isFirstChange,
          isFirstChange: () => isFirstChange
        };

        this[prvt(key)] = nextValue;

        callback.call(this, nextValue, simpleChange);
      }
    });
  };
}

function prvt(key: string | number): string {
  return `_${key}`;
}
