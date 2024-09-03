import React, { useState } from 'react';
import CurrencyInput from 'react-currency-input-field';


// blue - 2 years / 20/22 - 
// 150gsm - 2500
// 200gsm - 3300


// black  - 
// 300    4000



const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [task, setTask] = useState('');
    const [quantity, setQuantity] = useState('');
    const [amount, setAmount] = useState('');
    const [select, setSelect] = useState('RS')

    const addTodo = () => {
        setTodos([...todos, { task, amount, select, quantity }]);
        setTask('');
        setAmount('');
        setQuantity('');
        setSelect('');
    };

    return (
        <div>
            <h1>Currency works</h1>
            <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', marginBottom: '50px' }}>
                <input
                    type="text"
                    placeholder="Enter name"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Enter Quantity"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                />
                <CurrencyInput
                    placeholder="Enter amount"
                    value={amount}
                    onValueChange={(value) => setAmount(value)}
                    prefix=""
                />
                <select onChange={(e) => setSelect(e.target.value)}>
                    <option value="RS">Rupees</option>
                    <option value="BND">Brunei Dollar</option>
                    <option value="SGD">Singapore Dollar</option>
                    <option value="MYR">Malaysian Ringgit</option>
                </select>
                <button onClick={addTodo}>Add Todo</button>
            </div>
            <table style={{ width: '100%' }}>
                <tr>
                    <th>S.no</th>
                    <th>Name</th>
                    <th>Quantity</th>
                    <th>Amout</th>
                    <th>Total</th>
                </tr>

                {todos.map((todo, index) => (
                    // <li key={index} style={{listStyle: 'number'}}>
                    //      {todo.task} - {todo.select} - {todo.amount * todo.quantity} {index+1}
                    // </li>
                    <>
                        <tr>
                            <td style={{ textAlign: 'center' }}>{index + 1}</td>
                            <td style={{ textAlign: 'center' }}>{todo.task}</td>
                            <td style={{ textAlign: 'center' }}>{todo.quantity}</td>
                            <td style={{ textAlign: 'center' }}>{todo.select} - {todo.amount}</td>
                            <td style={{ textAlign: 'center' }}>{todo.select} - {todo.amount * todo.quantity}</td>
                        </tr>

                    </>
                ))}
                {/* <td style={{textAlign: 'center'}}>njnsw</td>
                    <td style={{textAlign: 'center'}}>njnsw</td>
                    <td style={{textAlign: 'center'}}>njnsw</td>
                    <td style={{textAlign: 'center'}}>njnsw</td> */}

            </table>
            {/* <ul>
                {todos.map((todo, index) => (
                    <li key={index} style={{listStyle: 'number'}}>
                         {todo.task} - {todo.select} - {todo.amount * todo.quantity} {index+1}
                    </li>
                ))}
            </ul> */}
        </div>
    );
};

export default TodoList;
