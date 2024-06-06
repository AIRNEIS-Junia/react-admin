import { List, Datagrid, TextField, DateField, EditGuesser } from 'react-admin';

export const UserList = (props: any) => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="firstName" />
            <TextField source="lastName" />
            <TextField source="role" />
            <DateField source="createdAt" />
            <DateField source="updatedAt" />
        </Datagrid>
    </List>
);

export const UserEdit = (props: any) => (
    <EditGuesser {...props}>
        <Datagrid>
            <TextField source="firstName" />
            <TextField source="lastName" />
            <TextField source="role" />
            <DateField source="createdAt" />
            <DateField source="updatedAt" />
        </Datagrid>
    </EditGuesser>
);