export const goalReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_GOAL':
            return [...state, {
                title: action.title,
                date: action.date,
                id: Math.random()
            }]
        case 'REMOVE_GOAL': 
            return state.filter(goal => goal.id !== action.id)
        default: 
            return state
    }
}