import React from 'react';
import {ProductCard} from './components/ProductCard/ProductCard';
import classes from './App.module.scss';
import {MockData} from 'MockData/MockData';

function App() {
    return (
        <div className={classes.app_wrapper}>
            {
                MockData.map((el) => {
                    return <ProductCard key={el.id} name={el.name} info={el.info}
                                        price={el.price} color={el.color}/>
                })
            }
        </div>
    );
}

export default App;
