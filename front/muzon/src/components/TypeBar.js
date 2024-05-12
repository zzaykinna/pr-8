import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Context } from "..";
import ListGroup from 'react-bootstrap/ListGroup';

const TypeBar = observer(() => {
    const { product } = useContext(Context)

    return (
        <div>
            <ListGroup className="mt-1">
                {product.types.map(type => (
                    <ListGroup.Item action variant="success"
                        style={{ cursor: 'pointer' }}
                        active={type.id === product.selectedType.id}
                        onClick={() => product.setSelectedType(type)}
                        key={type.id}>
                        {type.name}
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </div>
    );
});

export default TypeBar;