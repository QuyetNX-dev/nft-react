const catchAsync = (fn) => {
  Promise.resolve(fn()).catch((err) => console.log(err));
};

export default catchAsync;
