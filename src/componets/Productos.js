import { Component } from "react";
import Producto from "./Producto";

const styles = {
  productos: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    margin: "10px",
  },
};

class Productos extends Component {
  render() {
    const { productos, agregarAlCarro } = this.props;

    return (
      <div style={styles.productos}>
        {productos.map((productos) => (
          <Producto
            agregarAlCarro={agregarAlCarro}
            key={productos.name}
            producto={productos}
          />
        ))}
      </div>
    );
  }
}

export default Productos;
