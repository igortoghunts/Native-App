import React from 'react';
import { Input, Item } from 'native-base';

const CostumInput = props => {
    const {
        name,
        label,
        value
    } = props;

    return(
        <>
            <Item>
                <label>{label}</label>
                <Input
                    name={name}
                />
            </Item>
        </>
    );
};

