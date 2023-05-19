<template>
    <div>
        <h2>{{ title }}</h2>
        <table class="car-table">
            <thead>
            <tr>
                <th>Make By</th>
                <th>Model</th>
                <th>Type</th>
                <th>Year</th>
                <th>Price</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="car in cars" :key="car.id">
                <td>{{ car.make }}</td>
                <td>{{ car.model }}</td>
                <td>{{ car.type }}</td>
                <td>{{ car.year }}</td>
                <td>{{ car.price }}</td>
                <td>
                    <button @click="buyCar(car)">Buy</button>
                </td>
            </tr>
            </tbody>
        </table>
        <router-link :to="{ path: '/tutorials' }"><button class="btn btn-primary" type="button">Go to home page</button></router-link>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true
        },
        cars: {
            type: Array,
            required: true
        }
    },
    methods: {
        goToCarPage() {
            this.$router.push('/add');
        },
        buyCar(car) {
            // Handle the buy car action here
            console.log(`Buying ${car.makeby} ${car.model}`);
        }
    }
};
</script>

<style scoped>
.car-table {

    width: 100%;
    border-collapse: collapse;
}

.car-table th,
.car-table td {
    padding: 8px;
    border: 1px solid #ccc;
    text-align: center;
}

.car-table th {
    background-color: #f0f0f0;
    text-align: left;
}

.go-to-page-button {
    margin-top: 16px;
}
</style>
