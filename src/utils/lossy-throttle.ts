export function lossyThrottle<T extends (...args: any) => any>(
  cb: T,
  delay = 1000
): (...args: Parameters<T>) => void {
  let timerId: ReturnType<typeof setTimeout> | null = null;

  return function (this: ThisParameterType<T>, ...args) {
    if (timerId) {
      return;
    }

    cb.apply(this, args);
    timerId = setTimeout(() => (timerId = null), delay);
  };
}
