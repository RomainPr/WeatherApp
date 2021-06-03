const apiMiddleware = (store) => (next) => (action) => {
  console.log('Je suis logMiddleware et recois laction : ', action);
  // je laisse passer l'action
  next(action);
};

export default apiMiddleware;
