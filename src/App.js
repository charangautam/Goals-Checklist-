import React from 'react';
import GoalContextProvider from './contexts/GoalContext';
import Navbar from './components/Navbar';
import GoalList from './components/GoalList';
import GoalForm from './components/GoalForm';

function App() {
  return (
    <div className="App">
      <GoalContextProvider>
        <Navbar />
        <GoalList />
        <GoalForm />
      </GoalContextProvider>
    </div>
  );
}

export default App;
