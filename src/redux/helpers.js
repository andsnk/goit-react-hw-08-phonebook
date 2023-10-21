export const handlePending = state => {
  state.isLoading = true;
};

export const handleRejected = (state, { payload }) => {
  state.error = payload.message;
  state.isLoading = false;
};

export const handleFulfilled = state => {
  state.isLoading = false;
};

export const handleFulfilledAll = (state, { payload }) => {
  state.items = payload;
};

export const handleFulfilledAdd = (state, { payload }) => {
  state.items.push(payload);
};

export const handleFulfilledDelete = (state, { payload }) => {
  state.error = null;
  const index = state.items.findIndex(contact => contact.id === payload.id);
  state.items.splice(index, 1);
};
