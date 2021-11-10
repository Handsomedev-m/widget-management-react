import { useState } from 'react';

export default function Widget(props) {
    const decrease = (val, index) => {
        val = Number(val)-1;
        if(val<0) val = 0;
        props.updateValue(val, index+1)
    }
    const increase = (val, index) => {
        val = Number(val)+1;
        props.updateValue(val, index+1)
    }
    const setVal = (val, index) => {
        val = Number(val);
        if(val<0) val = 0;
        props.updateValue(val, index+1)
    }
    const deleteWidget = (index) => {
        props.deleteWidget(index);
    }
    return (
        <div>
            {props.state.map((item, key) => (
            <div key = { key }className="border border-white m-2 p-3 text-white position-relative">
                <div className="widget-properties">
                    <p>Widget Name(Type): { item.name }<span>({item.type})</span></p>
                    <p>Value Name: { item.valueName }</p>
                    <p>Value: { item.value }</p>
                </div>
                {(item.type=='InputBox') ? (<div>
                    <input type="number" onChange={(e) => setVal(e.target.value, key)} className="text-center form-control border border-white" placeholder="0"/>
                </div>):
                (<div className="d-flex justify-content-between">
                    <button onClick = {() => decrease(item.value, key)} type="button" className="btn btn-primary">Decrease(-)</button>
                    <button onClick = {() => increase(item.value, key)} type="button" className="btn btn-primary">Increase(+)</button>
                </div>)}
                <div onClick = {() => deleteWidget(key)} className="position-absolute close p-2">
                    <span className="text-white close-icon" aria-hidden="true">&times;</span>
                </div>
            </div>
            ))}
        </div>
    )
}