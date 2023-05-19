<template>
    <div class="list row">
        <div class="col-md-8">
            <div class="input-group mb-3">
                <input
                        type="text"
                        class="form-control"
                        placeholder="Search by make"
                        v-model="makeby"
                />
                <div class="input-group-append">
                    <button
                            class="btn btn-outline-secondary"
                            type="button"
                            @click="searchMake"
                    >
                        Search
                    </button>
                </div>
            </div>
        </div>
        <div class="col-md-6">
            <h4>Cars List</h4>
            <ul class="list-group">
                <li
                        class="list-group-item"
                        :class="{ active: index == currentIndex }"
                        v-for="(car, index) in cars"
                        :key="index"
                        @click="setActiveCar(car, index)"
                >
                    {{ car.make }} - {{ car.model }}
                </li>
            </ul>

            <button class="m-3 btn btn-sm btn-danger" @click="removeAllCars">
                Remove All
            </button>
        </div>
        <div class="col-md-6">
            <div v-if="currentCar.id">
                <h4>Car</h4>
                <div>
                    <label><strong>Make By:</strong></label> {{ currentCar.make }}
                </div>
                <div>
                    <label><strong>Model:</strong></label> {{ currentCar.model }}
                </div>
                <div>
                    <label><strong>Year:</strong></label> {{ currentCar.year }}
                </div>
                <div>
                    <label><strong>Price:</strong></label> {{ currentCar.price }}
                </div>
                <div>
                    <label><strong>Published:</strong></label>
                    {{ currentCar.published ? "In Stock" : "Good To Go" }}
                </div>
                <div>
                    <label><strong>Motor Capacity:</strong></label>
                    {{ currentCar.motorCapacity }}
                </div>

                <router-link
                        :to="'/cars/' + currentCar.id"
                        class="badge badge-warning"
                >Edit</router-link
                >
            </div>
            <div v-else>
                <br />
                <p>Please click on a Car...</p>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Car from "@/types/Cars";
import ResponseData from "@/types/ResponseData";
import CarDataService from "@/services/CarDataService";

export default defineComponent({
    name: "cars-list",
    data() {
        return {
            cars: [] as Car[],
            currentCar: {} as Car,
            currentIndex: -1,
            makeby: ""
        };
    },
    methods: {
        retrieveCars() {
            CarDataService.getAll()
                .then((response: ResponseData) => {
                    this.cars = response.data;
                    console.log(response.data);
                })
                .catch((e: Error) => {
                    console.log(e);
                });
        },

        refreshList() {
            this.retrieveCars();
            this.currentCar = {} as Car;
            this.currentIndex = -1;
        },

        setActiveCar(car: Car, index = -1) {
            this.currentCar = car;
            this.currentIndex = index;
        },

        removeAllCars() {
            CarDataService.deleteAll()
                .then((response: ResponseData) => {
                    console.log(response.data);
                    this.refreshList();
                })
                .catch((e: Error) => {
                    console.log(e);
                });
        },

        searchMake() {
            CarDataService.findByMakeBy(this.makeby)
                .then((response: ResponseData) => {
                    this.cars = response.data;
                    this.setActiveCar({} as Car);
                    console.log(response.data);
                })
                .catch((e: Error) => {
                    console.log(e);
                });
        },
    },
    mounted() {
        this.retrieveCars();
    },
});
</script>

<style>
.list {
    text-align: left;
    max-width: 750px;
    margin: auto;
}
</style>
