import React from 'react'
import { Create,SimpleForm,TextInput,DateInput } from 'react-admin';

const RoomCreate = (props) => {
    
    return (
       <Create title="Create a room" {...props}>
           <SimpleForm>
               <TextInput source='room_name'/>
               <TextInput source='room_type'/>
               <TextInput source='room_price'/>
               <TextInput source='room_status'/>
               <TextInput source='room_note'/>

             
           </SimpleForm>
       </Create>
    )
}

export default RoomCreate;