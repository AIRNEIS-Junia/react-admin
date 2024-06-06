import {
    List,
    Datagrid,
    TextField,
    DateField,
    EditGuesser,
    SimpleForm,
    TextInput,
    Create,
    PasswordInput, SelectInput, ReferenceInput, EditButton, DeleteButton
} from 'react-admin';

export const UserList = (props: any) => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="firstName" />
            <TextField source="lastName" />
            <TextField source="role" />
            <DateField source="createdAt" />
            <DateField source="updatedAt" />
            <>
                <EditButton />
                <DeleteButton />
            </>
        </Datagrid>
    </List>
);

export const CreateUser = (props: any) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="firstName" />
            <TextInput source="lastName" />
            <TextInput source="email" />
            <ReferenceInput name="role" source="role" reference="userRole">
                <SelectInput name="userRole" source="userRole.client" />
            </ReferenceInput>
            <PasswordInput source="password" />
        </SimpleForm>
    </Create>

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