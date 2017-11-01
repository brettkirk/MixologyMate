const initialState = {
  navDrawerOpen: false,
  settings: {
    password: {
      current: '',
      new: '',
      dialogOpen: false
    }
  },
  alert: {
    message: null,
    type: null
  }
}

const control = (state = initialState, action) => {
  if (action.type === 'TOGGLE_NAV_DRAWER') {
    return {...state, navDrawerOpen: !state.navDrawerOpen};
  }
  if (action.type === 'TOGGLE_EDIT_USER') {
    return {...state, editingUser: !state.editingUser};
  }
  if (action.type === 'SET_UPLOADED_FILE_URL') {
    return {...state, uploadedFileUrl: action.fileUrl};
  }
  if (action.type === 'TOGGLE_DRINK_CARD_EXPAND') {
    return {...state, drinkCardExpanded: !state.drinkCardExpanded};
  } 
  if (action.type === 'TOGGLE_DRINK_CARD_SHOW_INSTRUCTIONS') {
    return {...state, drinkCardInstructionsShown: !state.drinkCardInstructionsShown};
  } 

  return state;
}

export default control;