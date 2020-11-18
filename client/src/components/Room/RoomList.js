import React from 'react';
import {List,Datagrid,TextField,EditButton,DeleteButton} from 'react-admin';


const PostList = (props) => {
    console.log(props)
    return (
        <List {...props}>
            <Datagrid>

            </Datagrid>
        </List>
    )
}

export default PostList;