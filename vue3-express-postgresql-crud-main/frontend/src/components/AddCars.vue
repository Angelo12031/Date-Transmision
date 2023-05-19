<template>
    <div class="submit-form">
        <div v-if="!submitted">
            <div class="form-group">
                <label for="make">Make</label>
                <input
                        type="text"
                        class="form-control"
                        id="make"
                        required
                        v-model="car.make"
                        name="make"
                />
            </div>

            <div class="form-group">
                <label for="model">Model</label>
                <input
                        class="form-control"
                        id="model"
                        required
                        v-model="car.model"
                        name="model"
                />
            </div>

            <div class="form-group">
                <label for="year">Year</label>
                <input
                        type="number"
                        class="form-control"
                        id="year"
                        required
                        v-model="car.year"
                        name="year"
                />
            </div>

            <div class="form-group">
                <label for="price">Price</label>
                <input
                        type="number"
                        class="form-control"
                        id="price"
                        required
                        v-model="car.price"
                        name="price"
                />
            </div>

            <div class="form-group">
                <label for="published">Published</label>
                <input
                        type="checkbox"
                        class="form-control"
                        id="published"
                        v-model="car.published"
                        name="published"
                />
            </div>

            <button @click="saveCar" class="btn btn-success">Submit</button>
        </div>

        <div v-else>
            <h4>You submitted successfully!</h4>
            <button class="btn btn-success" @click="newCar">Add</button>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CarDataService from "@/services/CarDataService";
import Car from "@/types/Cars";
import ResponseData from "@/types/ResponseData";

export default defineComponent({
    name: "add-car",
    data: function () {
        return {
            car: {
                "id": null,
                "make": "",
                "model": "",
                "year": null,
                "price": null,
                "published": false
            } as Car,
            submitted: false,
        };
    },
    methods: {
        saveCar() {
            let data = {
                make: this.car.make,
                model: this.car.model,
                year: this.car.year,
                price: this.car.price,
                published: this.car.published
            };

            CarDataService.create(data)
                .then((response: ResponseData) => {
                    this.car.id = response.data.id;
                    console.log(response.data);
                    this.submitted = true;
                })
                .catch((e: Error) => {
                    console.log(e);
                });
        },

        newCar() {
            this.submitted = false;
            this.car = {} as Car;
        },
    },

});
</script>
