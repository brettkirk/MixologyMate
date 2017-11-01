const toggleNavDrawer = () => ({
  type: 'TOGGLE_NAV_DRAWER'
});

const toggleEditUser = () => ({
  type: 'TOGGLE_EDIT_USER'
});

const setUploadedFileUrl = (fileUrl) => ({
  type: 'SET_UPLOADED_FILE_URL',
  fileUrl
});

const toggleDrinkCardExpanded = () => ({
  type: 'TOGGLE_DRINK_CARD_EXPAND'
});

const toggleDrinkCardInstructionsShown = () => ({
  type: 'TOGGLE_DRINK_CARD_SHOW_INSTRUCTIONS'
});

export {
  toggleNavDrawer,
  setUploadedFileUrl,
  toggleEditUser,
  toggleDrinkCardExpanded,
  toggleDrinkCardInstructionsShown
};
