import { useContext } from 'react';
import { UserContext } from './UserContext';
import { CartContext } from './CartContext';
import Swal from 'sweetalert2';
import { CompareContext } from './CompareContext';

// Custom hooks

// Hook for UserContext, returns the context value
export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
}

export const useCompare = () => {

  const context = useContext(CompareContext);

  if (!context) {
    throw new Error("useCart must be used within a CompareProvider");
  }
  return context; 
  
}

// Hook for CartContext, returns the context value
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}

export const useOnAdd = (product, amount, handleCloseModal, addToCart, isEnabled) => {

  addToCart(product, amount);
  if (!isEnabled) {
    handleCloseModal();
  }

}

export const useProductPdf = (cart) => {
  const product = [];


  for (let index = 0; index < cart.length; index++) {
    const mock = {
/*       imagen: "", */
      name: "",
      medida: "",
      brand: "",
      price: 0,
      amount: 0,
      stock: 0
    };
    const element = cart[index];
    mock.medida = element.product.medida;
/*     mock.imagen = element.product.imageUrl */
    mock.amount = element.amount;
    mock.stock = element.product.stock;
    mock.name = element.product.name;
    mock.brand = element.product.brand;
    mock.price = "$ " + element.product.price;

    product.push(mock);


  }

  return product;

}

/* export const dataConver = (data) => {

  const { productos } = data;

  const newData = [{}];

  for (let index = 0; index < productos.length; index++) {


      const element = {
          "id": productos[index].id,
          "name": productos[index].name,
          "description": productos[index].description,
          "price": productos[index].price,
          "subCategory": productos[index].subCategory.title,
          "imageUrl": productos[index].imageUrl,                
          "brand": productos[index].brand.title, 
          "medida": productos[index].medida,
          "stock": productos[index].stock
      };

      newData.push(element);

  }
  
  newData.shift();

  return newData;

} */

export const useStorage = ( response) => {


    localStorage.setItem("productos", JSON.stringify(response.productos));
    localStorage.setItem("total", JSON.stringify(response.total));

    location.replace("/productos");


}

export const useAlert = (response, status) => {
  if (response.status == status) {
    Swal.fire({
    title: response.data.msg,
    icon: 'success',
    confirmButtonText: 'continuar',
    confirmButtonColor: '#009EE3',
  });
  } else {

      Swal.fire({
      title: response.response.data.error,
      icon: 'warning',
      confirmButtonText: 'continuar',
      confirmButtonColor: '#009EE3',
    });
  }
}

export const useOptions = {
    margin: 30,
    responsiveClass: true,
    nav: true,
    dots: true,
    autoplay: true,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      600: {
        items: 2,
      },
      700: {
        items: 3,
      },
      1000: {
        items: 4,
      },
    },
};

export const useSendRequest = async (request, setLoading, funcion, handleCloseModal) => {

  try {
    setLoading(true);
    const response = await funcion(request);
    setLoading(false);
    if (response.status == 200) {
      Swal.fire({
        icon: 'success',
        title: 'Contraseña cambiada con éxito',
        showConfirmButton: false,
        timer: 1500
      })
      handleCloseModal();
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Algo salió mal, intente nuevamente',
      })
    }
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Algo salió mal, intente nuevamente',
    })
  }
}