import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// declare the type of your initialState variable/value
interface CustomerState {
    value: Customer[]
}

interface Customer {
    id: string;
    name: string;
    food: string[];
}

interface AddFood {
    food: string;
    id: string;
}

// tell typeScript that your initial state is of type reservationState as defined above
const initialState: CustomerState = {
    value: []
}

export const customerSlice = createSlice({
    name: "customers",
    initialState,
    reducers: {
        addCustomer: (state, action: PayloadAction<Customer>) => {
            state.value.push(action.payload);
        },
        addFoodToCustomer: (state, action: PayloadAction<AddFood>) => {
            state.value.forEach(customer => {
                if(customer.id === action.payload.id) {
                    customer.food.push(action.payload.food)
                }
            })
        }
    } 
})
export const { addCustomer, addFoodToCustomer } = customerSlice.actions

export default customerSlice.reducer