import React from "react";
import Product from "./product";
import { Route, Link} from "react-router-dom";

const Products = ({ match }) => {
  const data = [
    {
      id: 1,
      name: "NIKE Liteforce Blue Sneakers",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie.",
      status: "Available",
    },
    {
      id: 2,
      name: "Stylised Flip Flops and Slippers",
      description:
        "Mauris finibus, massa eu tempor volutpat, magna dolor euismod dolor.",
      status: "Out of Stock",
    },
    {
      id: 3,
      name: "ADIDAS Adispree Running Shoes",
      description:
        "Maecenas condimentum porttitor auctor. Maecenas viverra fringilla felis, eu pretium.",
      status: "Available",
    },
    {
      id: 4,
      name: "ADIDAS Mid Sneakers",
      description:
        "Ut hendrerit venenatis lacus, vel lacinia ipsum fermentum vel. Cras.",
      status: "Out of Stock",
    },
  ];
  return (
    <div className="products">
      <nav>
        Products:
        <ul>
          {data.map((elem) => (
            <li>
              <Link to={`${match.url}/${elem.id}`}>{elem.name}</Link>
            </li>
          ))}
        </ul>
      </nav>

      <Route
        path={`${match.url}/:productId`}
        render={(props) => <Product data={data} {...props} />}
      />
      <Route
        exact
        path={match.url}
        render={() => <div>Please select a product.</div>}
      />
    </div>
  );
};
export default Products;
