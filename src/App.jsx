import ClassProps from "./Components/ClassProps/ClassProps";
import ClassStateComponent from "./Components/ClassStateComponent/ClassStateComponent";
import FristClassComponent from "./Components/FristClassComponent/FristClassComponent";
import { FristFunctionComponent } from "./Components/FristFunctionComponent/FristFunctionComponent";
import { FunctionalProps } from "./Components/FunctionlProps/FunctionalProps";

function App() {
  return (
    <div className="App">
      <FristClassComponent/>
      <FristFunctionComponent/>
      <FunctionalProps fname = 'Anas' lname = 'Ahmed' age = {21} address = 'Monufia'>
        <p>This Informations about Anas</p>
      </FunctionalProps>
      <FunctionalProps fname = 'Omar' lname = 'Khaled' age = {20} address = 'Cairo'/>
      <FunctionalProps fname = 'Mohamed' lname = 'Sameh' age = {27} address = 'Fayom'/>
      <FunctionalProps fname = 'Yousef' lname = 'Ali' age = {30} address = 'Alex'/>
      <ClassProps fristname = 'Anas' sname = 'Ahmed' fristCourse = 'ES' secondCourse = 'React.js'>
        <p>This Is The Courses I Studying These</p>
      </ClassProps>
      <ClassProps fristname = 'Omer' sname = 'Khaled' fristCourse = 'HTML' secondCourse = 'CSS'/>
      <ClassProps fristname = 'Mohamed' sname = 'Sameh' fristCourse = 'PHP' secondCourse = 'MYSQL'/>
      <ClassStateComponent/>
    </div>
  );
}

export default App;
