import {
  Admin,
  Resource,
} from "react-admin";
import { dataProvider } from "./dataProvider";
import { authProvider } from "./authProvider";
import {EditProduct, ProductList, CreateProduct} from "./products";
import {UserList, CreateUser} from "./user";
import {CategoryList} from "./categories";
import {CheckoutList} from "./checkout";

export const App = () => (
  <Admin dataProvider={dataProvider} authProvider={authProvider}>
    <Resource
      name="products/admin"
      options={{
          label: "Products"
      }}
      list={ProductList}
      edit={EditProduct}
      create={CreateProduct}
    />
      <Resource
          name="user/admin"
          options={{
              label: "Users"
          }}
          list={UserList}
          create={CreateUser}
      >
      </Resource>
      <Resource name="products/admin/list/categories" options={{label: "Categories"}} list={CategoryList}/>
      <Resource name="orders/admin" options={{label: "Orders"}} create={CheckoutList}/>
  </Admin>
);
