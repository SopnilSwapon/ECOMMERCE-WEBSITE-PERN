import {create} from "zustand";
import axios from "axios";
import toast from "react-hot-toast"

const BASE_ULR = "http://localhost:5454";
export const useProductStore = create((set, get) => ( {
    // product state
    products: [],
    loading: false,
    error: null,
    // form state
    formData: {
        name: "",
        price: "",
        image: ""
    },
    setFormData: (formData) => set({formData}),
    resetForm: () => set({formData: {name: "", price: "", image: ""}}),
    addProduct: async (e) => {
        e.preventDefault();
        set({loading: true});
        try {
            const {formData} = get()
           await axios.post(`${BASE_ULR}/api/products`, formData)
           await get().fetchProducts()
           get().resetForm();
           document.getElementById("add_product_modal").close();
           toast.success("Product added successfully");
        } catch (error) {
            console.log(error, 'checkout error')
            toast.error("Something went wrong")
        } finally{
            set({loading: false})
        }
    },
    fetchProducts: async () => {
        set({loading: true});
        try {
            const response = await axios.get(`${BASE_ULR}/api/products`);
            set({products: response.data.data, error: null})
            
        } catch (error) {
            if(error.status == 429) set({error: "Rate limit exceeded", products: []});
            else set({error: "Something went wrong", products: []});
            
        } finally{
            set({loading: false})
        }
    },

    deleteProduct: async (id) => {
        set({loading: true});
        try {
            await axios.delete(`${BASE_ULR}/api/products/${id}`);
            set((prev) => ({
                products: prev.products.filter((product) => product.id !== id)
            }));
            toast.success("Product deleted successful")
            
        } catch (error) {
            toast.error( error)
        } finally{
            set({loading: false})
        }
        
    },

    fetchProduct: async (id) => {
        set({loading: true});
        try {
            const response = await axios.get(`${BASE_ULR}/api/products/${id}`)
            set({
                currentProduct: response.data.data,
                formData: response.data.data,
                error: null
            })
            
        } catch (error) {
            toast.error(error.message)
             
        } finally{
            set({loading: false})
        }
    },
    updateProduct: async (id) => {
        set({loading: true});
        try {
            const {formData} = get();
            const response = await axios.put(`${BASE_ULR}/api/products/${id}`, formData);
            set({currentProduct: response.data.data});
            toast.success("Product update successful")
            

        } catch (error) {
            toast.error(error.message)
        } finally{
            set({loading: false})
        }
    }
}))