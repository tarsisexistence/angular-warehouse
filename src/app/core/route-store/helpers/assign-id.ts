let nextId: number = 0;

export function assignId(): number {
  return nextId++;
}

// export function Id() {
//   return 'RS' + Math.random().toString(36).substr(2, 9);
// };
//
// function guid() {
//   return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
//       s4() + '-' + s4() + s4() + s4();
// }
//
// function s4() {
//   return Math.floor((1 + Math.random()) * 0x10000)
//       .toString(16)
//       .substring(1);
// }
