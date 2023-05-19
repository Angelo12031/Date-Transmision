<template>
    <div v-if="currentCar.id" class="edit-form">
        <h4>Car</h4>
        <form>
            <div class="form-group">
                <label for="make">Make</label>
                <input
                        type="text"
                        class="form-control"
                        id="make"
                        v-model="currentCar.make"
                />
            </div>
            <div class="form-group">
                <label for="model">Model</label>
                <input
                        type="text"
                        class="form-control"
                        id="model"
                        v-model="currentCar.model"
                />
            </div>

            <div class="form-group">
                <label for="year">Year</label>
                <input
                        type="number"
                        class="form-control"
                        id="year"
                        v-model="currentCar.year"
                />
            </div>
            <div class="form-group">
                <label for="price">Price</label>
                <input
                        type="number"
                        class="form-control"
                        id="price"
                        v-model="currentCar.price"
                />
            </div>
            <div class="form-group">
                <label for="motorCapacity">Motor Capacity</label>
                <input
                        type="number"
                        class="form-control"
                        id="motorCapacity"
                        v-model="currentCar.motorCapacity"
                />
            </div>
            <div class="form-group">
                <label><strong>Status:</strong></label>
                {{ currentCar.published ? "Published" : "Pending" }}
            </div>
        </form>

        <button
                class="badge badge-primary mr-2"
                v-if="currentCar.published"
                @click="updatePublished(false)"
        >
            Unpost
        </button>
        <button
                v-else
                class="badge badge-primary mr-2"
                @click="updatePublished(true)"
        >
            Publish
        </button>

        <button class="badge badge-danger mr-2" @click="deleteCar">
            Delete
        </button>

        <button type="submit" class="badge badge-success" @click="updateCar">
            Update
        </button>
        <p>{{ message }}</p>
    </div>

    <div v-else>
        <br />
        <p>Please click on a Car...</p>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CarDataService from "@/services/CarDataService";
import Car from "@/types/Cars";
import ResponseData from "@/types/ResponseData";

export default defineComponent({
    name: "car",
    data() {
        return {
            currentCar: {} as Car,
            message: "",
        };
    },
    methods: {
        getCar(id: any) {
            CarDataService.get(id)
                .then((response: ResponseData) => {
                    this.currentCar = response.data;
                    console.log(response.data);
                })
                .catch((e: Error) => {
                    console.log(e);
                });
        },

        updatePublished(status: boolean) {
            let data = {
                id: this.currentCar.id,
                make: this.currentCar.make,
                model: this.currentCar.model,
                year: this.currentCar.year,
                price: this.currentCar.price,
                motorCapacity: this.currentCar.motorCapacity, // Include the motor capacity
                published: status,
            };

            CarDataService.update(this.currentCar.id, data)
                .then((response: ResponseData) => {
                    console.log(response.data);
                    this.currentCar.published = status;
                    this.message = "The status was updated successfully!";
                })
                .catch((e: Error) => {
                    console.log(e);
                });
        },

        updateCar() {
            CarDataService.update(this.currentCar.id, this.currentCar)
                .then((response: ResponseData) => {
                    console.log(response.data);
                    this.message = "The car was updated successfully!";
                })
                .catch((e: Error) => {
                    console.log(e);
                });
        },

        deleteCar() {
            CarDataService.delete(this.currentCar.id)
                .then((response: ResponseData) => {
                    console.log(response.data);
                    this.$router.push({ name: "cars" });
                })
                .catch((e: Error) => {
                    console.log(e);
                });
        },
    },
    mounted() {
        this.message = "";
        this.getCar(this.$route.params.id);
    },
});
</script>

<style>
.edit-form {
    max-width: 300px;
    margin: auto;
}
</style>
