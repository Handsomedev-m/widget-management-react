import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Widget from './components/widget.js';


function App() {
  const [state, setState] = useState([
    { 
      id: 1,
      name: 'widget1',
      type: 'InputBox',
      valueName: 'value1',
      value: '0',
    },
    { id: 2,
      name: 'widget1',
      type: 'Buttons',
      valueName: 'value1',
      value: '0',
    }
  ])
  const updateValue = (val, index) => {
    let updateState =state.map(item => {
      if(item.id == index) {
        return {...item, value: val};
      }
      return item;
    })
    setState(updateState);
  }
  const deleteWidget = (index) => {
    const widget = [...state];
    widget.splice(index, 1);
    setState(widget)
  }
  const [name, setNewWidgetName] = useState('');
  const [valueName, setNewValueName] = useState('');
  const [type, setNewWidgetTypeName] = useState('');
  const setWidgetName = (widgetName) => {
    setNewWidgetName(widgetName);
  }
  const setValueName = (valueName) => {
    setNewValueName(valueName);
  }
  const setWidgetType = (widgetTypeName) => {
    console.log(widgetTypeName)
    console.log(name)
    console.log(valueName)
    let id = state[state.length - 1].id + 1;
    let newWidget = {
      id,
      name,
      type: widgetTypeName,
      valueName,
      value: 0
    }
    setState([
      ...state,
      newWidget
    ]);
  }
  return (
    <div className="App p-5">
      <div className="border border-white">
        <div className="state-and-widget-field d-flex">
          <div className="state-field col-7 p-3">
              {state.map((item, key) => (
                <div key={key} className="text-white space-line">
                  <span>&#123;</span><br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>name: </span>{item.name}<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>type: </span>{item.type}<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>valueName: </span>{item.valueName}<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>value: </span>{item.value}<br/>
                  <span>&#125;</span>
                </div>
              ))}
          </div>
          <div className="widget-field col-5 p-3">
            <Widget state={ state } updateValue={ updateValue } deleteWidget={ deleteWidget }/>
          </div>
        </div>
        <div className="add-widget border border-white m-4 p-3">
          <p className="text-white">Add Widget</p>
          <div className="d-flex justify-content-between">
            <div className="col-3 p-3">
              <input type="text" onChange={(e) => setWidgetName(e.target.value)} className="w-100 form-control border border-white" placeholder="Widget Name"/>
            </div>
            <div className="col-3 p-3">
              <input type="text" onChange={(e) => setValueName(e.target.value)} className="w-100 form-control border border-white" placeholder="Value Name"/>
            </div>
            <div className="col-3 p-3">
              <button type="button" onClick={() => setWidgetType("InputBox")} className="w-100 btn btn-primary">Create InputBox</button>
            </div>
            <div className="col-3 p-3">
              <button type="button" onClick={() => setWidgetType("Buttons")} className="w-100 btn btn-primary">Create Buttons</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
