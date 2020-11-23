import React from 'react'
import { Edit,SimpleForm,TextInput,DateInput } from 'react-admin';

const RoomEdit = (props) => (
    <Edit title="Edit a room" {...props}>
        <SimpleForm>
            <TextInput disabled source="id"/>
            <TextInput source='room_name'/>
            <TextInput source='room_type'/>
            <TextInput source='room_price'/>
            <TextInput source='room_status'/>
            <TextInput source='room_note'/>          
        </SimpleForm>
    </Edit>
)
    


export default RoomEdit;