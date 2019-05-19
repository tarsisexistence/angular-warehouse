export interface SimpleTypedChange<T> {
  firstChange: boolean;
  previousValue: T;
  currentValue: T;
  isFirstChange(): boolean;
}

const components: Component[] = [];

export function OnChange<T = any>(
  callback: (value: T, simpleChange?: SimpleTypedChange<T>) => void
): (target: any, key: PropertyKey) => void {
  return (target: any, key: PropertyKey) => {
    Object.defineProperty(target, key, {
      get(): T {
        const component = components.find(({ instance }) => instance === this);
        return component && component.inputs[key];
      },
      set(nextValue: T): void {
        const component: Component | undefined =
          components.find(({ instance }) => instance === this) ||
          setDefaultComponent.call(this);

        component.isFirstChange = component.isFirstChange === undefined;

        if (component.inputs[key] === nextValue) {
          return;
        }

        const simpleChange: SimpleTypedChange<T> = {
          firstChange: component.isFirstChange,
          previousValue: component.inputs[key],
          currentValue: nextValue,
          isFirstChange: () => component.isFirstChange as boolean
        };

        component.inputs[key] = nextValue;

        callback.call(this, nextValue, simpleChange);
      }
    });
  };
}

interface Component {
  instance: any;
  inputs: any;
  isFirstChange?: boolean;
}

function setDefaultComponent(): Component {
  const component: Component = { instance: this, inputs: {} };
  components.push(component);
  return component;
}
