

<template>
    <div>
        <h1>Car List</h1>
        <CarTable :title="pageTitle" :cars="carList" />
    </div>
</template>

<script>
import CarTable from '@/components/CarTable.vue';
import {defineComponent} from "vue";

export default defineComponent({
    components: {
        CarTable
    },
    data() {
        return {

            carList: [
                { id: 1, make: 'Toyota', model: 'Camry',type: 'Exclusive' , year: 2022, price: '25000$' },
                { id: 2, make: 'Honda', model: 'Accord',type: 'S'  , year: 2021, price: '15000$' },
                { id: 3, make: 'Ford', model: 'Mustang',type: 'GT'  , year: 2020, price: '35000$' },
                { id: 4, make: 'Volkswagen', model: 'Golf',type:'R'   , year: 2022, price: '40000$' },
                { id: 5, make: 'Chevrolet', model: 'Camaro',type:  'ZL1' , year: 2022, price: '45000$' },
                { id: 6, make: 'Ford', model: 'Mustang Mach',type: 'Mach'  , year: 2020, price: '50000$' },
                { id: 7, make: 'Toyota', model: 'Supra',type:'MK3'  , year: 1998, price: '60000$' },
                { id: 8, make: 'Honda', model: 'Civic',type:  'Type R' , year: 2021, price: '35000$' },
                { id: 9, make: 'Ford', model: 'Mustang',type: "Evo"  , year: 2020, price: '55000$' }
            ]
        };
    }
});
</script>

<style scoped>
/* Add your desired styles here */
</style>