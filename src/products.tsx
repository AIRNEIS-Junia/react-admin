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

export const ProductList = (props: any) => (
    <List {...props}>
        <Datagrid>
            <TextField source="name" />
            {/*<TextField source="description" />*/}
            {/*<ImageField source="images" />*/}
            <NumberField source="price" />
            <NumberField source="quantity" />
            <ReferenceArrayField source="category" reference="products/categories">
                <TextField source="name" />
            </ReferenceArrayField>
            <DateField source="createdAt" />
            <DateField source="updatedAt" />
            <>
                <EditButton />
                <DeleteButton />
            </>
        </Datagrid>
    </List>
);

export const ProductShow = (props: any) => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="description" />
            <TextField source="images" />
            <NumberField source="price" />
            <NumberField source="quantity" />
            <ReferenceArrayField source="category" reference="products/categories">
                <TextField source="name" />
            </ReferenceArrayField>
            <DateField source="createdAt" />
            <DateField source="updatedAt" />
        </SimpleShowLayout>
    </Show>
);

export const EditProduct = (props: any) => (
    <EditGuesser {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="description" />
            <ImageField source="images" />
            <NumberField source="price" />
            <NumberField source="quantity" />
            <ReferenceArrayInput source="categoryId" reference="list/categories">
                <TextInput source="name" />
            </ReferenceArrayInput>
            <DateField source="createdAt" />
            <DateField source="updatedAt" />
        </Datagrid>
    </EditGuesser>
);

export const CreateProduct = (props: any) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="description" />
            <ImageInput source="images" />
            <NumberInput source="price" />
            <NumberInput source="quantity" />
            <ReferenceArrayField source="category" reference="categories">
                <SelectArrayInput source="name" />
            </ReferenceArrayField>
        </SimpleForm>
    </Create>
);