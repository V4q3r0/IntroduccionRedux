import { Provider, connect } from 'react-redux';
import { store } from './config/store'
import CounterActions from './actions/counter';
import './App.css';
import CounterComponent from './components/CounterComponent'

const mapStateToProps = ({counter}) => ({
  counter,
})

const mapDispatchToProps = () => ({
  ...CounterActions
})

const ConnecedCounterComponent = connect(mapStateToProps, mapDispatchToProps())(CounterComponent)

function App() {
  return (
    <Provider store={store}>
       <ConnecedCounterComponent />
    </Provider>
    
  );
}

export default App;
