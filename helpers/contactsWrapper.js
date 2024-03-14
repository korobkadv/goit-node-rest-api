const contactsWrapper = (cont) => {
  const func = async (req, res, next) => {
    try {
      await cont(req, res, next);
    } catch (error) {
      next(error);
    }
  };

  return func;
};

export default contactsWrapper;
