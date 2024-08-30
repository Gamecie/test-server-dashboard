export const toPOJO = (obj: Object): Object => {
  return JSON.parse(JSON.stringify(obj));
};