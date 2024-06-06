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

export const CheckoutList = (props: any) => (
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

export const CreateCheckout = (props: any) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <NumberInput source="price" />
            <NumberInput source="quantity" />
            <ReferenceArrayInput source="user" reference="user/admin">
                <SelectArrayInput source="user" />
            </ReferenceArrayInput>
            <ImageInput source="images" />
        </SimpleForm>
    </Create>

);