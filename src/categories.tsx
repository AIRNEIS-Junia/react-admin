import {
    Datagrid,
    Show,
    SimpleShowLayout,
    DateField,
    TextInput,
    List,
    NumberField,
    ArrayField,
    TextField,
    Edit,
    ReferenceArrayField,
    Create,
    SimpleForm,
    ImageInput,
    NumberInput,
    ImageField,
    SelectField,
    EditGuesser,
    ReferenceManyField,
    ReferenceArrayInput, EditButton, DeleteButton, SelectArrayInput
} from 'react-admin';

export const CategoryList = (props: any) => (
    <List {...props}>
        <Datagrid>
            <TextField source="name" />
            {/*<TextField source="description" />*/}
            {/*<ImageField source="images" />*/}
            <DateField source="createdAt" />
            <DateField source="updatedAt" />
            <>
                <EditButton />
                <DeleteButton />
            </>
        </Datagrid>
    </List>
);

export const CategoryEdit = (props: any) => (
    <EditGuesser {...props}>
        <Datagrid>
            <TextField source="name" />
            <DateField source="createdAt" />
            <DateField source="updatedAt" />
        </Datagrid>
    </EditGuesser>
);