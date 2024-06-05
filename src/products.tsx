import {
    Datagrid,
    Show,
    SimpleShowLayout,
    DateField,
    TextInput,
    List,
    NumberField,
    ReferenceField,
    TextField,
    EditGuesser,
    Create, SimpleForm, ImageInput, NumberInput
} from 'react-admin';

export const ProductList = (props: any) => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="description" />
            <TextField source="images" />
            <NumberField source="price" />
            <NumberField source="quantity" />
            <ReferenceField source="categoryId" reference="products/categories">
                <TextField source="name" />
            </ReferenceField>
            <DateField source="createdAt" />
            <DateField source="updatedAt" />
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
            <ReferenceField source="categoryId" reference="products.categories" />
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
            <TextField source="images" />
            <NumberField source="price" />
            <NumberField source="quantity" />
            <ReferenceField source="categoryId" reference="products/categories">
                <TextField source="name" />
            </ReferenceField>
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
            <ReferenceField source="categoryId" reference="products/categories">
                <TextField source="name" />
            </ReferenceField>
        </SimpleForm>
    </Create>
);