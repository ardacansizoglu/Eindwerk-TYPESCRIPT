interface VehicleInterface {
    id: symbol;
    brand: string;
    model: string;
    year: number;
    description: string;
}
// Ik heb gedefineerd een type alias VehicleAlias voor een array van VehicleInterface objecten.
type VehicleAlias = VehicleInterface[];


//Singleton class!!
class RegistrationSystem {
    private static instance : RegistrationSystem;

    private vehicles: VehicleAlias = []; //array van vehicles

    private constructor() {} //private olarak tanimlandi,bu sayede REGISTRATIONSYSTEM sinifinin disindan yeni bir ornek olusTURULAMAZ!!


    public static getInstance(): RegistrationSystem { // //getInstance=>classin tek ornegini donduren bir metot
        if (!RegistrationSystem.instance) {
            RegistrationSystem.instance = new RegistrationSystem();
        }
        return RegistrationSystem.instance;
    }

    public addVehicle(brand: string,model: string,year: number,description: string): VehicleInterface{
        const newVehicle: VehicleInterface = {
            id: Symbol(),  //her araca benzersiz bir kimlik (id) atanmasını sağlıyor
            brand,
            model,
            year,
            description
        };

        this.vehicles.push(newVehicle);
            return newVehicle;
}

    public removeVehicle(id: symbol): boolean {
        const initialLength = this.vehicles.length;
            this.vehicles = this.vehicles.filter(vehicle => vehicle.id !== id);
    
            return this.vehicles.length < initialLength;
}
    public findVehiclesByBrand(brand: string): VehicleAlias {
        return this.vehicles.filter(vehicle => vehicle.brand.toLowerCase() === brand.toLowerCase());
}

}

