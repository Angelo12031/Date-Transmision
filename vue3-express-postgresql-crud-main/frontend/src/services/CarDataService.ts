import http from "@/http-common";

class CarDataService {
    getAll(): Promise<any> {
        return http.get("/car");
    }

    get(id: any): Promise<any> {
        return http.get(`/car/${id}`);
    }

    create(data: any): Promise<any> {
        return http.post("/car" , data);
    }

    update(id: any , data: any): Promise<any> {
        return http.put(`/car/${id}` , data);
    }

    delete(id: any): Promise<any> {
        return http.delete(`/car/${id}`);
    }

    deleteAll(): Promise<never> {
        return http.delete(`/car`);
    }

    findByMakeBy(makeby: string): Promise<any> {
        return http.get(`/car?make=${makeby}`);
    }
}

export default new CarDataService();
