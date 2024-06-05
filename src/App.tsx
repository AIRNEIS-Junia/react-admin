import {
  Admin,
  Resource,
} from "react-admin";
import { dataProvider } from "./dataProvider";
import { authProvider } from "./authProvider";
import {EditProduct, ProductList, ProductShow, CreateProduct} from "./products";
import {UserList, UserShow} from "./user";

export const App = () => (
  <Admin dataProvider={dataProvider} authProvider={authProvider}>
    <Resource
      name="products"
      options={{
          label: "Products"
      }}
      show={ProductShow}
      create={CreateProduct}
      list={ProductList}
      edit={EditProduct}
    />
      <Resource
          name="user"
          options={{
              label: "Users"
          }}
          show={UserShow}
          list={UserList}

      />
  </Admin>
);
