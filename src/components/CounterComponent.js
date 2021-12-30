const CounterComponent = ({ counter, incrementarContador, decrementarContador }) => {
    return (
    <header>
        <div>{counter.count}</div>
        <button onClick={incrementarContador}>Incrementar</button>
        <button onClick={decrementarContador}>Decrementar</button>
    </header>
    )
 } 

 export default CounterComponent;
