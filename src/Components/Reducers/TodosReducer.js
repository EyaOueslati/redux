const initialState = [
    { id: 1, description: "Learn React", isDone: true },
    { id: 2, description: "Learn Redux", isDone: false },
    { id: 3, description: "Learn API", isDone: true },
  ];
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case "ADD_TODO":
        return [
          ...state,
          { id: action.id, description: action.todo, isDone: false },
        ];
      case "TOGGLE_TODO":
        return state.map((todo) =>
          todo.id === action.id ? { ...todo, isDone: !todo.isDone } : todo
        );
      case "EDIT_TODO":
        return state.map((todo) =>
          todo.id === action.id
            ? { ...todo, description: action.description }
            : todo
        );
  
      default:
        return state;
    }
  };
  
  export default reducer;