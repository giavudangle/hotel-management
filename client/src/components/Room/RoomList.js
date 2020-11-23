import React, { useRef } from 'react';
import { List, Datagrid, TextField, EditButton, DeleteButton, TopToolbar } from 'react-admin';

import { Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import axios from 'axios';

const handleDeleteById = () => {
    axios.create({
        method: 'DELETE',
        params: {}
    })
}


const EditActions = props => {
    const { basePath, data, resource } = props;
    return (
        <TopToolbar>
            <DeleteButton
                basePath={basePath}
                record={data}
                resource={resource}
                undoable={false} // Renders the <DeleteWithConfirmButton>
            />
        </TopToolbar>
    );
};


const RoomList = (props) => {
    const { basePath, data, resource } = props;

    console.log(resource);
    return (
        <List {...props}>
            <Datagrid>
                <TextField source="id" />
                <TextField source="room_name" />
                <TextField source="room_type" />
                <TextField source="room_price" />
                <TextField source="room_status" />
                <TextField source="room_note" />
                <EditButton basePath={props.basePath} />
               
                    <DeleteButton
                        basePath={basePath}
                        resource={resource}
                        undoable={false} // Renders the <DeleteWithConfirmButton>
                    />
             
              
            </Datagrid>
        </List>
    )
}

export default RoomList;