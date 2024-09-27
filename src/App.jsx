import Navbar from "./components/Navbar";
import AddingGoal from "./components/AddingGoal";
import GoalItem from "./components/GoalItem";
import GoalContainer from "./components/GoalContainer";
import Header from "./components/Header";
import Greeting from "./components/Greeting";
import CountGoal from "./components/CountGoal";
import { useDispatch, useSelector } from "react-redux";
import { checkGoal } from "./store/goalsSlice";

const App = () => {
  const dispatch = useDispatch();
  const goals = useSelector((state) => state.goals.goalList);
  const countDone = goals.filter((g) => g.isDone == true).length;

  const handleCheckgoal = (id) => {
    dispatch(checkGoal({ id }));
  };

  return (
    <>
      <Header>
        <Navbar>
          <Greeting username={"Pond Parinya"} />
          <CountGoal doneGoals={countDone} allGoals={goals.length} />
        </Navbar>
        <h1>Todo List</h1>
        <AddingGoal />
      </Header>
      <GoalContainer>
        {goals.map((goal) => (
          <GoalItem
            key={goal.id}
            name={goal.name}
            isDone={goal.isDone}
            onClick={() => handleCheckgoal(goal.id)}
          />
        ))}
      </GoalContainer>
    </>
  );
};

export default App;
