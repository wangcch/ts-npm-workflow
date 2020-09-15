export const demo = "demo";

const asyncFunc = async (): Promise<string> => {
  const promise = new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve("async");
    }, 300);
  });
  const res = await promise;
  return res;
};

export default asyncFunc;
